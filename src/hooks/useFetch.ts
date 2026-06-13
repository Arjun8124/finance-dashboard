import { useCallback, useEffect, useState } from "react";

/**
 * Small data-fetching hook: runs the given fetcher on mount and tracks
 * loading / error / data.
 *
 * - On mount, `loading` already starts as `true`, so the effect just kicks
 *   off the request.
 * - `refetch` (used by the retry button) resets state and runs it again.
 *
 * The fetcher is a stable function from the api module, so the effect runs
 * once on mount.
 */
export default function useFetch<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const run = useCallback(() => {
    fetcher()
      .then((result) => setData(result))
      .catch((err: unknown) =>
        setError(err instanceof Error ? err : new Error("Something went wrong")),
      )
      .finally(() => setLoading(false));
  }, [fetcher]);

  useEffect(() => {
    run();
  }, [run]);

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    run();
  }, [run]);

  return { data, loading, error, refetch };
}

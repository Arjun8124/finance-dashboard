import { useCallback, useEffect, useState } from "react";

// Runs `fetcher` on mount and tracks loading/error/data. `loading` starts
// true, so the effect just kicks off the request; `refetch` resets state and
// re-runs it (used by the retry button).
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

import { useCallback } from "react";
import ReactGA from "react-ga4";

// Put your GA4 Measurement ID here (in a real app, load it from an env var).
// While it's empty, events are logged to the console so you can see them fire
// in dev without a real GA property.
const GA_MEASUREMENT_ID = "";
const enabled = GA_MEASUREMENT_ID.length > 0;

if (enabled) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

/**
 * Thin wrapper around react-ga4. Exposes `trackEvent` and `trackPageView`.
 * Centralising analytics here keeps GA calls out of the components.
 */
export default function useAnalytics() {
  const trackEvent = useCallback(
    (name: string, params?: Record<string, unknown>) => {
      if (enabled) {
        ReactGA.event(name, params);
      } else {
        console.log("[analytics] event:", name, params ?? {});
      }
    },
    [],
  );

  const trackPageView = useCallback((path: string) => {
    if (enabled) {
      ReactGA.send({ hitType: "pageview", page: path });
    } else {
      console.log("[analytics] pageview:", path);
    }
  }, []);

  return { trackEvent, trackPageView };
}

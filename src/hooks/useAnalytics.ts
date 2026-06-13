import { useCallback } from "react";
import ReactGA from "react-ga4";

// Set your GA4 Measurement ID to send real events; while empty, events are
// logged to the console so they're visible in dev.
const GA_MEASUREMENT_ID = "";
const enabled = GA_MEASUREMENT_ID.length > 0;

if (enabled) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

// Thin wrapper around react-ga4 so components don't call GA directly.
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

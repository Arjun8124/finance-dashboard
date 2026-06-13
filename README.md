# Proton Finance — AI Wealth Dashboard

A personal-finance dashboard (net worth, spending, budgets, and AI-style
portfolio insights) built from a Figma design. It's a **single-page React app
written with React Native primitives** (`View`, `Text`, `Pressable`, …) that run
in the browser through **react-native-web** — so the same components could be
reused in a real React Native app.

## Tech stack

- **React 19** + **react-native-web** (UI written with RN primitives)
- **Vite** (dev server + build)
- **TypeScript**
- **react-router-dom** for routing
- **recharts** for the performance chart
- **react-ga4** for Google Analytics

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

To preview the error state, open any page with `?simulate=error`
(e.g. `http://localhost:5173/?simulate=error`).

## Project structure

```
src/
  api/          mock data + a fake async "API" layer
  components/   one folder per UI component (Component.tsx + styles + index.ts)
  constants/    design tokens (colors, typography)
  context/      Theme + mobile-nav React contexts
  hooks/        useFetch, useAnalytics, useDebounce, useLocalStorage, useResponsive
  screens/      Dashboard (/), Budget (/budget), Insights (/insights)
```

## Architecture decisions

- **react-native-web** — the assignment allows React or RN; using RN primitives
  on web means every component is portable to a real mobile app. Styling uses
  RN `StyleSheet` objects via a `createStyles(colors, isMobile)` factory so each
  component re-themes and re-flows responsively.
- **Component-based** — each component lives in its own folder with its styles
  and an `index.ts` barrel, so screens read as a clean composition of cards.
- **Data flows top-down** — screens fetch their data with `useFetch` and pass it
  to presentational components as props. Components don't fetch their own data,
  which keeps them reusable and easy to test.
- **Contexts for cross-cutting state** — theme (dark/light) and mobile-nav
  (drawer open/close) are small enough that React Context is the right tool;
  no Redux needed.

## Custom hooks

- **`useFetch(fetcher)`** — runs an async fetcher on mount and returns
  `{ data, loading, error, refetch }`. `loading` starts `true`, so the effect
  just kicks off the request; `refetch` resets state and re-runs (used by the
  retry button). Powers all loading / error / empty states.
- **`useAnalytics()`** — thin wrapper over react-ga4 returning `trackEvent` and
  `trackPageView`. Keeps GA calls out of components. Falls back to `console.log`
  when no GA Measurement ID is configured, so events are visible in dev.
- **`useDebounce(value, delay)`** — debounces the header search so we only track
  a search after the user stops typing.
- **`useLocalStorage(key, initial)`** — persists the dark/light theme choice
  across reloads.
- **`useResponsive()`** — returns `isMobile / isTablet / isDesktop` from the
  window width to drive the responsive layout and the mobile drawer.

## Data handling

`src/api` holds the mock dataset and a fake API that resolves after ~700ms to
simulate a network request. Every screen renders three states through a shared
`<DataState>` wrapper:

- **loading** → spinner
- **error** → message + Retry button (calls `refetch`)
- **empty** → empty message when a list comes back with no items

## Analytics (GA4)

Set your Measurement ID in `src/hooks/useAnalytics.ts` to send real events.
Events tracked:

- `page_view` on every route change
- `search` (debounced) from the header
- `filter_click` / `export_csv` from the transactions table
- `execute_strategy` from the strategy CTA

## Performance optimizations

- **Code splitting** — the three route screens are `React.lazy` + `Suspense`, so
  each loads on first visit. The build confirms separate chunks; recharts only
  ships in the Insights chunk, so the other routes don't download it.
- **`React.memo`** on the list-rendered cards (`MetricCard`, `AlertCard`,
  `BudgetCategoryCard`) to skip re-renders when their props don't change.
- **`useMemo`** for the per-component themed stylesheets and **`useCallback`**
  for stable hook callbacks.

## SEO & accessibility

- Document `<title>`, meta description, theme-color, and Open Graph tags in
  `index.html`.
- `accessibilityRole` / `accessibilityLabel` on interactive controls (search,
  theme toggle, hamburger, sidebar links, CTAs, retry). react-native-web maps
  these to ARIA roles, and `Pressable`s are keyboard-focusable.

## Design tokens

Colors and typography in `src/constants` are taken from the Figma design-system
frames (e.g. Display 44 / Heading 24 / Title 18 / Body 14, and the
blue / green / amber / red accent palette), with a full dark and light theme.

## Trade-offs & known limitations

- **react-native-web vs SEO** — RN primitives render as `<div>`s, so true
  semantic tags (`<header>`/`<main>`/`<section>`) aren't available. SEO here
  relies on the document title + meta/OG tags. A content-SEO-critical app would
  use a framework with SSR (e.g. Next.js).
- **`useFetch` is intentionally minimal** — no caching, request dedup, or
  cancellation. For a real app I'd reach for React Query / SWR; that was
  overkill for static mock data here.
- **Mock data is static** — there's no backend; the API layer fakes latency.
- **Mobile nav** uses a slide-out drawer rather than the bottom tab bar shown in
  some mobile frames — a deliberate simplification.
- **Branding differs per screen** (Proton Finance / Editorial Finance / Wealth
  Curator) because each screen follows a different frame in the shared design.

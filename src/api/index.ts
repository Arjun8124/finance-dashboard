// Fake API layer. Pretends the mock data comes from a server by resolving
// after a short delay, so the screens can show real loading and error states.
//
// Tip: add ?simulate=error to the URL to preview the error state.

import { dashboardData, budgetData, insightsData } from "./mockData";

const DELAY = 700;

const simulateError =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("simulate") === "error";

function fetchData<T>(data: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject(new Error("We couldn't load your data. Please try again."));
      } else {
        resolve(data);
      }
    }, DELAY);
  });
}

export const getDashboard = () => fetchData(dashboardData);
export const getBudget = () => fetchData(budgetData);
export const getInsights = () => fetchData(insightsData);

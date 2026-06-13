// Fake API: resolves the mock data after a short delay so the screens can
// show a loading state while "fetching".

import { dashboardData, budgetData, insightsData } from "./mockData";

const DELAY = 700;

function fetchData<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), DELAY);
  });
}

export const getDashboard = () => fetchData(dashboardData);
export const getBudget = () => fetchData(budgetData);
export const getInsights = () => fetchData(insightsData);

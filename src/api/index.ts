import { dashboardData, budgetData, insightsData } from "./mockData";

const DELAY = 500;

function fetchData<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), DELAY);
  });
}

export const getDashboard = () => fetchData(dashboardData);
export const getBudget = () => fetchData(budgetData);
export const getInsights = () => fetchData(insightsData);

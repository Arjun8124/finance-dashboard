// Mock dataset for the dashboard. In a real app this would come from an API;
// here it stands in as our "mock JSON" and is served through the fake async
// layer in `./index.ts`.

export type Metric = {
  title: string;
  value: string;
  change: string;
  color: string;
};

export type Alert = {
  id: string;
  title: string;
  description: string;
  iconColor: string;
};

export type SpendingSlice = {
  category: string;
  percentage: number;
  color: string;
};

export type Transaction = {
  id: string;
  merchant: string;
  category: string;
  status: "Cleared" | "Pending";
  amount: string;
  date: string;
};

export type DashboardData = {
  metrics: Metric[];
  alerts: Alert[];
  spending: SpendingSlice[];
  transactions: Transaction[];
};

export type BudgetCategory = {
  id: string;
  title: string;
  spent: string;
  limit: string;
  percentage: number;
  status: "OPTIMAL" | "HEALTHY" | "CRITICAL" | "FIXED";
  color: string;
};

export type BudgetData = {
  metrics: Metric[];
  categories: BudgetCategory[];
};

export type CashFlowInsight = {
  id: string;
  icon: string;
  title: string;
  desc: string;
};

export type InsightsData = {
  // raw numbers so we can generate the headline insight dynamically
  techExposureChange: number;
  duplicateSubscriptionSavings: number;
  cashFlow: CashFlowInsight[];
};

export const dashboardData: DashboardData = {
  metrics: [
    { title: "Total Net Worth", value: "$1,248,500", change: "+12.4% vs last month", color: "#10B981" },
    { title: "Monthly Spending", value: "$4,280", change: "+2.1% higher than avg", color: "#F59E0B" },
    { title: "Total Savings", value: "$245,000", change: "On track for Q4 goal", color: "#10B981" },
  ],
  alerts: [
    { id: "a1", title: "Subscription Spike", description: '3 new recurring charges detected from "Cloud SaaS" in the last 48h.', iconColor: "#EF4444" },
    { id: "a2", title: "Emergency Fund Cap", description: 'Your "Rainy Day" fund has reached its target of $20k. Redirecting flows?', iconColor: "#F59E0B" },
    { id: "a3", title: "Dividend Reinvestment", description: "AAPL and MSFT paid dividends today. Automatic reinvestment pending.", iconColor: "#3B82F6" },
  ],
  spending: [
    { category: "Housing & Utilities", percentage: 42, color: "#A5B4FC" },
    { category: "Dining & Leisure", percentage: 18, color: "#FDBA74" },
    { category: "Investments", percentage: 25, color: "#34D399" },
    { category: "Transportation", percentage: 15, color: "#94A3B8" },
  ],
  transactions: [
    { id: "t1", merchant: "Apple Store Soho", category: "Technology", status: "Cleared", amount: "-$1,299.00", date: "Oct 24, 2023" },
    { id: "t2", merchant: "Blue Hill Farm", category: "Lifestyle", status: "Cleared", amount: "-$485.20", date: "Oct 23, 2023" },
    { id: "t3", merchant: "ConEd Utility Bill", category: "Utilities", status: "Pending", amount: "-$214.10", date: "Oct 22, 2023" },
    { id: "t4", merchant: "Monthly Salary Deposit", category: "Income", status: "Cleared", amount: "+$12,500.00", date: "Oct 21, 2023" },
  ],
};

export const budgetData: BudgetData = {
  metrics: [
    { title: "Projected Surplus", value: "+$2,550", change: "", color: "#10B981" },
    { title: "Savings Efficiency", value: "94.2%", change: "", color: "#10B981" },
  ],
  categories: [
    { id: "c1", title: "Housing & Rent", spent: "$3200", limit: "$3200", percentage: 100, status: "FIXED", color: "#2563EB" },
    { id: "c2", title: "Groceries", spent: "$642", limit: "$900", percentage: 71, status: "HEALTHY", color: "#10B981" },
    { id: "c3", title: "Entertainment", spent: "$450", limit: "$500", percentage: 90, status: "CRITICAL", color: "#EF4444" },
    { id: "c4", title: "Lifestyle", spent: "$210", limit: "$600", percentage: 35, status: "OPTIMAL", color: "#F59E0B" },
  ],
};

export const insightsData: InsightsData = {
  techExposureChange: 14.2,
  duplicateSubscriptionSavings: 180,
  cashFlow: [
    { id: "i1", icon: "💡", title: "Surplus Opportunity", desc: "You spent 12% less on dining this month. Transfer $450 to your Growth basket to stay ahead of your 2024 goal." },
    { id: "i2", icon: "🔄", title: "Recurring Audit", desc: "We detected two overlapping streaming subscriptions. Canceling XMedia+ would save you $180 annually." },
    { id: "i3", icon: "📊", title: "Tax-Loss Harvesting", desc: "3 assets in your legacy portfolio are eligible for tax-loss harvesting. Potential benefit: $2,100." },
  ],
};

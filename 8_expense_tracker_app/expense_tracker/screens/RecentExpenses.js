import React, { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpense() {
     const expenses = await fetchExpenses();
    }

    getExpenses();
  }, [])

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo;
  });

  return (
    <ExpensesOutput
      fallbackText={"No expenses registered for the last 7 days"}
      expensesPeriod={"Last 7 Days"}
      expenses={recentExpenses}
    />
  );
};

export default RecentExpenses;

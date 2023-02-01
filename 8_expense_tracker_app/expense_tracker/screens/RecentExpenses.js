import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);

  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesContext.setExpenses(expenses);
    }

    getExpenses();
  }, []);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo;
  });

  if (isFetching) {
    return (
        <LoadingOverlay />
    )
  }

  return (
    <ExpensesOutput
      fallbackText={"No expenses registered for the last 7 days"}
      expensesPeriod={"Last 7 Days"}
      expenses={recentExpenses}
    />
  );
};

export default RecentExpenses;

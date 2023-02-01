import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      try {
       const expenses = await fetchExpenses();
       expensesContext.setExpenses(expenses);
      } catch (e) {
        setError('Could not fetch expenses!');
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo;
  });

  if (error && !isFetching) {
    return (
        <ErrorOverlay message={error} />
    )
  }

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

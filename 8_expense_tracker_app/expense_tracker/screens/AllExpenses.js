import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      fallbackText={"No expenses registered yet"}
      expensesPeriod={"total"}
      expenses={expensesContext.expenses}
    />
  );
};

export default AllExpenses;

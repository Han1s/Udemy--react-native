import React from "react";
import { Text, View } from "react-native";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <View>
      <Text>Last 7 Days</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

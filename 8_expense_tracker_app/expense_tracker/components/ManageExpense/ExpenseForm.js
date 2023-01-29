import React from "react";
import { View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangedHandler = (text) => {};

  return (
    <View>
      <Input
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          placeholder: "0.00",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label={"Date"}
        textInputConfig={{
          keyboardType: "number-pad",
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

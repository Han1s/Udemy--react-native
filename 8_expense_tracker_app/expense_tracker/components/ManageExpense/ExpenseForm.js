import React, { useState } from "react";
import { Text, View } from "react-native";
import Input from "./Input";
import { StyleSheet } from "react-native";

const ExpenseForm = () => {
  const [inputValue, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangedHandler = (text, inputIdentifier) => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: text,
      };
    });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "0.00",
            onChangeText: (text) => inputChangedHandler(text, "amount"),
            value: inputValue.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            keyboardType: "number-pad",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputValue.date,
            onChangeText: (text) => inputChangedHandler(text, "date"),
          }}
        />
      </View>
      <View style={styles.inputRow}>
        <Input
          label={"Description"}
          textInputConfig={{
            multiline: true,
            value: inputValue.description,
            onChangeText: (text) => inputChangedHandler(text, "description"),
          }}
        />
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});

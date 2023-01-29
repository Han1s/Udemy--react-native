import React from "react";
import { Text, View } from "react-native";
import Input from "./Input";
import { StyleSheet } from "react-native";

const ExpenseForm = () => {
  const amountChangedHandler = (text) => {};

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
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            keyboardType: "number-pad",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <View style={styles.inputRow}>
        <Input
          label={"Description"}
          textInputConfig={{
            multiline: true,
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

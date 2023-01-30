import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Input from "./Input";
import { StyleSheet } from "react-native";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [Inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangedHandler = (text, inputIdentifier) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [inputIdentifier]: { value: text, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +Inputs.amount.value,
      date: new Date(Inputs.date.value),
      description: Inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((prevInputs) => {
        return {
          amount: {
            ...prevInputs.amount,
            isValid: amountIsValid,
          },
          date: {
            ...prevInputs.date,
            isValid: dateIsValid,
          },
          description: {
            ...prevInputs.description,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !Inputs.amount.isValid ||
    !Inputs.date.isValid ||
    !Inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          invalid={!Inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "0.00",
            onChangeText: (text) => inputChangedHandler(text, "amount"),
            value: Inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          invalid={!Inputs.date.isValid}
          textInputConfig={{
            keyboardType: "number-pad",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: Inputs.date.value,
            onChangeText: (text) => inputChangedHandler(text, "date"),
          }}
        />
      </View>
      <View style={styles.inputRow}>
        <Input
          label={"Description"}
          invalid={!Inputs.description.isValid}
          textInputConfig={{
            multiline: true,
            value: Inputs.description.value,
            onChangeText: (text) => inputChangedHandler(text, "description"),
          }}
        />
      </View>
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check the form.
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode={"flat"} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginTop: 40,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
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
  button: {
    width: 120,
    marginHorizontal: 8,
  },
});

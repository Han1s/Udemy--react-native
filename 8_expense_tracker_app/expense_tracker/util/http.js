import axios from "axios";

export const storeExpene = (expenseData) => {
  axios.post(
    "https://react-native-course-4af99-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData,
  );
};

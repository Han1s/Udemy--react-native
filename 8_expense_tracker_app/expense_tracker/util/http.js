import axios from "axios";

const BACKEND_URL = "https://react-native-course-4af99-default-rtdb.europe-west1.firebasedatabase.app";

export const storeExpene = (expenseData) => {
  axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData,
  );
};

export const fetchExpenses = async () => {
    const response = await axios.get(
        `${BACKEND_URL}/expenses.json`,
    );

    const expenses = [];

    for (const key in response.data) {
        expenses.push({
            ...response.data[key],
            id: key,
            date: new Date(response.data[key].date),
        });
    }

    return expenses;
}
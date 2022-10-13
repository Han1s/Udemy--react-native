import { StyleSheet, Button, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <Button title="Add Goal" />
        <TextInput placeholder="Your course goal" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});

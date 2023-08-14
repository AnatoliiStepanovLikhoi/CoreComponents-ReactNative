import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "blue", flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "green", flex: 3 }}>Box 2</Box>
      <Box style={{ backgroundColor: "black" }}>Box 3</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 4</Box>
      <Box style={{ backgroundColor: "tomato" }}>Box 5</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});

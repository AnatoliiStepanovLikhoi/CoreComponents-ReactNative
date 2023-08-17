import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "blue" }}>Box 1</Box>
      <Box style={{ backgroundColor: "green" }}>Box 2</Box>
      <Box style={{ backgroundColor: "black" }}>Box 3</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 4</Box>
      <Box style={{ backgroundColor: "tomato", flexGrow: 1 }}>Box 5</Box>
      <Box style={{ backgroundColor: "plum", flexGrow: 3 }}>Box 6</Box>
      <Box style={{ backgroundColor: "magenta" }}>Box 7</Box>
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

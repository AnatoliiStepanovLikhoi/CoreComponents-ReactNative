import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "blue", top: 75, left: 75 }}>Box 1</Box>
      <Box style={{ backgroundColor: "green" }}>Box 2</Box>
      <Box style={{ backgroundColor: "black" }}>Box 3</Box>
      <Box
        style={{
          backgroundColor: "pink",
          position: "absolute",
          top: 175,
          left: 175,
        }}
      >
        Box 4
      </Box>
      <Box style={{ backgroundColor: "tomato" }}>Box 5</Box>
      <Box style={{ backgroundColor: "plum" }}>Box 6</Box>
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

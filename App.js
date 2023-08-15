import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "blue", alignSelf: "flex-start" }}>
        Box 1
      </Box>
      <Box style={{ backgroundColor: "green", alignSelf: "flex-end" }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "black", alignSelf: "center" }}>Box 3</Box>
      <Box style={{ backgroundColor: "pink", alignSelf: "stretch" }}>Box 4</Box>
      <Box style={{ backgroundColor: "tomato", alignSelf: "auto" }}>Box 5</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});

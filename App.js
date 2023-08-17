import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "blue", flexShrink: 1 }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: "green", flexShrink: 2 }}>
        Box 2 shrink
      </Box>
      {/* <Box style={{ backgroundColor: "black", flexBasis: 140, flex: 1 }}>
        Box 3
      </Box>
      <Box style={{ backgroundColor: "pink", height: 140, flex: 1 }}>Box 4</Box>
      <Box style={{ backgroundColor: "tomato" }}>Box 5</Box>
      <Box style={{ backgroundColor: "plum" }}>Box 6</Box>
      <Box style={{ backgroundColor: "magenta" }}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    width: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});

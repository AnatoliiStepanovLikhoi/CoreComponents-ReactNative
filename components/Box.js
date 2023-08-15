import { View, Text, StyleSheet } from "react-native";

export default function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 20,
    height: 90,
    width: 90,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

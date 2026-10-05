import {
  Pressable,
  Text,
  StyleSheet,
} from "react-native";

export default function ActionButton({
  title,
  onPress,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 10,
    backgroundColor: "#172554",
    borderRadius: 25,
  },

  buttonPressed: {
    backgroundColor: "#9bc0ea",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
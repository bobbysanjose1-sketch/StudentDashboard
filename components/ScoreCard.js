import { View, Text, StyleSheet } from "react-native";

export default function ScoreCard({ score, result }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>
        {result === "" ? "Current Score" : "Result"}
      </Text>

      <Text style={styles.score}>
        {result === "" ? score : result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#2563A6",
    borderRadius: 50,
  },

  label: {
    fontSize: 18,
    color: "white",
  },

  score: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
});
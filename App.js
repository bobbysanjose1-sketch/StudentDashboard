import {
  View,
  StyleSheet,
} from "react-native";
import { useState } from "react";

import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import ScoreCard from "./components/ScoreCard";
import ActionButton from "./components/ActionButton";

export default function App() {
  const [score, setScore] = useState(50);
  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>

      <Header title="MyStudent Portal" />

      <StudentCard
        name="Bobby San Jose"
        course="BS Information Technology"
        year="3rd Year"
        section="BSIT-3B"
        email="bobbysanjose1@gmail.com"
        school="USTP Panaon"
      />

      <ScoreCard
        score={score}
        result={result}
      />

      <ActionButton
        title="Add 5 Points"
        onPress={() => setScore(score + 5)}
      />

      <ActionButton
        title="Remove 5 Points"
        onPress={() => setScore(score - 5)}
      />

      <ActionButton
        title="Reset Score"
        onPress={() => {
          setScore(50);
          setResult("");
        }}
      />

      <ActionButton
        title="Submit"
        onPress={() => {
          if (score >= 70) {
            setResult("Passed");
          } else {
            setResult("Failed");
          }
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
});
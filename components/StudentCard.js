import { View, Text, StyleSheet } from "react-native";
export default function StudentCard({
 name,
 course,
 year,
 section,
 email,
 school,
}) {
 return (
 <View style={styles.card}>
 <Text style={styles.name}>{name}</Text>
 <Text style={styles.course}>Course: {course}</Text>
 <Text style={styles.year}>Year: {year}</Text>
 <Text style={styles.section}>Section: {section}</Text>
 <Text style={styles.email}>Email: {email}</Text>
 <Text style={styles.school}>School: {school}</Text>
 </View>
 );
}
const styles = StyleSheet.create({
 card: {
 padding: 20,
 marginTop: 20,
 borderRadius: 10,
 backgroundColor: "#9bc0ea",
 },
 name: {
 fontSize: 25,
 fontWeight: "bold",
 marginBottom: 10,
 color: "#fff",
 },
    course: {
        color: "#fff",
    },
    year: {
        color: "#fff",
    },
    section: {
        color: "#fff",
    },
    email: {
        color: "#fff",
    },
    school: {
        color: "#fff",
    },
});
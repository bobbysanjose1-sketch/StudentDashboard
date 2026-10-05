import { View, Text, StyleSheet } from "react-native";
export default function Header({ title }) {
 return (
 <View style={styles.header}>
 <Text style={styles.title}>{title}</Text>
 </View>
 );
}
const styles = StyleSheet.create({
 header: {
 padding: 20,
 backgroundColor: "#1E3A5F",
  borderTopRightRadius: 25,
  borderTopLeftRadius: 25,
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,

 },
 title: {
 color: "white",
 fontSize: 24,
 fontWeight: "bold",
 textAlign: "center",
 },
});
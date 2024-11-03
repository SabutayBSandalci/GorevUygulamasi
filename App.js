import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UrunList from "./components/UrunList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ürün Listesi</Text>
      <UrunList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    marginTop: 50, 
    textAlign: "center", 
  },
});
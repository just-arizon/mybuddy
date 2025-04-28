import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function customNotfound() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>404</Text>
      <Text>Page not found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

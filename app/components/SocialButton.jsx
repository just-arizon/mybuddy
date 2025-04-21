import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons'; 

export default function SocialButton() {
  return (
    <View style={styles.socials}>
      <TouchableOpacity style={styles.socialIcon}>
        <FontAwesome name="google" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialIcon}>
        <FontAwesome name="facebook" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialIcon}>
        <FontAwesome name="apple" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    socials: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
      },
      socialIcon: {
        width: 70,
        height: 45,
        borderRadius: 4,
        backgroundColor: "#ececec",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
        elevation: 2, // adds subtle shadow for Android
      },
      
});

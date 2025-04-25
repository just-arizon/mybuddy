import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Link, useRouter } from "expo-router";
import SocialButton from "../components/SocialButton";
import * as Font from "expo-font";


const Register = () => {
  const router = useRouter();
  //  const [fontsLoaded] = Font.useFonts({
  //     Roboto: require("../../assets/fonts/Roboto_Condensed-ExtraBold.ttf"),
  //     Montserrat: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
  //   });
  
  
  //   if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Create Account</Text>
      <Text style={styles.subheading}>Create an account so you can explore all the existing jobs</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#555"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#555"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#555"
        secureTextEntry
      />


      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>

      <Link href="/login" style={styles.secondaryText}>
        Already have an account
      </Link>

      <Text style={styles.orText}>Or continue with</Text>
      <SocialButton />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },

  image: {
    height: 120,
    resizeMode: "contain",
    alignSelf: "flex-start",
    zIndex: 2,
    marginHorizontal: 10

  },
  heading: {
    fontSize: 35,
    fontWeight: "700",
    marginTop: 20,
    textAlign: "center",
    color: "#1B4F40",
  },
  subheading: {
    fontSize: 14,
    color: "#000",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 47,
    // fontFamily: 'Montserrat'
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginHorizontal: 10
  },

  primaryBtn: {
    backgroundColor: "#1B4F40",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginHorizontal: 10

  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  secondaryText: {
    textAlign: "center",
    marginTop: 20,
  },
  orText: {
    textAlign: "center",
    marginTop: 80,
    marginBottom: 20,
  },
});

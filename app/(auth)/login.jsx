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

const Login = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.image}
      />
      <Image
        source={require("../../assets/images/onboarding.png")}
        style={styles.onboardingImage}
      />

      <Text style={styles.heading}>Login here</Text>
      <Text style={styles.subheading}>Welcome back you’ve been missed!</Text>

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

      <Text style={styles.forgotText}>Forgot your password?</Text>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>

      <Link href="/register" style={styles.secondaryText}>
        Create new account
      </Link>

      <Text style={styles.orText}>Or continue with</Text>
      <SocialButton />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  onboardingImage: {
    position: "absolute",
    top: -50,
    right: -20,
    width: 250,
    height: 250,
    resizeMode: "contain",
    opacity: 0.8,
    // zIndex: 1,
  },
  image: {
    height: 120,
    resizeMode: "contain",
    alignSelf: "flex-start",
    zIndex: 2,
  },
  heading: {
    fontSize: 35,
    fontWeight: "700",
    marginTop: 20,
    textAlign: "center",
    color: "#0E7C60",
  },
  subheading: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 47,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  forgotText: {
     alignSelf: "flex-end", 
     marginBottom: 20, 
     color: "#0E7C60" 
    },
  primaryBtn: {
    backgroundColor: "#1B4F40",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
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

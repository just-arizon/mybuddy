import React, { useState } from "react";
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

  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Here</Text>
      <Text style={styles.subheading}>Welcome back you’ve been missed!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            { borderColor: isEmailFocused ? "#1B4F40" : "#ddd" },
          ]}
          placeholder="Email"
          placeholderTextColor="#555"
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />

        <TextInput
          style={[
            styles.input,
            { borderColor: isPasswordFocused ? "#1B4F40" : "#ddd" },
          ]}
          placeholder="Password"
          placeholderTextColor="#555"
          secureTextEntry
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
      </View>

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
  container: {
    flex: 1,
    position: "relative",
    width: "100%",
    paddingHorizontal: 10,
  },
  image: {
    height: 120,
    resizeMode: "contain",
    alignSelf: "flex-start",
    zIndex: 2,
  },
  heading: {
    fontSize: 35,
    fontFamily: "Nunito",
    fontWeight: "700",
    marginTop: 20,
    textAlign: "center",
    color: "#1B4F40",
  },
  subheading: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 80,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 30,
    gap: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  forgotText: {
    alignSelf: "flex-end",
    marginBottom: 20,
    color: "#0E7C60",
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

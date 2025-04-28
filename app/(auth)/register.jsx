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
import * as Font from "expo-font";


const Register = () => {
  const router = useRouter();

    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isPasswordFocused, setPasswordFocused] = useState(false);
    const [isConfirmedPasswordFocused, setConfirmedPasswordFocused] = useState(false);


  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Create Account</Text>
      <Text style={styles.subheading}>Create an account so you can explore all the existing jobs</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
              { borderColor: isEmailFocused ? "#1B4F40" : "#ddd" },
          ]
          }
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
        <TextInput
          style={[
            styles.input,
            { borderColor: isConfirmedPasswordFocused ? "#1B4F40" : "#ddd" },
          ]}
          placeholder="Confirm Password"
          placeholderTextColor="#555"
          secureTextEntry
          onFocus={() => setConfirmedPasswordFocused(true)}
          onBlur={() => setConfirmedPasswordFocused(false)}
        />
      </View>


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
    position: "relative",
    width: "100%",
    // paddingHorizontal: 10, 
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
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 47,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 23,
    gap: 10,
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

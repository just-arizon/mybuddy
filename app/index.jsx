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

export default function index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.image}
      />
      <Image
        source={require("../assets/images/onboarding.png")}
        style={styles.onboardingImage}
      />
      <View style={{}}>
        <Image
          style={styles.welcomeImage}
          source={require("../assets/images/welcome.png")}
        />
      </View>

      <Text style={styles.heading}>
        This is the closest you’ll get to an everything app
      </Text>
      <Text style={styles.subheading}>
        Shop with us, Pay for utilities, or read on the go! Mybudy’s got you
      </Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity 
        style={styles.primaryBtn}
        onPress={() => router.push("/login")}
        >
            <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.secondaryBtn}
         onPress={() => router.push("/register")}
         >
            <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onboardingImage: {
    position: "absolute",
    top: -20,
    right: -20,
    width: 250,
    height: 250,
    resizeMode: "contain",
    opacity: 0.8,
  },
  image: {
    height: 120,
    resizeMode: "contain",
    alignSelf: "flex-start",
    zIndex: 2,
    marginHorizontal: 10,
  },
  welcomeImage: {
    position: "relative",
    width: 370,
    height: 300,
    resizeMode: "contain",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    color: "#0E7C60",
  },
  subheading: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 47,
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  primaryBtn: {
    backgroundColor: "#1B4F40",
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    fontWeight: "bold",

  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

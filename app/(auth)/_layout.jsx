import { View, StyleSheet, Image } from "react-native";
import { Slot } from "expo-router";
import * as Font from "expo-font";


export default function AuthLayout() {
  const [fontsLoaded] = Font.useFonts({
      Nunito: require("../../assets/fonts/Nunito-VariableFont_wght.ttf"),
  
    });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
         <Image
              source={require("../../assets/images/onboarding.png")}
              style={styles.onboardingImage}
            />
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 120,
    resizeMode: "contain",
    alignSelf: "flex-start",
    zIndex: 2,
    marginHorizontal: 10,
    position: "relative",
    // top: ,
  },
  onboardingImage: {
    position: "absolute",
    top: -10,
    right: -10,
    width: 250,
    height: 250,
    resizeMode: "contain",
    opacity: 0.8,
  },
});
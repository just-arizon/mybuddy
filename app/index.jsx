import { StyleSheet, Text, View } from "react-native";
import { React, useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/Onboarding";

export default function index() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000); // Show splash screen for 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return <>{isShowSplash ? <SplashScreen /> : <Onboarding />}</>;
}

const styles = StyleSheet.create({});

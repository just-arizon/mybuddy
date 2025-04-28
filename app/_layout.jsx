import { 
  useColorScheme,
  View
 } from "react-native";
import { Stack, Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";


const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  return (
    <SafeAreaProvider>
      {/* <Stack>
        <Stack.Screen  name="(tabs)" options={{ headerShown: false }} />
      </Stack> */}
      {/* <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View> */}
      <Slot />
    </SafeAreaProvider>
  );
};

export default RootLayout;



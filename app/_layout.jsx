import { useColorScheme } from 'react-native';
import { Stack, Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  return (
    <SafeAreaProvider>
      {/* <Stack>
        <Stack.Screen  name="(tabs)" options={{ headerShown: false }} />
      </Stack> */}
      <Slot />
    </SafeAreaProvider>
  );
};

export default RootLayout;

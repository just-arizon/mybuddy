import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  return (
    <SafeAreaProvider>
      <Stack>
        {/* This is pointing to the (tabs) folder */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;

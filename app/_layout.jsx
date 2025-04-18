import { StyleSheet, useColorScheme, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const RootLayout = () => {
    const colorScheme = useColorScheme();
    console.log(colorScheme);
    
  return (
    <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
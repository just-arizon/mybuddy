import { StyleSheet, Text, View } from 'react-native'
import { Stack, Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";

export default function _layout() {
  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})
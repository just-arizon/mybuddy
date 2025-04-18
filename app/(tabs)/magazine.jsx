import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const magazine = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magazine</Text>

      <Link style={styles.link} href={"/"}>Back Home</Link>
    </View>
  )
}

export default magazine

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#000',
        marginTop: 10,
    },
    link:{
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/logo.png'
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={ Logo } style={styles.image}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
})
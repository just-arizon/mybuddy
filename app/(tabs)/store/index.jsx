import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Logo from "../../../assets/images/logo.png";
import Banner1 from '../../../assets/images/banner1.png';

const index = () => {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.storeContainer}>
        <View>
            <TextInput />
        </View>
      <View>
          <Image source={Banner1} style={styles.banner} />
      </View>
      </View>

    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  logoContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
    storeContainer: {
        width: "100%",
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 20,
    },
  banner: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 5,
  },
});

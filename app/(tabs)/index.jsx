import { StyleSheet, Text, View, Image, ScrollView, RefreshControl } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import Logo from '../../assets/images/logo.png'
// import Advert from '../../assets/images/Advert.png'
import WalletCard from '../components/WalletCard';
import AdBanner from '../components/AdBanner';
import ComingSoon from '../components/ComingSoon';

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };
  return (
    <ScrollView style={styles.container}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    >
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <WalletCard />
      <AdBanner />
      <ComingSoon />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#ededed',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
  accountContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#1B4F40',
  },
  img: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
})

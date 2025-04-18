// components/AdBanner.js
import { View, Image, StyleSheet } from 'react-native';
import Banner1 from '../../assets/images/banner1.png';
import Banner2 from '../../assets/images/banner2.png';
import ServiceButtons from './ServiceButtons';

export default function AdBanner() {
  return (
    <View style={styles.container}>
      <Image source={Banner1} style={styles.banner} />
      <ServiceButtons />
      <Image source={Banner2} style={styles.bannerTwo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  bannerTwo: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

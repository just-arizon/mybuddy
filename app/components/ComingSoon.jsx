// components/ComingSoon.js
import { View, Text, StyleSheet } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function ComingSoon() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <View style={styles.row}>
        <View style={styles.item}>
          <View style={{ backgroundColor: '#ebffee', borderRadius: 50, padding: 20 }}>
              <Entypo name="video" size={24} color="#1e4d2b" />
          </View>
          <Text>Movies</Text>
        </View>
        <View style={styles.item}>
          <View style={{ backgroundColor: '#ebffee', borderRadius: 50, padding: 20 }}>
              <Ionicons name="musical-notes" size={24} color="#1e4d2b" />
          </View>

          <Text>Music</Text>
        </View>
        <View style={styles.item}>
          <View style={{ backgroundColor: '#ebffee', borderRadius: 50, padding: 20 }}>
              <MaterialIcons name="travel-explore" size={24} color="#1e4d2b" />
          </View>
          <Text>Travel</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 5,
    marginBottom: 50,
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    alignItems: 'center',
  },
});

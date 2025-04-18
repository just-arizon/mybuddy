// components/ServiceButtons.js
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ServiceButtons() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <View style={{ backgroundColor: '#ebffee', borderRadius: 50, padding: 20 }}>
            <Ionicons name="phone-portrait-outline" size={24} color="#1e4d2b" />
        </View>
        <Text>Topup</Text>
      </View>
      <View style={styles.button}>
        <View style={{ backgroundColor: '#ebffee', borderRadius: 50, padding: 20 }}>
            <MaterialCommunityIcons name="flash" size={24} color="#1e4d2b" />
        </View>
        <Text>Electricity</Text>
      </View>
      <View style={styles.button}>
        <View style={{ backgroundColor: '#ebffee', borderRadius: 50, padding: 20 }}>
            <MaterialCommunityIcons name="television-classic" size={24} color="#1e4d2b" />
        </View>
        <Text>Cable</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
    // marginHorizontal: 10,
    paddingVertical: 30,
  },
  button: {
    alignItems: 'center',
  },
});

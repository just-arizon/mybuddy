// components/ServiceButtons.js
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,  Alert } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ServiceButtons() {
  const onPressButton = () => {
    Alert.alert('You pressed a button')
  }
  return (
    <View style={styles.container}>
      <View style={styles.button}>
      <TouchableHighlight onPress={onPressButton}
      underlayColor="#DDDDDD" style={{ borderRadius: 50 }}>
      
        <View style={{ backgroundColor: '#ebffee', borderRadius: 50, padding: 15 }}>
          
                <Ionicons name="phone-portrait-outline" size={24} color="#1e4d2b" />
        </View>
            </TouchableHighlight>
        <Text>Topup</Text>
      </View>
      <View style={styles.button}>
        <View style={{ backgroundColor: '#ebffee', borderRadius: 50, padding: 15 }}>
            <TouchableHighlight onPress={onPressButton}>
                <MaterialCommunityIcons name="flash" size={24} color="#1e4d2b" />
            </TouchableHighlight>
        </View>
        <Text>Electricity</Text>
      </View>
      <View style={styles.button}>
        <View style={{ backgroundColor: '#ebffee', borderRadius: 50, padding: 15 }}>
            <TouchableHighlight onPress={onPressButton}>
                <MaterialCommunityIcons name="television-classic" size={24} color="#1e4d2b" />
            </TouchableHighlight>
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
    paddingVertical: 10,
    borderShadowColor: '#000',
    borderShadowOpacity: 0.25,
  },
  button: {
    alignItems: 'center',
  },
});

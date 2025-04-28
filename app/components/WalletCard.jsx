import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const WalletCard = () => {
  return (
    <View style={styles.card}>
      {/* Cart Icon with Badge */}
      <View style={styles.cartContainer}>
        <FontAwesome name="shopping-cart" size={24} color="#fff" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hi Ola</Text>

      {/* Balance */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <View style={{  alignItems: 'flex-end', marginTop: 10 }}>
          <View style={{ height: 58 }}>
            <View style={styles.balanceRow}>
              <Text style={styles.label}>Available Balance</Text>
              <MaterialIcons name="visibility" size={16} color="#fff" style={{ marginLeft: 4 }} />
            </View>
            <Text style={styles.amount}>₦1,400.31</Text>
          </View>
        </View>

        {/* Buttons */}
        <View>
          <View style={styles.buttonRow}>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.actionBtn}>
                <FontAwesome name="exchange" size={16} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.btnText}>Transactions</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.actionBtn}>
                <FontAwesome name="credit-card" size={16} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.btnText}>Fund Wallet</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WalletCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e4d3b', // Custom green shade
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 10,
    marginTop: 10,
    position: 'relative',
  },
  greeting: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  label: {
    color: '#e0e0e0',
    fontSize: 12,
  },
  amount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    // backgroundColor: '#000',
    height: 50,
  },
  actionBtn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a6f55',
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  btnText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 12,
  },
  cartContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

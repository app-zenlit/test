import { View, Text, StyleSheet } from 'react-native';

export default function NetworkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Network</Text>
      <Text style={styles.subtext}>Connect with people around you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});
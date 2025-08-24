import { View, StyleSheet } from 'react-native';
import { AuthNavigator } from '@/components/AuthNavigator';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AuthNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
});
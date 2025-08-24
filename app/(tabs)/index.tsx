import { View, Text, StyleSheet } from 'react-native';
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
    backgroundColor: '#FFFFFF',
  },
});
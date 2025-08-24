import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface ZenlitLogoProps {
  size?: number;
}

export function ZenlitLogo({ size = 48 }: ZenlitLogoProps) {
  const fontSize = size;

  return (
    <MaskedView
      style={[styles.container, { height: fontSize * 1.3, width: fontSize * 4 }]}
      maskElement={
        <View style={styles.maskContainer}>
          <Text
            style={[
              styles.logoText,
              {
                fontSize,
                lineHeight: fontSize * 1.2,
              },
            ]}
          >
            Zenlit
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={['#2563EB', '#7E22CE']} // Blue → Purple gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  maskContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: '700',
    color: '#000', // This will be masked
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
});

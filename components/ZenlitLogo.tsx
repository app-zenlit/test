import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface ZenlitLogoProps {
  size?: number;
}

export function ZenlitLogo({ size = 48 }: ZenlitLogoProps) {
  const fontSize = size;

  return (
    <MaskedView
      style={[styles.container, { height: fontSize * 1.2, width: fontSize * 3.5 }]}
      maskElement={
        <View style={styles.maskContainer}>
          <Text
            style={[
              styles.logoText,
              {
                fontSize,
              }
            ]}
          >
            Zenlit
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={['#2563EB', '#7E22CE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  maskContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: '500',
    fontFamily: 'System', // Will use Inter when loaded
    color: 'black',
    textAlign: 'center',
  },
  gradient: {
    flex: 1,
  },
});
import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface ZenlitLogoProps {
  size?: number;
}

export function ZenlitLogo({ size = 32 }: ZenlitLogoProps) {
  const fontSize = size;

  return (
    <MaskedView
      style={{ height: fontSize * 1.2, width: fontSize * 4 }}
      maskElement={
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize,
              fontWeight: '500',
              fontFamily: 'System', // Will use Inter when loaded
              color: 'black',
            }}
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
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
}
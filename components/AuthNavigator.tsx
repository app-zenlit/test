import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginScreen } from './auth/LoginScreen';
import { SignUpScreen } from './auth/SignUpScreen';
import { ForgotPasswordScreen } from './auth/ForgotPasswordScreen';

export type AuthScreen = 'login' | 'signup' | 'forgot';

export function AuthNavigator() {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>('login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onNavigate={setCurrentScreen} />;
      case 'signup':
        return <SignUpScreen onNavigate={setCurrentScreen} />;
      case 'forgot':
        return <ForgotPasswordScreen onNavigate={setCurrentScreen} />;
      default:
        return <LoginScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
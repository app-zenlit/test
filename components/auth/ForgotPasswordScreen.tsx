import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ZenlitLogo } from '../ZenlitLogo';
import { ArrowLeft, Mail } from 'lucide-react-native';
import type { AuthScreen } from '../AuthNavigator';

interface ForgotPasswordScreenProps {
  onNavigate: (screen: AuthScreen) => void;
}

export function ForgotPasswordScreen({ onNavigate }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    setIsSubmitted(true);
    Alert.alert('Success', 'Password reset functionality will be connected to backend');
  };

  if (isSubmitted) {
    return (
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.backButton}>
            <TouchableOpacity 
              style={styles.backButtonTouchable}
              onPress={() => onNavigate('login')}
            >
              <ArrowLeft size={24} color="#1F2937" />
            </TouchableOpacity>
          </View>

          <View style={styles.successContainer}>
            <View style={styles.iconContainer}>
              <Mail size={48} color="#2563EB" />
            </View>
            <Text style={styles.successTitle}>Check your email</Text>
            <Text style={styles.successText}>
              We've sent password reset instructions to{'\n'}
              <Text style={styles.emailText}>{email}</Text>
            </Text>
            
            <TouchableOpacity 
              style={styles.backToLoginButton}
              onPress={() => onNavigate('login')}
            >
              <Text style={styles.backToLoginText}>Back to Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.resendButton}
              onPress={() => setIsSubmitted(false)}
            >
              <Text style={styles.resendText}>Didn't receive the email? Try again</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.backButton}>
          <TouchableOpacity 
            style={styles.backButtonTouchable}
            onPress={() => onNavigate('login')}
          >
            <ArrowLeft size={24} color="#1F2937" />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <ZenlitLogo size={40} />
          <Text style={styles.welcomeText}>Reset Password</Text>
          <Text style={styles.subtitleText}>
            Enter your email address and we'll send you instructions to reset your password
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={[
                styles.input,
                emailFocused && styles.inputFocused,
              ]}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email address"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </View>

          <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
            <LinearGradient
              colors={['#2563EB', '#7E22CE']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.resetButtonGradient}
            >
              <Text style={styles.resetButtonText}>Send Reset Instructions</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Remember your password?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => onNavigate('login')}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backButton: {
    marginBottom: 24,
  },
  backButtonTouchable: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 32,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#1F2937',
  },
  inputFocused: {
    borderColor: '#2563EB',
    borderWidth: 2,
  },
  resetButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 32,
  },
  resetButtonGradient: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  loginLink: {
    color: '#2563EB',
    fontWeight: '600',
  },
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EBF4FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  successText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  emailText: {
    fontWeight: '600',
    color: '#2563EB',
  },
  backToLoginButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 16,
  },
  backToLoginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resendButton: {
    paddingVertical: 12,
  },
  resendText: {
    color: '#6B7280',
    fontSize: 14,
    textAlign: 'center',
  },
});
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
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
        <View style={styles.content}>
          <View style={styles.backButton}>
            <TouchableOpacity 
              style={styles.backButtonTouchable}
              onPress={() => onNavigate('login')}
            >
              <ArrowLeft size={20} color="#E5E7EB" />
            </TouchableOpacity>
          </View>

          <View style={styles.successContainer}>
            <View style={styles.iconContainer}>
              <Mail size={40} color="#2563EB" />
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
              <LinearGradient
                colors={['#2563EB', '#7E22CE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.backToLoginText}>Back to Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.resendButton}
              onPress={() => setIsSubmitted(false)}
            >
              <Text style={styles.resendText}>Didn't receive the email? Try again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <View style={styles.backButton}>
          <TouchableOpacity 
            style={styles.backButtonTouchable}
            onPress={() => onNavigate('login')}
          >
            <ArrowLeft size={20} color="#E5E7EB" />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <ZenlitLogo size={32} />
          <Text style={styles.welcomeText}>Reset Password</Text>
          <Text style={styles.subtitleText}>
            Enter your email to receive reset instructions
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
              placeholderTextColor="#6B7280"
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
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backButtonTouchable: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1F2937',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 12,
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 20,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#E5E7EB',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    backgroundColor: '#1F2937',
    color: '#FFFFFF',
  },
  inputFocused: {
    borderColor: '#2563EB',
    borderWidth: 2,
  },
  resetButton: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },
  resetButtonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  loginLink: {
    color: '#2563EB',
    fontWeight: '600',
  },
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#1E3A8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  successText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  emailText: {
    fontWeight: '600',
    color: '#2563EB',
  },
  backToLoginButton: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },
  buttonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  backToLoginText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  resendButton: {
    paddingVertical: 8,
  },
  resendText: {
    color: '#9CA3AF',
    fontSize: 13,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
  },
  halfWidth: {
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 10,
    backgroundColor: '#1F2937',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#FFFFFF',
  },
  eyeButton: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  signupButton: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
    marginBottom: 16,
  },
  signupButtonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 10,
    paddingVertical: 14,
    backgroundColor: '#1F2937',
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#E5E7EB',
  },
});
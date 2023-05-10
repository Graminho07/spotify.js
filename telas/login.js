import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./spotify_logo.png')} style={styles.logo} />
      <TextInput
        style={[styles.input, { color: '#FFFFFF', borderColor: '#FFFFFF' }]}
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, { color: '#FFFFFF', borderColor: '#FFFFFF' }]}
        placeholder="Senha"
        placeholderTextColor="#FFFFFF"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Button
        title="Entrar"
        onPress={handleLogin}
        color="#1ED760"
        style={{ backgroundColor: '#9ACD32', color: '#0000000' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 8,
  },
  logo: {
    width: 168,
    height: 50,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

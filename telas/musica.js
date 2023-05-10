import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.recommendation}>Recomendação de hoje</Text>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ghost</Text>
        <Text style={styles.subtitle}>Justin Bieber</Text>
      </View>
      <Image source={require('./foto_justin.png')} style={styles.image} />
      <Image source={require('./play_spotify.png')} style={styles.spotifyImage} />
      <Text style={styles.spotifyText}>Letra</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E372F',
    paddingTop: Constants.statusBarHeight,
  },
  recommendation: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 10,
  },
  textContainer: {
    position: 'absolute',
    left: 37,
    bottom: 197,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
  },
  image: {
    flex: 1,
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    marginTop: 20,
  },
  spotifyImage: {
    width: 313,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  spotifyText: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
  },
});

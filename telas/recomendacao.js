import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import ghostImage from './ghost.png';
import inicioSpotifyImage from './inicio_spotify.png';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Bom dia</Text>
        <Text style={styles.subtitleText}>Recomendação de hoje</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={ghostImage} style={styles.image} />
      </View>
      <Card>
        <AssetExample />
      </Card>
      <View style={styles.spotifyContainer}>
        <Image source={inicioSpotifyImage} style={styles.spotifyImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#212121',
    padding: 8,
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitleText: {
    fontSize: 18,
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 400,
  },
  spotifyContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  spotifyImage: {
    width: 270,
    height: 110,
  },
});
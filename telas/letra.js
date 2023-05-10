import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Voltar')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ghost</Text>
          <Text style={styles.subtitle}>Justin Bieber</Text>
        </View>
      </View>
      <Card>
        <AssetExample />
      </Card>
      <Image
        style={styles.playButton}
        source={require('./play_spotify.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.ghostText}>Since the love that you left is all that I get
I want you to know
That if I can't be close to you
I'll settle for the ghost of you
I miss you more than life (yeah)
And if you can't be next to me
Your memory is ecstasy (oh)
I miss you more than life
I miss you more than life
Whoa
Na, na-na
More than life
(Oh)
So if I can't get close to you
I'll settle for the ghost of you
But I miss you more than life
And if you can't be next to me
Your memory is ecstasy
I miss you more than life
I miss you more than life</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0E372F',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  playButton: {
    position: 'absolute',
    bottom: 0,
    width: 300,
    height: 100,
  },
  textContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghostText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  }
});

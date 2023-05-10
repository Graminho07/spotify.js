import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from '../telas/login';
import recomendacao from '../telas/recomendacao';
import musica from '../telas/musica';
import letra from '../telas/letra';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="Recomendação" component={recomendacao} />
      <Stack.Screen name="Música" component={musica} />
      <Stack.Screen name="Letra" component={letra} />
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
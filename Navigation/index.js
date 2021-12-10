import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Anunciar from '../Pages/Anunciar';
import AnunciarCarro from '../Pages/AnunciarCarro';
import AtualizarAnuncio from '../Pages/AtualizarAnuncio';
import DeletarAnuncio from '../Pages/DeletarAnuncio';

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Anunciar" component={Anunciar}/>
        <Stack.Screen name="AnunciarCarro" component={AnunciarCarro}/>
        <Stack.Screen name="AtualizarAnuncio" component={AtualizarAnuncio}/>
        <Stack.Screen name="DeletarAnuncio" component={DeletarAnuncio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
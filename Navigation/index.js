import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Anunciar from '../Pages/Anunciar';
import AnunciarCarro from '../Pages/AnunciarCarro';
import AtualizarAnuncio from '../Pages/AtualizarAnuncio';
import DeletarAnuncio from '../Pages/DeletarAnuncio';
import Logout from '../Pages/Logout';
import Procurar from '../Pages/Procurar';


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Procurar" component={Procurar} options={{headerShown:false}}/>
        <Stack.Screen name="Anunciar" component={Anunciar} options={{headerShown:false}}/>
        <Stack.Screen name="AnunciarCarro" component={AnunciarCarro} options={{headerShown:false}}/>
        <Stack.Screen name="AtualizarAnuncio" component={AtualizarAnuncio} options={{headerShown:false}}/>
        <Stack.Screen name="DeletarAnuncio" component={DeletarAnuncio} options={{headerShown:false}}/>
        <Stack.Screen name="Logout" component={Logout}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
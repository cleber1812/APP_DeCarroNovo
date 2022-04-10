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
import Login from '../Pages/Login';
import CadastrarPessoa from '../Pages/CadastrarPessoa';
import MenuPessoas from '../Pages/MenuPessoas';
import ListarPessoas from '../Pages/ListarPessoas';
import AtualizarPessoa from '../Pages/AtualizarPessoa';
import DeletarPessoa from '../Pages/DeletarPessoa';
import CarroId from '../Pages/CarroID';

// import { useAuth } from '../hooks/AuthState';
// import { TouchableOpacity } from 'react-native';
// import Icones from 'react-native-vector-icons/Ionicons';


// const IconSaida = () => <Icones name="enter" size={40} color="#FF00FF"/>;

const Stack = createNativeStackNavigator()

const Navigation = () => {

  // const {signOut} = useAuth()

  // const handleLogout = async(navigation) => {
  //   try{
  //     await signOut()
  //     console.log(navigation)
  //     navigation.navigate('Login')
  //   }
  //   catch(e){}

  // }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      <Stack.Navigator initialRouteName='DeletarAnuncio'>      
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Procurar" component={Procurar} options={{headerShown:false}}/>
        <Stack.Screen name="Anunciar" component={Anunciar} options={{headerShown:false}}/>
        <Stack.Screen name="AnunciarCarro" component={AnunciarCarro} options={{headerShown:false}}/>
        <Stack.Screen name="AtualizarAnuncio" component={AtualizarAnuncio} options={{headerShown:false}}/>
        <Stack.Screen name="DeletarAnuncio" component={DeletarAnuncio} options={{headerShown:false}}/>
        <Stack.Screen name="Logout" component={Logout} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Logout" component={Logout} options={({navigation})=>({          
          headerLeft: ()=> null,
          headerRight: ()=> (
            <TouchableOpacity
              onPress={()=> handleLogout(navigation)}              
            >
              <IconSaida/>

            </TouchableOpacity>

          )

        })}/> */}


        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Cadastrar" component={CadastrarPessoa} options={{headerShown:false}}/>
        <Stack.Screen name="MenuPessoas" component={MenuPessoas} options={{headerShown:false}}/>
        <Stack.Screen name='ListarPessoas' component={ListarPessoas} options={{headerShown:false}}/>
        <Stack.Screen name='AtualizarPessoa' component={AtualizarPessoa} options={{headerShown:false}}/>
        <Stack.Screen name='DeletarPessoa' component={DeletarPessoa} options={{headerShown:false}}/>
        <Stack.Screen name='CarroId' component={CarroId} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
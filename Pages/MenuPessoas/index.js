import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;


const MenuPessoas = ({navigation}) => {
  return <View style={styles.container}>

    <StatusBar style='light'/>
    
    <View style={styles.headerView}>

    <TouchableOpacity
        onPress={()=> navigation.navigate('Home')}
        style={styles.buttonLogo}
        
    >
      <Text style={styles.textLogo}
      >DeCarroNovo</Text>               
    </TouchableOpacity>

    <TouchableOpacity
        onPress={()=> navigation.navigate('MenuPessoas')}
        style={styles.buttonMenu}
    >            
      <IconSaida/>
    </TouchableOpacity>

    </View>


    <View style={styles.containerPrincipal}>

    <TouchableOpacity
      onPress={()=> navigation.navigate('Login')}
      style={styles.btAnunciar}
    >
      <Text style={styles.textAnunciar}>LOGIN</Text>
    </TouchableOpacity>


    <TouchableOpacity
      onPress={()=> navigation.navigate('Logout')}
      style={styles.btAnunciar}
    >
      <Text style={styles.textAnunciar}>MEUS DADOS</Text>
    </TouchableOpacity>


    <TouchableOpacity
      onPress={()=> navigation.navigate('Cadastrar')}
      style={styles.btAnunciar}
    >
      <Text style={styles.textAnunciar}>CADASTRAR USUÁRIO</Text>
    </TouchableOpacity>


    <TouchableOpacity
      onPress={()=> navigation.navigate('AtualizarPessoa')}
      style={styles.btAnunciar}
    >
      <Text style={styles.textAnunciar}>ATUALIZAR CADASTRO</Text>
    </TouchableOpacity>
    

    <TouchableOpacity
      onPress={()=> navigation.navigate('ListarPessoas')}
      style={styles.btAnunciar}
    >
      <Text style={styles.textAnunciar}>LISTAR USUÁRIOS</Text>
    </TouchableOpacity>


    <TouchableOpacity
      onPress={()=> navigation.navigate('DeletarPessoa')}
      style={styles.btAnunciar}
    >
      <Text style={styles.textAnunciar}>DELETAR USUÁRIO</Text>
    </TouchableOpacity>

    </View>

    <View style={ styles.bottomView}>
        
          <TouchableOpacity
              onPress={()=> navigation.navigate('Home')}
              style={styles.buttonTab}
          >            
            <IconOfertas/>
            <Text style={styles.textTab}>Ofetas</Text> 
          </TouchableOpacity>

          <TouchableOpacity
              onPress={()=> navigation.navigate('Procurar')}
              style={styles.buttonTab}
          >            
            <IconProcurar/>
            <Text style={styles.textTab}>Buscar</Text>
          </TouchableOpacity>


          <TouchableOpacity
              onPress={()=> navigation.navigate('Anunciar')}
              style={styles.buttonTab}
          >            
            <IconAnunciar/>
            <Text style={styles.textTab}>Anunciar</Text>
          </TouchableOpacity>

         
        </View>

  </View>;
}

export default MenuPessoas;
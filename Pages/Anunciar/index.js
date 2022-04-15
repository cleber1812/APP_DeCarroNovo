import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;


const Anunciar = ({navigation}) => {
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


    <View style={styles.containerPrincipal3}>

    <TouchableOpacity
      onPress={()=> navigation.navigate('AnunciarCarro')}
      style={styles.btAnunciar}
    >
      <Text style={styles.textAnunciar}>ANUNCIAR CARRO</Text>
    </TouchableOpacity>


    {/* <TouchableOpacity
      onPress={()=> navigation.navigate('AtualizarAnuncio')}
      style={styles.btAnunciar}
    >
      <Text style={styles.textAnunciar}>ATUALIZAR ANÚNCIO</Text>
    </TouchableOpacity> */}


    <TouchableOpacity
      onPress={()=> navigation.navigate('DeletarAnuncio')}
      style={styles.btAnunciar}
    >
      <Text style={styles.textAnunciar}>DELETAR/EDITAR</Text>
    </TouchableOpacity>

    </View>

    {/* <View style={ styles.bottomView}>
        
          <TouchableOpacity
              onPress={()=> navigation.navigate('Home')}
              style={styles.buttonTab}
          >            
            <IconOfertas/>
            <Text style={styles.textTab}>Ofertas</Text> 
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

         
        </View> */}

  </View>;
}


export default Anunciar;
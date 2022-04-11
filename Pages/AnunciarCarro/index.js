import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet } from 'react-native';
import api from '../../service/api';
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';





const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;


const AnunciarCarro = ({navigation}) => {

  const [marca, setMarca] = useState()
  const [modelo, setModelo] = useState()
  const [anoF, setAnoF] = useState()
  const [anoM, setAnoM] = useState()
  const [cor, setCor] = useState()


  const handleCadastrar = async() =>{
      try{
          const dados = {
            marca,
            modelo,
            anoFabricacao: Number(anoF),
            anoModelo: Number(anoM),
            cor,

          }
          const resp = await api.post('carros',dados)
          if(resp.status === 200){
            Alert.alert('Veículo criado com sucesso')
            navigation.navigate('Anunciar',{atualizar:true})
          }
          console.log(resp.data)
          // navigation.navigate('Login')
      }catch(e){
        Alert.alert('Erro ao criar veículo')
      }

  }


  return( 
  
  <View style={styles.container}>
    
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
    
    <Text style={{alignSelf:'center'}}>Anunciar Carro</Text>

    <TextInput
        value={marca}
        placeholder='Marca'
        onChangeText={(e)=> setMarca(e)}
        style={styles.btTextInput}
      />   
      <TextInput
        value={modelo}
        placeholder='Modelo'        
        onChangeText={(e)=> setModelo(e)}
        style={styles.btTextInput}
      />
      <TextInput  
        value={anoF}
        placeholder='Ano de Fabricação'
        onChangeText={(e)=> setAnoF(e)}
        style={styles.btTextInput}
      />
      <TextInput  
        value={anoM}
        placeholder='Ano do Modelo'
        onChangeText={(e)=> setAnoM(e)}
        style={styles.btTextInput}
      /> 
       <TextInput  
        value={cor}
        placeholder='Cor'
        onChangeText={(e)=> setCor(e)}
        style={styles.btTextInput}
       />
        


      <TouchableOpacity
        onPress={()=> handleCadastrar()}
        style={styles.btAnunciar}
      >
        <Text style={styles.textAnunciar}>ANUNCIAR VEÍCULO</Text>
      </TouchableOpacity>


      

    </View>


      
    <View style={ styles.bottomView}>
        
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

       
      </View> 



 
  </View>
  )


}



export default AnunciarCarro;
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet, KeyboardAvoidingView } from 'react-native';
import api from '../../service/api';
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;



const AtualizarCarro = ({navigation}) => {
    const [id, setId] = useState()
    const [marca, setMarca] = useState()
    const [modelo, setModelo] = useState()
    const [anoF, setAnoF] = useState()
    const [anoM, setAnoM] = useState()
    const [cor, setCor] = useState()


    const handleAtualizar = async(id) =>{
        try{
          const dados = {
            id: Number(id),
            marca,
            modelo,
            anoFabricacao: Number(anoF),
            anoModelo: Number(anoM),
            // anoFabricacao: (anoF),
            // anoModelo: (anoM),
            cor,    
          }

          const resp = await api.put(`/carro/${id}`,dados)
          if(resp.status === 200){
            Alert.alert('Veículo atualizado com sucesso')
            navigation.navigate('Anunciar',{atualizar:true})
          }
        console.log(resp.data)        
        }
        catch(e){
            Alert.alert('Erro ao atualizar veículo')
        }
        
    }


    return (
    
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


  {/* <KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.containerPrincipal}
  > */}
    <View style={styles.containerPrincipal}>

    <Text style={{alignSelf:'center'}}>Atualizar Anúncio</Text>
    
      <TextInput
        value={id}
        placeholder='Digite o número do anúncio'        
        onChangeText={(e)=> setId(e)}
        style={styles.btTextInput}
      />
 
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
        onPress={()=> handleAtualizar(id)}
        style={styles.btAnunciar}
      >
          <Text style={styles.textAnunciar}>ATUALIZAR ANÚNCIO</Text>
      </TouchableOpacity>
    
      </View>
      {/* </KeyboardAvoidingView> */}


      
      
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
      


  </View>
  
  ) }


export default AtualizarCarro;
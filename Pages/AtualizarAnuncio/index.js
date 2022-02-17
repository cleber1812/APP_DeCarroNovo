import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet } from 'react-native';
import api from '../../service/api';
import Icones from 'react-native-vector-icons/Ionicons';
import { BtInput } from '../AnunciarCarro/styles';

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


    
    <View style={styles.containerPrincipal}>

    <Text style={{alignSelf:'center'}}>Atualizar Anúncio</Text>
    
      <TextInput
        value={id}
        placeholder='Digite o número do anúncio'        
        onChangeText={(e)=> setId(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}
      />
 
      <TextInput
        value={marca}
        placeholder='Marca'
        onChangeText={(e)=> setMarca(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}
      />
      <TextInput
        value={modelo}
        placeholder='Modelo'        
        onChangeText={(e)=> setModelo(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}
      />
      <TextInput  
        value={anoF}
        placeholder='Ano de Fabricação'
        onChangeText={(e)=> setAnoF(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}     
      />
      <TextInput  
        value={anoM}
        placeholder='Ano do Modelo'
        onChangeText={(e)=> setAnoM(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}
      /> 
       <BtInput  
        value={cor}
        placeholder='Cor'
        onChangeText={(e)=> setCor(e)}        
      />
      {/* <TextInput  
        value={cor}
        placeholder='Cor'
        onChangeText={(e)=> setCor(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}
      /> */}

      <TouchableOpacity
        onPress={()=> handleAtualizar(id)}
        style={styles.btAnunciar}
      >
          <Text style={styles.textAnunciar}>ATUALIZAR ANÚNCIO</Text>
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


  </View>
  ) }



const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      // marginTop: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#3366FF',      
    },
    
    headerView: {      
      height:80,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'baseline',
    },
        
    buttonLogo:{
      backgroundColor:'#3366FF',
      width: 250, 
      height: 48, 
      marginTop: 30,
      borderWidth:0,
      // alignItems: 'center',
      // justifyContent: 'center',
    },

    textLogo:{
 
      color: '#FFFFFF',
      fontSize:36,
      fontWeight:'bold'      
    },

    buttonMenu:{
      backgroundColor:'#3366FF',
      width: 50, 
      height: 48, 
      marginTop: 30,
      borderWidth:0,      
    },

    containerMeio: {
      flex: 1,
      marginTop: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#FFFFFF',
      // backgroundColor: '#c4c4c4',
      marginBottom: 50
    },

    containerPrincipal: {
      flex: 1,
      marginTop: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',      
      marginBottom: 50
    },

    btAnunciar:{
      backgroundColor:'#3366FF',
      width: 280, 
      height: 50, 
      borderRadius: 8,      
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,      
      // alignSelf: 'center',
      // borderWidth:2,
    },
  
     textAnunciar:{   
      color: '#FFFFFF',
      fontSize:24,
      fontWeight:'bold',
      // textAlign: 'center',
    },

      flatView: {
        flex: 1,
        margin: 4,
        marginLeft:5,
        marginRight:5,
        backgroundColor: '#FFFFFF',
        // justifyContent: 'center',              
        // paddingTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        borderColor: '#3366FF',
        borderWidth:0,
        elevation: 5,
        // shadowColor: '#52006A',

                        
      },
      textTitle: {
        // margin: 10,
        marginTop: 1,
        marginBottom: 5,
        marginStart: 5,
        // fontFamily: 'Helvetica',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3366FF'
      },      
      textDescrition: {
        marginLeft: 10,        
        // fontFamily: 'Verdana',
        fontSize: 16,
        color: '#555770'
      },
      
      bottomView:{
   
        width: '100%', 
        height: 50, 
        backgroundColor: '#3366FF', 
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,                
      },
            
      buttonTab:{
   
        width: 80, 
        height: 48, 
        marginTop: 1,
        borderWidth:0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      textTab:{
 
        color: '#fff',
        fontSize:12,
        // alignSelf: 'center',
      }
   
  });



export default AtualizarCarro;
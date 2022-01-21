import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native'
import Icones from 'react-native-vector-icons/Ionicons';


const IconVeiculo = () => <Icones name="car-sport-sharp" size={50} color="#000000"/>;
const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;

const Procurar = ({navigation, route}) => {

  const [marca, setMarca] = useState()

  const [carros, setCarros] = useState([])
  const isFocused = useIsFocused()


  useEffect(useCallback(async()=>{
    try{
      const {data} = await api.get('carros')
      console.log(route)      
      setCarros(data)
    }
    catch(e){}
  }),[isFocused])

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
              onPress={()=> navigation.navigate('Logout')}
              style={styles.buttonMenu}
          >            
            <IconSaida/>
          </TouchableOpacity>

          
        </View>

        <View style={styles.containerMeio2}>
          <View style={styles.flatView2}>                       
              <TextInput
              value={marca}
              placeholder='Digite a Marca do carro'
              onChangeText={(e)=> setMarca(e)}
              style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:0, borderRadius:5, backgroundColor:'#FFFFFF'}}
              /> 

              <TouchableOpacity
              onPress={()=> handleProcurar()}
              style={styles.btPesquisar}
              >
              <Text style={styles.textBtPesquisar}>PESQUISAR</Text>                    
              </TouchableOpacity>
          </View>               
        </View>     

        <View style={styles.containerMeio}> 

       
                           
          <ScrollView showsVerticalScrollIndicator={false}>
            {   
            carros[0] ? carros.map((carro)=>(
              <View style={styles.flatView} key={carro.id}>
                  <View style={{marginLeft: 10}}>
                    <IconVeiculo/>
                  </View>
                  <View>
                  <Text style={styles.textTitle}>{carro.modelo}</Text>
                  <Text style={styles.textDescrition}>Marca: {carro.marca}</Text>
                  <Text style={styles.textDescrition}>Ano/Modelo: {carro.anoFabricacao}/{carro.anoModelo}</Text>
                  <Text style={styles.textDescrition}>Cor: {carro.cor}</Text>
                  </View>                  
              </View>              
            ))
            :<Text>Não há carros</Text>
            }            
          </ScrollView>
         
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
}

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

    containerPesquisa: {
      flex: 0.15,
      marginTop: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#FFFFFF',
      backgroundColor: '#c4c4c4',
      // marginBottom: 1,
      // width: 30,
      // height:30,        
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

    containerMeio2: {
      flex: 0.1,
      // marginTop: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#FFFFFF',
      backgroundColor: '#c4c4c4',
      // marginBottom: 0,
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


    btPesquisar:{
      backgroundColor:'#3366FF',
      width: 100, 
      height: 35, 
      borderRadius: 8,      
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 1,      
      // alignSelf: 'center',
      // borderWidth:2,
    },
     
    textBtPesquisar:{   
      color: '#FFFFFF',
      fontSize:14,
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

      flatView2: {
        flex: 1,
        margin: 4,
        marginLeft:5,
        marginRight:5,
        backgroundColor: '#c4c4c4',
        justifyContent: 'space-evenly',  
        alignItems: 'center',            
        // paddingTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        borderColor: '#3366FF',
        borderWidth:0,
        // elevation: 5,
        // shadowColor: '#52006A', 
        // marginBottom: 50,   
        // marginLeft: 10,                    
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


export default Procurar;
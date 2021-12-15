import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView, SafeAreaView } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native'
import Icon2 from 'react-native-vector-icons/Ionicons';


const Veiculo = () => <Icon2 name="car-sport-sharp" size={100} color="#000000"/>;

const Home = ({navigation, route}) => {

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
  
            <Text style={{marginTop:25, color:'#FFFFFF', fontSize: 36, fontWeight:'bold', backgroundColor: '#3366FF'}}>   DeCarroNovo</Text> 
    
            {/* <View style={{display:'flex', height:'100%', flexDirection:'column',justifyContent:'center', alignItems:'center'}}> */}
      
            
    <ScrollView showsVerticalScrollIndicator={false}>
      
      <View style={styles.containerMeio}>
      {/* style={{borderWidth:2, */}
        {   
        carros[0] ? carros.map((carro)=>(
          <View style={styles.flatview} key={carro.id}>
              <View>
                <Veiculo/>
              </View>
              <View>
              <Text style={styles.h2text}>{carro.modelo}</Text>
              <Text style={styles.name}>Marca: {carro.marca}</Text>
              <Text style={styles.name}>Ano/Modelo: {carro.anoFabricacao}/{carro.anoModelo}</Text>
              <Text style={styles.name}>Cor: {carro.cor}</Text>
              </View>
          </View>
        ))
        :<Text>Não há carros</Text>
        }
      </View>

    </ScrollView>
      
      


    <View style={ styles.bottomView}>
    <TouchableOpacity
      onPress={()=> navigation.navigate('Anunciar')}
      style={{backgroundColor:'blue', width:150, height:30, marginTop:5}}
    >
      <Text style={styles.textStyle}>Anunciar</Text>      

    </TouchableOpacity>
    </View>

    <StatusBar style='light'/>

  </View>;
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
    containerMeio: {
      flex: 1,
      marginTop: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#c4c4c4',
    },
      flatview: {
        flex: 1,
        margin: 2,
        marginLeft:5,
        marginRight:5,
        backgroundColor: '#FFFFFF',
        // justifyContent: 'center',              
        // paddingTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        borderColor: '#3366FF',
        borderWidth:2
                
      },
      h2text: {
        // margin: 10,
        marginTop: 1,
        marginBottom: 5,
        marginStart: 5,
        // fontFamily: 'Helvetica',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3366FF'
      },      
      name: {
        marginLeft: 10,        
        // fontFamily: 'Verdana',
        fontSize: 16,
        color: '#555770'
      },
      
      bottomView:{
   
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },

      textStyle:{
 
        color: '#fff',
        fontSize:22,
        alignSelf: 'center',
      }
   
  });

export default Home;
import React, {useCallback, useEffect, useState} from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native'


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

    return <View style={styles.MainContainer}>
            <Text style={{color:'#000' , alignSelf:'center'}}>DeCarroNovo</Text> 
    
      
      <View style={{display:'flex', height:'100%', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
      {
        carros[0] ? carros.map((carro)=>(
          <View key={carro.id}>
            <Text>{carro.modelo}</Text>
          </View>
        ))
        :<Text>Não há carros</Text>
      }
    </View>



    <View style={ styles.bottomView}>
    <TouchableOpacity
      onPress={()=> navigation.navigate('Anunciar')}
      style={{backgroundColor:'blue', width:150, height:30, marginTop:5}}
    >
      <Text style={styles.textStyle}>Anunciar</Text>      
    </TouchableOpacity>

    </View>
  </View>;
}

const styles = StyleSheet.create(
  {
      MainContainer:
      {          
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
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
import React from 'react';
import { Text, TouchableOpacity, View,  } from 'react-native';


const Anunciar = ({navigation}) => {
  return <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    
    <Text style={{alignSelf:'center'}}>Anunciar</Text>

    <TouchableOpacity
      onPress={()=> navigation.navigate('AnunciarCarro')}
      style={{backgroundColor:'lightblue', width:150, height:30, marginTop:20}}
    >
      <Text style={{alignSelf:'center'}}>ANUNCIAR CARRO</Text>
    </TouchableOpacity>


    <TouchableOpacity
      onPress={()=> navigation.navigate('AtualizarAnuncio')}
      style={{backgroundColor:'lightblue', width:150, height:30, marginTop:20}}
    >
      <Text style={{alignSelf:'center'}}>ATUALIZAR ANÚNCIO</Text>
    </TouchableOpacity>


    <TouchableOpacity
      onPress={()=> navigation.navigate('DeletarAnuncio')}
      style={{backgroundColor:'lightblue', width:150, height:30, marginTop:20}}
    >
      <Text style={{alignSelf:'center'}}>DELETAR ANÚNCIO</Text>
    </TouchableOpacity>

  </View>;
}

export default Anunciar;
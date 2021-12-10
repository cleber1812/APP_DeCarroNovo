import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert } from 'react-native';
import api from '../../service/api';



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


  return( <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    
    <Text style={{alignSelf:'center'}}>Anunciar Carro</Text>

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
       <TextInput  
        value={cor}
        placeholder='Cor'
        onChangeText={(e)=> setCor(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}
      /> 


      <TouchableOpacity
        onPress={()=> handleCadastrar()}
        style={{width: 220, height: 40, padding: 4, marginBottom:8, borderRadius:5, backgroundColor:'lightblue'}}
      >
        <Text style={{alignSelf:'center', color:'white', fontWeight:'bold',fontSize:18}}>ANUNCIAR VEÍCULO</Text>
      </TouchableOpacity>

 
  </View>
  )


}

export default AnunciarCarro;
import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert } from 'react-native';
import api from '../../service/api';



const AtualizarCarro = ({navigation}) => {
    const [id, setId] = useState()
    const [marca, setMarca] = useState()
    const [modelo, setModelo] = useState()
    const [anoF, setAnoF] = useState()
    const [anoM, setAnoM] = useState()
    const [cor, setCor] = useState()


    const handleAtualizar = async() =>{
        try{
          const dados = {
            id: Number(id),
            marca,
            modelo,
            anoFabricacao: Number(anoF),
            anoModelo: Number(anoM),
            cor,    
          }

          const resp = await api.put('carro',dados)
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


  return <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    
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
       <TextInput  
        value={cor}
        placeholder='Cor'
        onChangeText={(e)=> setCor(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}
      />

      <TouchableOpacity
        onPress={()=> handleAtualizar()}
        style={{width: 220, height: 40, padding: 4, marginBottom:8, borderRadius:5, backgroundColor:'lightblue'}}
      >
          <Text style={{alignSelf:'center', color:'white', fontWeight:'bold',fontSize:18}}>ATUALIZAR ANÚNCIO</Text>
      </TouchableOpacity>



  </View>;
}

export default AtualizarCarro;
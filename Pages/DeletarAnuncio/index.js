import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert } from 'react-native';
import api from '../../service/api';



const DeletarCarro = ({navigation}) => {
    const [id, setId] = useState()

    const handleDeletar = async() =>{
        try{
          const dados = {            
            id: Number(id),                
          }

          const resp = await api.delete('carro/',dados)
          if(resp.status === 200){
            Alert.alert('Veículo deletado com sucesso')
            navigation.navigate('Anunciar',{atualizar:true})
          }
          // console.log(resp.data)
          // navigation.navigate('Login')
        }catch(e){
          Alert.alert('Erro ao deletar veículo')
        }
    
      }
    


  return <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    
    <Text style={{alignSelf:'center'}}>Deletar Anúncio</Text>


    <TextInput
        value={id}
        placeholder='Digite o número do anúncio'        
        onChangeText={(e)=> setId(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}
    />
      


    <TouchableOpacity
        onPress={()=> handleDeletar()}
        style={{width: 220, height: 40, padding: 4, marginBottom:8, borderRadius:5, backgroundColor:'lightblue'}}
    >
        <Text style={{alignSelf:'center', color:'white', fontWeight:'bold',fontSize:18}}> EXCLUIR </Text>
    </TouchableOpacity>


  </View>;
}

export default DeletarCarro;
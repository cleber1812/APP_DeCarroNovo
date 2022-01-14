import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native';
import Icones from 'react-native-vector-icons/Ionicons';

// const IconExcluir = () => <Icones name="close-circle" size={30} color="#000000"/>;
const IconExcluir = () => <Icones name="trash" size={30} color="#000000"/>;

const DeletarCarro = ({navigation, route}) => {
    const [carros, setCarros] = useState([])
    const isFocused2 = useIsFocused()

    useEffect(useCallback(async()=>{

      try{
        const {data} = await api.get('carros')
        console.log(data)
        setCarros(data)
      }
      catch(e){}

    }),[isFocused2])

    
    const handleDeletar = async(id) => {
        try{
          // const dados = {id: Number(id)  }
          // const resp = await api.delete(`/carro/${id}` , dados)
          
      //  const {data} = await api.delete(`/carro/${id}`)
          const data = await api.delete(`/carro/${id}`)

       const car = carros.filter((carros)=> carros.id !== id)       
      setCarros(car)
      console.log(data)

// Como fazer o IF funcionar? Se tirar as chaves na liva 29 const data, afeta a função Cadastrar veículo: Não apaga os dados anteriores//
// Tenho que descobrir como chamar uma função com chaves dentro do IF

          if(data.status === 200){
            Alert.alert('Veículo deletado com sucesso')
            navigation.navigate('Anunciar',{atualizar:true})
          }
          // console.log(resp.data)
          // navigation.navigate('Login')
        }catch(e){
          Alert.alert('Erro ao deletar veículo')
        }
    
      }
    


  return (
  
  <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    
    <Text style={{alignSelf:'center'}}>Deletar Anúncio</Text>


    <View>
      {
        carros[0] ? carros.map((carro)=>(
          <View style={{display:'flex', flexDirection:'row'}} key={carro.id}>
          <View style={{borderWidth:1, borderRadius:5, display:'flex', flexDirection:'column'}}>
          <Text>{`Id: ${carro.id}`}</Text>
          <Text>{`Marca: ${carro.marca}`}</Text>
            
          </View> 

          
          <TouchableOpacity
              onPress={()=> handleDeletar(carro.id)}
              style={{width: 100, height: 40, padding: 4, marginBottom:8, borderRadius:5, backgroundColor:'lightblue'}}
          >
              <IconExcluir/>
              <Text style={{alignSelf:'center', color:'black', fontWeight:'bold',fontSize:18}}> EXCLUIR </Text>
          </TouchableOpacity>
          </View>
        ))

        :<Text>Não há carros</Text>
      }
    </View>   
    </View> 
  )      
}

export default DeletarCarro;
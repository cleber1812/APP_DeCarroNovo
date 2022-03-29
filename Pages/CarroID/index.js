import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Alert } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native'
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';

// import {setCarroId2}  from '../Home';

const IconVeiculo = () => <Icones name="car-sport-sharp" size={50} color="#000000"/>;
const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;

const CarroId = ({navigation, route}) => {

  
  //SET DO TEXT INPUT PARA PEGAR O ID INFORMADO MANUALMENTE
  // const [id, setId] = useState()

  //AQUI O TEXT INPUT USA O VALOR VINDO NA ROTA PARAMS
  // const [id, setId] = useState(`${route.params?.id}`)

  // TENTANDO CHAMAR O VALOR DE UMA VARIÁVEL DE OUTRA PÁGINA
  // const setCarroId3 = {setCarroId2}
  
  //NÃO CONSEGUI PASSAR O VALOR VIA VARIÁVEL DA OUTRA PÁGINA
  // const [id, setId] = useState(`teste + ${setCarroId2}`)
  // const [marca, setMarca] = useState('Volkswagen')

  const [carros, setCarros] = useState([])
  const isFocused = useIsFocused()


  useEffect(useCallback(async()=>{
    try{      
       const resp = await api.get(`/carro/${route.params?.id}`)
      // console.log(route)      
      setCarros(resp.data)
      
      if(resp.status === 200){      
        // Alert.alert('Veículo Procurado com sucesso')
      }
      // console.log(resp.data)        
    }
    catch(e){
        // Alert.alert('Erro ao Procurar veículo')
    }
  }),[isFocused])




//     catch(e){
//         Alert.alert('Erro ao Procurar veículo')
//     }      
// }
{/* //////////////////////////////// */}
    
// const handleCarroId = async(id) =>{
// const handleCarroId = async() =>{
//   try{   
//     // const resp = await api.get(`/carro/${id}`)
//     const resp = await api.get(`/carro/${route.params?.id}`)
    
//     // setCarros(resp)
//     setCarros(resp.data)

//     // if (!resp.data.length) { 
//     //   // console.log("O array está vazio!") 
//     // // if (!resp.length) {
//     // // // if (resp.length = null) {  
//     // // //   carrosResposta = {mensagem: "Carros não encontrado para marca: " + marca
//     //   Alert.alert("Carros não encontrado")
//     //   // Alert.alert("Carros não encontrado" + marca)
//     // }

//     if(resp.status === 200){
//       Alert.alert('Veículo Procurado com sucesso')
//     //   // navigation.navigate('Anunciar',{atualizar:true})
//     }
//   console.log(resp.data)        
//   // console.log(resp)        
//   }
//   catch(e){
//       Alert.alert('Erro ao localizar veículo')
      
//   }      
// }



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
              onPress={()=> navigation.navigate('MenuPessoas')}
              style={styles.buttonMenu}
          >            
            <IconSaida/>
          </TouchableOpacity>

          
        </View>

{/* // BARRA DE BUSCA POR ID */}
        {/* <View style={styles.containerMeio2}>
          <View style={styles.flatView2}>                       
              <TextInput
              // value={id}
              placeholder='Digite o ID do carro'
              // onChangeText={(e)=> setId(e)}
              style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:0, borderRadius:5, backgroundColor:'#FFFFFF'}}
              /> 

              <TouchableOpacity
              // onPress={()=> handleCarroId(id)}
              // onPress={()=> alert({setCarroId2})}              
              onPress={()=> handleCarroId()}
              style={styles.btPesquisar}
              >
              <Text style={styles.textBtPesquisar}>PESQUISAR</Text>                    
              </TouchableOpacity>
          </View>               
        </View>      */}
{/* //////////////////////////////// */}

        <View style={styles.containerMeio}>
          {/* <Text>Dados na rota :{route.params?.nome} + {route.params?.email}</Text> */}
          {/* <Text>{route.params?.id}</Text> */}

                                 
            <ScrollView showsVerticalScrollIndicator={false}>
            {   
            // carros[0] ? carros.map((carro)=>(
              <View style={styles.flatView} key={carros.id}>
                  <View style={{marginLeft: 10}}>
                    <IconVeiculo/>
                  </View>
                  <View>
                  <Text style={styles.textTitle}>{carros.modelo}</Text>
                  <Text style={styles.textDescrition}>Marca: {carros.marca}</Text>
                  <Text style={styles.textDescrition}>Ano/Modelo: {carros.anoFabricacao}/{carros.anoModelo}</Text>
                  <Text style={styles.textDescrition}>Cor: {carros.cor}</Text>
                  </View>                  
              </View>              
            // ))
            // :<Text>Não há carros</Text>

                                       

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



export default CarroId;
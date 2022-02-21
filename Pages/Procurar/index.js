import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Alert } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native'
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const IconVeiculo = () => <Icones name="car-sport-sharp" size={50} color="#000000"/>;
const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;

const Procurar = ({navigation, route}) => {

  const [marca, setMarca] = useState('')
  // const [marca, setMarca] = useState('Volkswagen')

  const [carros, setCarros] = useState([])
  const isFocused = useIsFocused()


  // useEffect(useCallback(async()=>{
  //   try{      
  //     // const {data} = await api.get(`/carros/marca/?marca=Ford`)
  //     // const {data} = await api.get(`/carros/marca/?marca=${marca}`)
  //     // const data = await api.get(`/carros/marca/?marca=${setMarca}`)
  //     // console.log(route)      
  //     setCarros(data)
  //     // setCarros(marca)
  //   }
  //   catch(e){}
  // }),[isFocused])


{/* //////////////////////////////// */}
//   const handleProcurar = async() =>{
//     try{
      
//       // const marca = {
//       //   marca,           
//       // }
//       // const {data} = await api.get(`/carros/marca/?marca=Ford`)
//       // const {data} = await api.get(`/carros/marca/?marca=${marca}`)
//       const {data} = await api.get(`/carros/marca/?marca=${marca}`)
//       // const data = await api.get(`/carros/marca/?marca=${marca}` )      
//       // const resp = await api.get(`/carros/marca/${marca}` )
//       setCarros(data)

//       const resp = {data}

//       if(resp.status === 200){
//       // if(resp.status === 200){
//         Alert.alert('Veículo Procurado com sucesso')
//         navigation.navigate('Anunciar',{atualizar:true})
//       }
//     console.log(resp.data)        
//     }
//     catch(e){
//         Alert.alert('Erro ao Procurar veículo')
//     }      
// }
{/* //////////////////////////////// */}
    

const handleProcurar = async() =>{
  try{   
    const resp = await api.get(`/carros/marca/?marca=${marca}`)
    
    // setCarros(resp)
    setCarros(resp.data)

    if (!resp.data.length) { 
      // console.log("O array está vazio!") 
    // if (!resp.length) {
    // // if (resp.length = null) {  
    // //   carrosResposta = {mensagem: "Carros não encontrado para marca: " + marca
      Alert.alert("Carros não encontrado para marca: " + marca)
      // Alert.alert("Carros não encontrado" + marca)
    }

    // if(resp.status === 200){
    //   Alert.alert('Veículo Procurado com sucesso')
    //   // navigation.navigate('Anunciar',{atualizar:true})
    // }
  console.log(resp.data)        
  // console.log(resp)        
  }
  catch(e){
      Alert.alert('Erro ao Procurar veículo')
      
  }      
}



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

{/* //////////////////////////////// */}
        <View style={styles.containerMeio2}>
          <View style={styles.flatView2}>                       
              <TextInput
              value={marca}
              placeholder='Digite a Marca do carro'
              onChangeText={(e)=> setMarca(e)}
              style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:0, borderRadius:5, backgroundColor:'#FFFFFF'}}
              /> 

              <TouchableOpacity
              onPress={()=> handleProcurar(marca)}              
              style={styles.btPesquisar}
              >
              <Text style={styles.textBtPesquisar}>PESQUISAR</Text>                    
              </TouchableOpacity>
          </View>               
        </View>     
{/* //////////////////////////////// */}

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

{/* BOTÃO TEMPORÁRIO */}
          <TouchableOpacity
              onPress={()=> navigation.navigate('CarroId')}
              style={styles.btPesquisar}
          >            
            <Text style={styles.textBtPesquisar}>Pesquisar por Id</Text>
          </TouchableOpacity>

         


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


export default Procurar;
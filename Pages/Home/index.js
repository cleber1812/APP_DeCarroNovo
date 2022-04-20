import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native'
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import { useAuth } from '../../hooks/AuthState';



const IconVeiculo = () => <Icones name="car-sport-sharp" size={100} color="#000000"/>;
const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;

const Home = ({navigation, route}) => {
  
  const {user} = useAuth()
  const [carros, setCarros] = useState([])
  const isFocused = useIsFocused()
  const [loading, setLoading] = useState(false)

  // const [carroId, setCarroId] = useState([])


  useEffect(useCallback(async()=>{
    try{
      setLoading(true)      
      const {data} = await api.get('carros')
      // console.log(route)      
      console.log(user)      
      setCarros(data)
      setLoading(false)
    }
    catch(e){
      setLoading(false)
    }
  }),[isFocused])


  const handleCarroId = async(id) =>{
    try{   
      const {data} = await api.get(`/carro/${id}`)
      // setCarroId(data.id)
      // console.log(carroId)   
      const setCarroId2 = (data.id)
      // console.log(setCarroId2)   
      // alert(data.id)
      // navigation.navigate('CarroId', {nome: 'Cleber', email: 'cleber@teste.com'})
      navigation.navigate('CarroId', {id: `${setCarroId2}`})
      }
    catch(e){}      
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
      

      { loading && 
          <View style={styles.containerLoader}>
          <ActivityIndicator
          size='large'
          color='#ffffff'
          />
          <Text style={{alignSelf:'center', color:'#ffffff'}}>Carregando dados</Text>
          </View>
      }

      { !loading && 


        <View style={styles.containerMeio3}>
          
          <Text style={{backgroundColor:'#c4c4c4'}}>{`Usuário logado: ${user?.nome}`}</Text> 
               
          <ScrollView showsVerticalScrollIndicator={false}>
          
          {   
            carros[0] ? carros.sort((a, b) => a.id < b.id ? 1:-1).map((carro)=>(              
                    
              <View key={carro.id}>

                <TouchableOpacity 
          // style={{borderWidth:1, borderRadius:5,}}
          onPress={()=>handleCarroId(carro.id)}
          >                                
          
          <View style={styles.flatView}>

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

                  </TouchableOpacity>                      

              </View>                

            ))
            :<Text>Não há carros</Text>
            }                  

          </ScrollView>
         
        </View>

      }

        {/* <View style={ styles.bottomView}>
        
          <TouchableOpacity
              onPress={()=> navigation.navigate('Home')}
              style={styles.buttonTab}
          >            
            <IconOfertas/>
            <Text style={styles.textTab}>Ofertas</Text> 
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

         
        </View> */}
      
      

  </View>
}


export default Home;
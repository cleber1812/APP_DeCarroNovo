import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import api from '../../service/api';
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles'

import { useAuth } from '../../hooks/AuthState';


const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;
const IconUser = () => <Icones name="person-circle-sharp" size={50} color="#3366FF"/>;


const ListarPessoas = ({navigation}) => {

  const [pessoas, setPessoas] = useState([])
  const { token } = useAuth()


  useEffect(useCallback(async()=>{
    try{
      // const { data } = await api.get('pessoas', {headers: {"Authorization": 'Berr XXXXXX'}})
      const { data } = await api.get('pessoas', {headers: {"Authorization": `Bearer ${token}`}})
      // console.log(data)
      // console.log(token)
      
      setPessoas(data)
    }
    catch(e){}
  }),[])

return (
<View style={styles.container}>
    
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
  
  
  
      <View style={styles.containerMeio3}>          
               
        <ScrollView showsVerticalScrollIndicator={false}>
  
        <Text style={{alignSelf:'center'}}>ListarPessoas</Text>

          {   
            pessoas[0] ? pessoas.map((pessoa)=>(
              <View style={styles.flatView} key={pessoa.id}>
                  <View style={{marginLeft: 10}}>
                    {/* <IconVeiculo/> */}
                  </View>
                  <IconUser/>
                  <View>
                  <Text style={styles.textTitle}>{pessoa.nome}</Text>
                  <Text style={styles.textDescrition}>Id: {pessoa.id}</Text>
                  <Text style={styles.textDescrition}>{pessoa.email}</Text>                  
                  </View>                  
              </View>              
            ))
            :<Text>Não há pessoas</Text>
          }   
        
                </ScrollView>
          
      </View>
  
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
  
          </View>  */}
  
    </View>
  
  
    )}
  

export default ListarPessoas;
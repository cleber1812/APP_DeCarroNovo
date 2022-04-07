import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import api from '../../service/api';
import Icones from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../hooks/AuthState';
import styles from './styles'


const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;
const IconUser = () => <Icones name="person-circle-sharp" size={150} color="#3366FF"/>;


const Logout = ({navigation}) => {
  const { user, token, signOut } = useAuth()

  const [meusDados, setMeusDados] = useState([])
//verificar se tem array de dependência mesmo


  useEffect(useCallback(async()=>{
    try{
      const { data } = await api.get('meusdados', {headers: {"Authorization": `Bearer ${token}`}})
    //   console.log(data)
    //   console.log(user)
    //   console.log(token)
      setMeusDados(data)
      console.log([meusDados])
    }
    catch(e){}
  }),[])

  const handleLogout = async(navigation) => {
    try{
      await signOut()
      // console.log(navigation)
      navigation.navigate('Login')
    }
    catch(e){}
  }

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
  
  
  
      <View style={styles.containerPrincipal2}>

        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      
  
        {/* <Text style={{alignSelf:'center'}}>Nome</Text>

        <Text style={{alignSelf:'center'}}>Email</Text> */}
        
        <View>
          <IconUser/>
        </View>

    {/* // DADOS VEM DO STORAGE + USEAUTH */}

              {/* <View style={styles.flatView3}>           
                  <View style={{marginLeft: 10}}>                    
                  </View>
                  <View>                                    
                  <Text style={styles.textTitle}> {user?.nome}</Text>                  
                  <Text style={styles.textDescrition}> {`Email: ${user?.email}`} </Text>                  
                  </View>                  
              </View>                           */}
            
          
          {/* </ScrollView> */}


    {/* // DADOS VEM DIRETO DA ROTA MYDATA*/}
    {/* // NÃO CONSEGUI USAR O MAP NUM ÚNICO OBJETO*/}
          {   
            // meusDados && meusDados.map((pessoa)=>(
            // carros[0] ? carros.map((carro)=>(
              <View style={styles.flatView3} 
            //   key={pessoa.id}
              >
              {/* <View style={styles.flatView}> */}
                  <View style={{marginLeft: 10}}>                    
                  </View>
                  <View>                                    
                  <Text style={styles.textTitle}> {meusDados?.nome}</Text>
                  <Text style={styles.textDescrition}> Id: {meusDados?.id}</Text>                  
                  <Text style={styles.textDescrition}> {`Email: ${meusDados?.email}`} </Text>
                  <Text style={styles.textDescrition}> {`Senha: ${meusDados?.senha}`} </Text>
                  <Text style={styles.textDescrition}> {`Membro desde: ${meusDados?.createdAt}`} </Text>
                  </View>                  
              </View>              
            
            // ))
            // :<Text>Não há pessoas</Text>
          }        

          {/* </ScrollView> */}

          <TouchableOpacity
            onPress={()=> handleLogout(navigation)}
            style={styles.btAnunciar}
          >
            <Text style={styles.textAnunciar}>LOGOUT</Text>
          </TouchableOpacity>
        
          
      </View>
  
          <View style={ styles.bottomView}>
              
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
  
          </View> 
  
    </View>
  
  
    )}


export default Logout;
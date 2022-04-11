import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native';
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import { useAuth } from '../../hooks/AuthState';

const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;


const Login = ({navigation}) => {
    const {signIn} = useAuth()

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    
    const [loading, setLoading] = useState(false)

    const handleLogin = async() =>{
      
        try{

          setLoading(true)

          //   const dados = {
          //       email,
          //       senha,                
          //     }

          // const resp = await api.post(`/login`, email, senha)
          // console.log(email,senha)
          await signIn(email, senha)
          console.log(email,senha)
          setEmail(undefined)
          setSenha(undefined)
          setLoading(false)
          navigation.navigate('Home')
          // navigation.navigate('Anunciar')

          // if(resp.status === 200){
          //   Alert.alert('Login realizado com sucesso')
            // navigation.navigate('Login')
          // }
        // console.log(resp.data)        
        }
        catch(e){
            Alert.alert('Erro ao efetuar login')
            setEmail(undefined)
            setSenha(undefined)
            setLoading(false)
        }
        
    }


    if (loading === true){
      return (
      <View style={styles.containerLoader}>
        <ActivityIndicator
        size='large'
        color='#0000ff'
        />
        <Text style={styles.textLoader}>Carregando dados</Text>
        </View>
      )}
    
    else{

      return(
    
<View style={styles.container}>
    
  <StatusBar style='light'/>
  
        <View style={styles.headerView}>

        <TouchableOpacity
            // onPress={()=> navigation.navigate('Home')}
            style={styles.buttonLogo}      
        >
            <Text style={styles.textLogo}
            >DeCarroNovo</Text>               
        </TouchableOpacity>

        {/* <TouchableOpacity
            onPress={()=> navigation.navigate('MenuPessoas')}
            style={styles.buttonMenu}
        >            
            <IconSaida/>
        </TouchableOpacity> */}
        
        </View>

    {/* <View style={styles.containerMeio}>
        <ScrollView showsVerticalScrollIndicator={false}> */}
    <View style={styles.containerPrincipal}>
    

      <Text style={styles.textEntrada}>Email</Text>
      
      <TextInput
        value={email}
        placeholder='digite seu e-mail'        
        autoComplete='email'
        autoCapitalize='none'
        onChangeText={(e)=> setEmail(e)}
        style={styles.btTextInput}
      />

      <Text style={styles.textEntrada}>Senha</Text>
      
      <TextInput
        value={senha}
        placeholder='digite sua senha'        
        autoCapitalize='none'
        secureTextEntry
        onChangeText={(e)=> setSenha(e)}
        style={styles.btTextInput}
      />

      <TouchableOpacity
      onPress={()=> handleLogin()}
      style={styles.btAnunciar}
      >
        <Text style={styles.textAnunciar}>LOGIN</Text>
      </TouchableOpacity>

      
      <View style={{flexDirection:'row', marginTop:'30%'}}>

        <Text style={{alignSelf:'center', paddingRight: 10}}>Sou novo por aqui</Text>

        <TouchableOpacity
          onPress={()=> navigation.navigate('Cadastrar')}
          style={styles.btPesquisar}
        >
          <Text style={styles.textBtPesquisar}>CADASTRAR</Text>                    
        </TouchableOpacity>
        
      </View>

      {/* <TouchableOpacity
          onPress={()=> navigation.navigate('AtualizarPessoa')}
          // style={styles.btPesquisar}
        >
          <Text style={{alignSelf:'center', marginTop:20}}>Esqueci minha senha</Text>
        </TouchableOpacity> */}

    </View>
    {/* </ScrollView>
    </View> */}

        {/* <View style={ styles.bottomView}>
            
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

        </View>  */}

  </View>


  )}

}
 
  

export default Login;

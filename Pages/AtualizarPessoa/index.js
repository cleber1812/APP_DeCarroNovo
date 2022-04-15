import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet } from 'react-native';
import api from '../../service/api';
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles'


const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;



const AtualizarPessoa = ({navigation}) => {
    const [id, setId] = useState()
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const handleAtualizarPessoa = async(id) =>{
        try{            
            const dados = {
                id: Number(id),
                nome,
                email,
                senha,                
                }          
            const resp = await api.put(`/pessoa/${id}`,dados)
            if(resp.status === 200){
              Alert.alert('Pessoa atualizada com sucesso')
              navigation.navigate('Anunciar')              
            }
            console.log(resp.data)
            
        }catch(e){
          Alert.alert('Erro ao atualizar pessoa')
        }
  
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
  
  
  
      <View style={styles.containerPrincipal3}>
      
  
        <Text style={{alignSelf:'center'}}>AtualizarPessoa</Text>

        <TextInput
        value={id}
        placeholder='Digite o número do usuário'        
        onChangeText={(e)=> setId(e)}
        style={styles.btTextInput}
        />
 
        <TextInput
        value={nome}
        placeholder='Nome'
        onChangeText={(e)=> setNome(e)}
        style={styles.btTextInput}
        />
        
        <TextInput
        value={email}
        placeholder='E-mail' 
        autoCapitalize='none'       
        onChangeText={(e)=> setEmail(e)}
        style={styles.btTextInput}
        />
        
        <TextInput  
        value={senha}
        placeholder='Senha'
        secureTextEntry
        onChangeText={(e)=> setSenha(e)}
        style={styles.btTextInput}
        />
        
        <TouchableOpacity
        onPress={()=> handleAtualizarPessoa(id)}
        style={styles.btAnunciar}
        >
          <Text style={styles.textAnunciar}>ATUALIZAR CADASTRO</Text>
        </TouchableOpacity>
        
          
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
  

export default AtualizarPessoa;
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



const DeletarPessoa = ({navigation}) => {
    const [id, setId] = useState()

    const handleDeletarPessoa = async(id) => {
      try{        
        const resp = await api.delete(`/pessoa/${id}`)     

    // console.log(resp)
    
        if(resp.status === 200){
          Alert.alert('Pessoa deletada com sucesso')
          navigation.navigate('MenuPessoas')
        }
        console.log(resp.data)        
      }catch(e){
        Alert.alert('Erro ao deletar pessoa')
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
      
  
        <Text style={{alignSelf:'center'}}>DeletarPessoa</Text>

        <TextInput
        value={id}
        placeholder='Digite o número do usuário'        
        onChangeText={(e)=> setId(e)}
        style={{width: 220, height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5}}
        />

        <TouchableOpacity
        onPress={()=> handleDeletarPessoa(id)}
        style={styles.btAnunciar}
        >
          <Text style={styles.textAnunciar}>EXCLUIR CADASTRO</Text>
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

export default DeletarPessoa;
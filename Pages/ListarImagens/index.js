import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, ActivityIndicator } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native'
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles'

const IconVeiculo = () => <Icones name="car-sport-sharp" size={100} color="#000000"/>;
const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;

//CELKE (listar as imagens da API salvas no BackEnd + DB)
//https://www.youtube.com/watch?v=rlHLlhjb2p8

const ListarImagens = ({navigation, route}) => {
  
  const [imagens, setImagens] = useState([])
  const [url, setUrl] = useState('')
  const isFocused = useIsFocused()
  
  useEffect(useCallback(async()=>{
    try{      
      const {data} = await api.get('list-image')
      // const {data} = await api.get('carros')
      setImagens(data.imagens)
      console.log(data.url)
      console.log(data.imagens)      
      setUrl(data.url)
    }
    catch(e){
        
    }
  }),[isFocused])


 

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

      
        <View style={styles.containerMeio3}>

          <TouchableOpacity
            onPress={()=> navigation.navigate('UploadImagem')}
            style={styles.btAnunciar}
          >
          <Text style={styles.textAnunciar}>Fazer upload de imagem</Text>          
          </TouchableOpacity>
          
          <Text style={{backgroundColor:'#c4c4c4', marginTop:10}}>LISTAR IMAGENS</Text> 
               
          <ScrollView showsVerticalScrollIndicator={false}>
          
          {imagens.map((imagem)=>(              
                    
              <View key={imagem.id}>          
                <View style={styles.flatView}>
                  <View style={{marginLeft: 10}}>
                        <Image 
                        style={{height: 50, width: 100, borderRadius: 50, marginTop: 8}} 
                        // source={url+imagem.image} alt={'sem imagem'}
                        // source={{uri: url + imagem.image}}
                        // source={{uri: `http://localhost:3000/files/carros/${imagem.image}`}}
                        // source={{uri:'http://localhost:3000/files/carros/1651082304826_pascoa.jpg'}}
                        // source={{uri:usuario.avatar_url}}
                        // source={{uri:'https://www.arquivodecodigos.com.br/logo2.jpg'}} 
                        // source={{uri:'https://blog.sollidelogo.com.br/wp-content/uploads/2019/09/Logotipo-3D14.png'}} 
                        // source={{uri:'http://res.cloudinary.com/dd6rpe5b4/image/upload/v1652446798/public/upload/carros/p90u0odtmfrhh6e7ghvr.jpg'}} 
                        source={{uri: url + imagem.image}} 
                        />
                  </View>
                  <View>                                    
                  
                  <Text style={styles.textTitle}>{imagem.id}</Text>
                  <Text style={styles.textDescrition}>Foto: {imagem.image}</Text>                  
                  <Text style={styles.textDescrition}>Marca: {imagem.marca}</Text>                  

                  </View>

                  </View>  
                  

              </View>                

            ))
            
            }                  

          </ScrollView>
         
        </View>

          

  </View>
}


export default ListarImagens;
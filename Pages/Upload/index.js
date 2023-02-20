import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, Alert } from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

// import Axios from "axios";
import api from '../../service/api';
import { Axios } from "axios";

// import { Camera } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';

// import styles from './styles';
// import { Ionicons } from '@expo/vector-icons';

// import Icones from 'react-native-vector-icons/Ionicons';
// const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;

//CARLOS LEVIR (fazer upload de imagens e videos)
//https://www.youtube.com/watch?v=SSJc6ZUo5HI

// export default function Upload({navigation}) {
const Upload = ({navigation}) => {
  const [image, setImage] = useState();
  
//Abrir um modal(sheet) de permissão de usar a galeria e setar a imagem na constante
  const imagePickerCall = async() =>{
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
      //caso queira restringir para imagem apenas, mudar de All para Images
    });

    // console.log(data)

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setImage(data);
  }

//Enviar a foto para BackEnd
    const uploadImage = async() =>{ 
      try{
        const data = new FormData();
        data.append("image", {
            // filename: image.width,            
            name: image.uri.split("/").pop(),
            uri: image.uri,
            type: image.type + '/jpg'
            //a biblioteca ExpoImagePicker não gera o Filename
            //pode usar um split na uri e pegar o final dela que é o nome
        });

        const headers = {
          'headers': {
              'Content-Type': 'application/json'
          }
        } 
        
    // await Axios.post("http://localhost:3000/files", data);
    const resp = await api.post('upload-image', data, headers);
    // const resp = await api.post('upload-image', data);
    //console.log(resp)
    //trazer o try e catch depois
        if(resp.status === 200){
          console.log(resp)
        Alert.alert('Upload realizado com sucesso')        
        }
      }
      catch(error){
        console.log(error)
        Alert.alert('Erro')
      }
    }
   
    
    return (
        <View style={styles.container}>
          <Image
            source={{
              uri: image
                ? image.uri
                : "https://www.giordaniturismo.com.br/assets/img/avatar.jpg"
            }}
            style={styles.avatar}
          />
          <TouchableOpacity 
            style={styles.button} 
            onPress={imagePickerCall}>
                <Text style={styles.buttonText}>Escolher imagem</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={uploadImage}>
                <Text style={styles.buttonText}>Enviar imagem</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      width: 150,
      height: 50,
      borderRadius: 3,
      backgroundColor: "#7159c1",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50
    }
  })

export default Upload;
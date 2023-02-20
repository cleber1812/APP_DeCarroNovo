
import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, PermissionsAndroid, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import mime from "mime";

import api from '../../service/api';
import styles from './styles';
import Icones from 'react-native-vector-icons/Ionicons';

const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;

//CELKE (Enviar imagem para o BackEnd+DB e receber de volta em ListarImagens)
//https://www.youtube.com/watch?v=kBSckls-Ih4
//https://www.youtube.com/watch?v=rlHLlhjb2p8&list=WL

//https://pergunte.org/question/stack/61175557/request-formdata-to-api-gets-network-error-in-axios-while-uploading-image
//C:\Users\cleber\Curso_de_Aplicativos\APP_DeCarroNovo\node_modules\react-native\template\android\app\src\debug\java\com\helloworld

const UploadImagem = ({navigation}) => {

  const [image, setImage] = useState('')
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });
  const [marca, setMarca] = useState()

//Abrir um modal(sheet) de permissão de usar a galeria e setar a imagem na constante
  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    //   PermissionsAndroid.PERMISSIONS.MEDIALIBRARY,
      {
        title: "App Permissão de Câmera",
        message: "O App precisa de acesso à câmera.",
        buttonNeutral: "Pergunte-me depois",
        buttonNegative: "Cancelar",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      alert('Você pode usar a Câmera');
      const data = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images
      });
      if (data.cancelled){
          return;
      }
      if (!data.uri){
        return;
    }
      console.log(data);
      setImage(data);

    } else {
      alert('Permissão de Câmera negada');
    }    
};

//Enviar a foto para BackEnd
  const uploadImage2 = async() =>{    
    //   e.preventDefault();
      console.log("Testando")          

      try{

        const dados = {
          marca,            
        }
        console.log(dados)

        const formData = new FormData();
        // formData.append('image', image);
        formData.append("image", {
            // filename: image.width,
            name: image.uri.split("/").pop(),
            uri: image.uri,
            // type: image.type + '/jpg'   
            type: mime.getType(image.uri), 
            // marca: marca,        
        })
        formData.append("marca", marca);
        console.log(formData)
      
        const headers = {
            'headers': {
                // 'Content-Type': 'application/json'
                'Content-Type': 'multipart/form-data'
            }
        }
        console.log(headers)


        // const formData2 = new FormData();
        // formData2.append(marca, {
        //   "string": JSON.stringify(marca), //This is how it works :)
        //   type: 'application/json'
        //     // marca: marca,        
        // });
        // console.log(formData2)

        const resp = await api.post('upload-image', formData, headers)
        // const resp = await api.post('upload-image', body, headers)
        // const resp = await api.post('upload-image', dados, formData, headers)
        // const resp = await api.post('upload-image', formData, headers, body)       
        // const resp = await api.post('upload-image', formData, headers, {marca})       
        // const resp = await api.post('upload-image', formData, headers)
          if(resp.status === 200){
              // console.log(resp)
            Alert.alert('Upload realizado com sucesso')
            // navigation.navigate('Home',{atualizar:true})
          }        
          console.log(resp.data)          
          // console.log(resp.image)
      }
      catch(error){
          console.log(error)
          Alert.alert('Erro')
      }    
  }

  const uploadImage = async () => {
//   const uploadImage = async e => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'headers': {
        'Content-Type': 'application/json'        
      }
    }

    // await api.post("/upload-image", formData, headers)
    await api.post("upload-image", formData, headers)
    .then((response) => {
      setStatus({
        type: 'success',
        mensagem: response.data.mensagem
      });
    }).catch((err) => {
      if(err.response){
        setStatus({
          type: 'error',
          mensagem: err.response.data.mensagem
        });
      }else{
        setStatus({
          type: 'error',
          mensagem: "Erro: Tente mais tarde!"
        });
      }
    });
  }

  return( 
  
        <View style={styles.containerMeio3}>
        <ScrollView showsVerticalScrollIndicator={false}>       

        {status.type === 'success'? <Text style={{color: "green"}}>{status.mensagem}</Text> : <Text/>}
        {status.type === 'error'? <Text style={{color: "#ff0000"}}>{status.mensagem}</Text> : <Text/>}

            <View style={styles.containerPrincipal3}>
                <Image
                    source={{
                        uri: image 
                        ? image.uri
                        : 'https://www.arquivodecodigos.com.br/logo.jpg'}}
                    style={{height: 100, width: 100, borderRadius: 50, margin: 20}} 
                />
            
            <TextInput
              value={marca}
              placeholder='Marca'
              onChangeText={(e)=> setMarca(e)}
              style={styles.btTextInput}
            />

            <TouchableOpacity
                onPress={()=> uploadImage2()}
                style={styles.btAnunciar}
            >
                <Text style={styles.textAnunciar}>FAZER UPLOAD FOTO</Text>
            </TouchableOpacity>  

            <TouchableOpacity
                onPress={()=> requestCameraPermission()}
                style={styles.btAnunciar}
            >
                <Text style={styles.textAnunciar}>Permitir acesso galeria</Text>
            </TouchableOpacity> 

            <TouchableOpacity
                onPress={()=> navigation.navigate('ListarImagens')}
                style={styles.btAnunciar}
            >            
            <Text style={styles.textAnunciar}>Listar Imagens do backend</Text>
                {/* <IconSaida/> */}
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> navigation.navigate('TirarFoto')}
                style={styles.btAnunciar}
            >   
            <Text style={styles.textAnunciar}>Tirar foto e salvar na galeria</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> navigation.navigate('Upload')}
                style={styles.btAnunciar}
            >   
            <Text style={styles.textAnunciar}>Escolher foto e enviar para o BackEnd</Text>
            </TouchableOpacity>
                    
            </View>

        </ScrollView>
        </View>
    
    
  )
}

export default UploadImagem;
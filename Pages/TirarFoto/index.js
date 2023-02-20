import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

// import Icones from 'react-native-vector-icons/Ionicons';
// const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;

//SUJEITO DESENVOLVEDOR (tirar foto e salvar na galeria)
//https://www.youtube.com/watch?v=h8ukVeuzHEY
//https://www.youtube.com/watch?v=tj58H9eAJv0

const TirarFoto = ({navigation}) => {

  const camRef = useRef(null)
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

//Abrir um modal(sheet) de permissão de usar a câmera e da galeria
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();  

    (async () => {
      // const { status } = await Permissions.askAsync(Permissions.CAMERA);
      const { status } = await MediaLibrary.requestPermissionsAsync()
        console.log(status);
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <View><Text>"No access to camera"</Text></View>;
  }

//Tirar a foto e abrir o modal para visualizar
  const takePicture = async() =>{
    // async function takePicture() {
      if (camRef){
        const data = await camRef.current.takePictureAsync();
        setCapturedPhoto(data.uri);
        setOpen(true)
        console.log(data);
      }
    }

//Salvar a foto na galeria
  const savePicture = async() =>{    
      const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
      .then(()=>{
        alert('Salvo com sucesso!');        
      })
      .catch(error =>{
        console.log('err', error);
      })    
  }  
 
  return( 
  
    <View style={styles.container}>
        <StatusBar style='light'/> 

        <View style={styles.containerMeio3}>
          <Camera 
            style={{flex:1}}            
            type={type}
            ref={camRef}
          >
            <View style={{flex:1, backgroundColor:'transparente', flexDirection:'row'}}>
              <TouchableOpacity
                style={{position:'absolute', bottom:20, left:20}}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={{fontSize:20, marginBottom:3, color:'#FFFFFF', backgroundColor:'#3f0490'}}> Flip </Text>
              </TouchableOpacity>              
            </View>
          </Camera>          
        </View> 
        
        <TouchableOpacity 
          style={{position:'absolute', bottom:20, left:80, backgroundColor:'#3f0490'}}
          onPress={ takePicture }
        >
          <Ionicons name="camera" size={40} color="#FFFFFF"/>
        </TouchableOpacity>

        { capturedPhoto && 
            <Modal
              animationType='slide'
              transparent={false}
              visible={open}
            >
              <View style={{flex:1, justifyContent:'center', alignItems:'center', margin:20}}>
                
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity 
                    style={{margin:20}}
                    onPress={ () => setOpen(false)}                  
                  >
                    <Ionicons name="close" size={40} color="#FF0000"/>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={{margin:20}}
                    onPress={ savePicture }                  
                  >
                    <Ionicons name="send" size={40} color="#FF0000"/>
                  </TouchableOpacity>
                </View>

                <Image
                  style={{width:'100%', height:450, borderRadius:20}}
                  source={{uri: capturedPhoto}}
                />
              </View>
            </Modal>
        }           
        
        
    
    </View>
  )
}

export default TirarFoto;
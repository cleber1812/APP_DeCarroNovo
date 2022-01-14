import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native';
import Icones from 'react-native-vector-icons/Ionicons';

const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;
const IconExcluir = () => <Icones name="trash" size={30} color="#000000"/>;

const DeletarCarro = ({navigation, route}) => {
    const [carros, setCarros] = useState([])
    const isFocused2 = useIsFocused()

    useEffect(useCallback(async()=>{

      try{
        const {data} = await api.get('carros')
        console.log(data)
        setCarros(data)
      }
      catch(e){}

    }),[isFocused2])

    
    const handleDeletar = async(id) => {
        try{
          // const dados = {id: Number(id)  }
          // const resp = await api.delete(`/carro/${id}` , dados)
          
      //  const {data} = await api.delete(`/carro/${id}`)
          const data = await api.delete(`/carro/${id}`)

       const car = carros.filter((carros)=> carros.id !== id)       
      setCarros(car)
      console.log(data)

// Como fazer o IF funcionar? Se tirar as chaves na liva 29 const data, afeta a função Cadastrar veículo: Não apaga os dados anteriores//
// Tenho que descobrir como chamar uma função com chaves dentro do IF

          if(data.status === 200){
            Alert.alert('Veículo deletado com sucesso')
            navigation.navigate('Anunciar',{atualizar:true})
          }
          // console.log(resp.data)
          // navigation.navigate('Login')
        }catch(e){
          Alert.alert('Erro ao deletar veículo')
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
        onPress={()=> navigation.navigate('Logout')}
        style={styles.buttonMenu}
    >            
      <IconSaida/>
    </TouchableOpacity>

    </View>


    <View style={styles.containerMeio}>

    <Text style={{alignSelf:'center'}}>Deletar Anúncio</Text>

      {
        carros[0] ? carros.map((carro)=>(
          <View style={{display:'flex', flexDirection:'row'}} key={carro.id}>
          <View style={styles.flatView}>
          <Text>{`Id: ${carro.id}`}</Text>
          <Text>{`Marca: ${carro.marca}`}</Text>
            
          </View> 

          
          <TouchableOpacity
              onPress={()=> handleDeletar(carro.id)}
              style={{width: 100, height: 40, padding: 4, marginBottom:8, borderRadius:5, backgroundColor:'lightblue'}}
          >
              <IconExcluir/>
              <Text style={{alignSelf:'center', color:'black', fontWeight:'bold',fontSize:18}}> EXCLUIR </Text>
          </TouchableOpacity>
          </View>
        ))

        :<Text>Não há carros</Text>
      }
    </View>  

    <View style={ styles.bottomView}>
        
          <TouchableOpacity
              onPress={()=> navigation.navigate('Home')}
              style={styles.buttonTab}
          >            
            <IconOfertas/>
            <Text style={styles.textTab}>Ofetas</Text> 
          </TouchableOpacity>

          <TouchableOpacity
              onPress={()=> navigation.navigate('AnunciarCarro')}
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
  )      
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      // marginTop: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#3366FF',      
    },
    
    headerView: {      
      height:80,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'baseline',
    },
        
    buttonLogo:{
      backgroundColor:'#3366FF',
      width: 250, 
      height: 48, 
      marginTop: 30,
      borderWidth:0,
      // alignItems: 'center',
      // justifyContent: 'center',
    },

    textLogo:{
 
      color: '#FFFFFF',
      fontSize:36,
      fontWeight:'bold'      
    },

    buttonMenu:{
      backgroundColor:'#3366FF',
      width: 50, 
      height: 48, 
      marginTop: 30,
      borderWidth:0,      
    },

    containerMeio: {
      flex: 1,
      marginTop: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#FFFFFF',
      // backgroundColor: '#c4c4c4',
      marginBottom: 50
    },

    containerPrincipal: {
      flex: 1,
      marginTop: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',      
      marginBottom: 50
    },

    btAnunciar:{
      backgroundColor:'#3366FF',
      width: 280, 
      height: 50, 
      borderRadius: 8,      
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,      
      // alignSelf: 'center',
      // borderWidth:2,
    },
  
     textAnunciar:{   
      color: '#FFFFFF',
      fontSize:24,
      fontWeight:'bold',
      // textAlign: 'center',
    },

      flatView: {
        flex: 1,
        margin: 4,
        marginLeft:5,
        marginRight:5,
        backgroundColor: '#FFFFFF',
        // justifyContent: 'center',              
        // paddingTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        borderColor: '#3366FF',
        borderWidth:0,
        elevation: 5,
        // shadowColor: '#52006A',

                        
      },
      textTitle: {
        // margin: 10,
        marginTop: 1,
        marginBottom: 5,
        marginStart: 5,
        // fontFamily: 'Helvetica',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3366FF'
      },      
      textDescrition: {
        marginLeft: 10,        
        // fontFamily: 'Verdana',
        fontSize: 16,
        color: '#555770'
      },
      
      bottomView:{
   
        width: '100%', 
        height: 50, 
        backgroundColor: '#3366FF', 
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,                
      },
            
      buttonTab:{
   
        width: 80, 
        height: 48, 
        marginTop: 1,
        borderWidth:0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      textTab:{
 
        color: '#fff',
        fontSize:12,
        // alignSelf: 'center',
      }
   
  });




export default DeletarCarro;
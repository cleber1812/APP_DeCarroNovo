import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import api from '../../service/api';
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Input } from '@rneui/themed';





const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;


const AnunciarCarro = ({navigation}) => {

  // const [marca, setMarca] = useState()
  // const [modelo, setModelo] = useState()
  // const [anoF, setAnoF] = useState()
  // const [anoM, setAnoM] = useState()
  // const [cor, setCor] = useState()

  const [marca, setMarca] = useState(null)
  const [modelo, setModelo] = useState(null)
  const [anoF, setAnoF] = useState(null)
  const [anoM, setAnoM] = useState(null)
  const [cor, setCor] = useState(null)

  const [errorMarca, setErrorMarca] = useState(null)
  const [errorModelo, setErrorModelo] = useState(null)
  const [errorAnoF, setErrorAnoF] = useState(null)
  const [errorAnoM, setErrorAnoM] = useState(null)
  const [errorCor, setErrorCor] = useState(null)

  const validar = () => {
    let error = false
    setErrorMarca(null)
    setErrorModelo(null)
    setErrorAnoF(null)
    setErrorAnoM(null)
    setErrorCor(null)
    if (marca == null) {
      setErrorMarca("Preencha a marca do veículo")
      error = true
    }
    if (modelo == null) {
      setErrorModelo("Preencha o modelo do veículo")
      error = true
    }
    if (anoF == null) {
      setErrorAnoF("Preencha o Ano de fabricação do veículo")
      error = true
    }
    if (anoM == null) {
      setErrorAnoM("Preencha o Ano do modelo do veículo")
      error = true
    }
    if (cor == null) {
      setErrorCor("Preencha a cor do veículo")
      error = true
    }
    return !error
  }

  // const salvar = () => {
  //   if (validar() == true){
  //     console.log("Salvou")      
  //   // setMarca(null)
  //   // setModelo(null)
  //   // setAnoF(null)
  //   // setAnoM(null)
  //   // setCor(null)        
  //   }
  // }

  const handleCadastrar = async() =>{
    if (validar()){ 
        

      try{        
          const dados = {
            marca,
            modelo,
            anoFabricacao: Number(anoF),
            anoModelo: Number(anoM),
            cor,

          }        
          const resp = await api.post('carros',dados)
          if(resp.status === 200){
            Alert.alert('Veículo criado com sucesso')
            navigation.navigate('Home',{atualizar:true})
          }        
          console.log(resp.data)          
      }catch(e){
        Alert.alert('Erro ao criar veículo')
      }

      setMarca(null)
      setModelo(null)
      setAnoF(null)
      setAnoM(null)
      setCor(null)
    }
  }


  return( 
  
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
    <View  style={styles.containerPrincipal3}>
        
    <Text style={{alignSelf:'center'}}>Anunciar Carro</Text>

    <Input
        value={marca}
        placeholder='Marca, ex: Chevrolet'
        onChangeText={(e)=> {setMarca(e), setErrorMarca(null)}}
        style={styles.btTextInput}
        errorMessage={errorMarca}
      />   
      <Input
        value={modelo}
        placeholder='Modelo, ex: Prisma'        
        onChangeText={(e)=> {setModelo(e), setErrorModelo(null)}}
        style={styles.btTextInput}
        errorMessage={errorModelo}
      />
      <Input  
        value={anoF}
        placeholder='Ano de Fabricação, ex: 2021'
        keyboardType="phone-pad" 
        onChangeText={(e)=> {setAnoF(e), setErrorAnoF(null)}}
        style={styles.btTextInput}
        errorMessage={errorAnoF}
      />
      <Input  
        value={anoM}
        placeholder='Ano do Modelo, ex: 2022'
        keyboardType="phone-pad" 
        onChangeText={(e)=> {setAnoM(e), setErrorAnoM(null)}}
        style={styles.btTextInput}
        errorMessage={errorAnoM}
      /> 
       <Input  
        value={cor}
        placeholder='Cor, ex: Verde'
        onChangeText={(e)=> {setCor(e), setErrorCor(null)}}
        style={styles.btTextInput}
        errorMessage={errorCor}
       />
        


      <TouchableOpacity
        onPress={()=> handleCadastrar()}
        style={styles.btAnunciar}
      >
        <Text style={styles.textAnunciar}>ANUNCIAR VEÍCULO</Text>
      </TouchableOpacity>


    
      
      
    </View>
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
  )


}



export default AnunciarCarro;
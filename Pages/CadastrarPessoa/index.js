import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import api from '../../service/api';
import Icones from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';
import styles from './styles'


const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;
const IconCheck = () => <Icones name="checkbox" size={30} color="#3366FF"/>;
const IconUser = () => <Icones name="person-circle-sharp" size={150} color="#3366FF"/>;


const CadastrarPessoa = ({navigation}) => {

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  
  const [isChecked, setChecked] = useState(true);
  // const [counter, setCounter] = useState(0);

  // const Props = {};  
  //   constructor(props){
  //     super(props);
  //     this.state={
  //       isChecked:true
  //     }
  //   }
  


  const handleCadastrarPessoa = async() =>{
      try{
          // const dados = {
          //   nome,
          //   email,
          //   senha,            
          // }
          // const resp = await api.post('pessoas',dados)
          const resp = await api.post('pessoas',{nome, email, senha})
          if(resp.status === 200){
            Alert.alert('Pessoa cadastrada com sucesso')
            navigation.navigate('Login')
            // navigation.navigate('Anunciar')
          }
          // if(resp.status === 401){
          //   Alert.alert('E-mail já cadastrado no sistema')
          // }
          console.log(resp.data)
          
      }catch(e){
        Alert.alert('Erro ao cadastrar pessoa')
      }

  }


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

  <View style={styles.containerMeio}>
  
      <ScrollView showsVerticalScrollIndicator={false}>

  <View style={styles.containerPrincipal}>  
    <IconUser/>
    
    <Text style={styles.textEntrada}>Nome</Text>
    
      <TextInput
        value={nome}
        placeholder='Nome'
        onChangeText={(e)=> setNome(e)}
        style={styles.btTextInput}
      />   

    <Text style={styles.textEntrada}>Email</Text>
    
      <TextInput
        value={email}
        placeholder='Email'   
        autoComplete='email'
        autoCapitalize='none'
        onChangeText={(e)=> setEmail(e)}
        style={styles.btTextInput}
      />      
    
    <Text style={styles.textEntrada}>Senha</Text>
    
       <TextInput  
        value={senha}
        placeholder='Senha'
        autoCapitalize='none'
        secureTextEntry
        onChangeText={(e)=> setSenha(e)}
        style={styles.btTextInput}
       />

        <View style={{flexDirection:'row', marginTop:'10%'}}>

                <CheckBox
                // style={{flex: 1, padding: 10}}    
                onClick={()=> setChecked(oldState => !oldState)}
                isChecked={isChecked}
                checkBoxColor={'#3366FF'}
                uncheckedCheckBoxColor={'#000000'}
                // leftText={"CheckBox"}
                />                
              
                {/* <IconCheck/> */}

                <Text style={{alignSelf:'center', paddingHorizontal: 10}}>Aceito os termos do contrato</Text>

        </View>
        


      <TouchableOpacity
        onPress={()=> handleCadastrarPessoa()}
        style={styles.btAnunciar}
        // disabled={false}
        disabled={(isChecked === true)?false:true}
      >
        <Text style={styles.textAnunciar}>CADASTRAR</Text>
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
  )

}


export default CadastrarPessoa;
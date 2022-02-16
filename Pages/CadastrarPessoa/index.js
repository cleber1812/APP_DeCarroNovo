import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import api from '../../service/api';
import Icones from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';


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
            navigation.navigate('Anunciar')
            // navigation.navigate('Anunciar',{atualizar:true})
          }
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
      >
        <Text style={styles.textAnunciar}>CADASTRAR</Text>
      </TouchableOpacity>

      </View>


      </ScrollView>      

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
  
      containerPesquisa: {
        flex: 0.15,
        marginTop: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#FFFFFF',
        backgroundColor: '#c4c4c4',
        // marginBottom: 1,
        // width: 30,
        // height:30,        
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
  
      containerMeio2: {
        flex: 0.1,
        // marginTop: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#FFFFFF',
        backgroundColor: '#c4c4c4',
        // marginBottom: 0,
      },
  
      containerPrincipal: {
        flex: 1,
        marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',      
        marginBottom: 50
      },

      containerPrincipal2: {
        flex: 1,
        marginTop: 1,
        justifyContent: 'flex-start',
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

      textEntrada:{   
        color: '#3366FF',
        fontSize:20,
        fontWeight:'bold',
        // alignItems:'flex-start',
        alignSelf:'flex-start',
        marginLeft:'10%',
        // marginLeft:10,
        
      },
      
      btTextInput:{
        width: '80%', height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5,
      },
  
      btPesquisar:{
        backgroundColor:'#3366FF',
        width: 100, 
        height: 35, 
        borderRadius: 8,      
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,      
        // alignSelf: 'center',
        // borderWidth:2,
      },
       
      textBtPesquisar:{   
        color: '#FFFFFF',
        fontSize:14,
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
  
        flatView2: {
          flex: 1,
          margin: 4,
          marginLeft:5,
          marginRight:5,
          backgroundColor: '#c4c4c4',
          justifyContent: 'space-evenly',  
          alignItems: 'center',            
          // paddingTop: 10,
          borderRadius: 10,
          flexDirection: 'row',
          borderColor: '#3366FF',
          borderWidth:0,
          // elevation: 5,
          // shadowColor: '#52006A', 
          // marginBottom: 50,   
          // marginLeft: 10,                    
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



export default CadastrarPessoa;
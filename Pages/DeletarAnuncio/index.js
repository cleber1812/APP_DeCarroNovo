import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, TextInput,TouchableOpacity, Alert, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import api from '../../service/api';
import { useIsFocused } from '@react-navigation/native';
import Icones from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../src/componentes/List/carros';

const IconSaida = () => <Icones name="enter" size={40} color="#FFFFFF"/>;
const IconOfertas = () => <Icones name="car" size={30} color="#FFFFFF"/>;
const IconProcurar = () => <Icones name="search" size={30} color="#FFFFFF"/>;
const IconAnunciar = () => <Icones name="megaphone-sharp" size={30} color="#FFFFFF"/>;
const IconExcluir = () => <Icones name="trash" size={30} color="#000000"/>;

const DeletarCarro = ({navigation, route}) => {
    const [carros, setCarros] = useState([])
    const isFocused2 = useIsFocused()

    const [loading, setLoading] = useState(false)

    useEffect(useCallback(async()=>{

      try{
        setLoading(true)
        const {data} = await api.get('carros')
        console.log(data)
        setCarros(data)
        setLoading(false)
      }
      catch(e){}

    }),[isFocused2])


    function mensagemDelete(id){
    
      Alert.alert(
        "Excluir Registro",
        "Deseja Excluir este Registro?",
        [
          { text: "Não", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
          { text: "Sim", onPress: () => handleDeletar(id) }
        ],
        { cancelable: true }
      );  
                  
    }


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
            navigation.navigate('Home',{atualizar:true})
          }
          // console.log(resp.data)
          // navigation.navigate('Login')
        }catch(e){
          Alert.alert('Erro ao deletar veículo')
        }
    
      }
    
    const handleCarroId = async(id) =>{
    try{   
      const {data} = await api.get(`/carro/${id}`)
      // setCarroId(data.id)
      // console.log(carroId)   
      // const setCarroId2 = (data.id)
      // const setCarroId2 = ({id: data.id, modelo: data.modelo,})
      const setCarroId2 = (data)
      // const setCarroModelo2 = (data.modelo)
      console.log(setCarroId2)   
      // alert(data.id)      
      // navigation.navigate('CarroId', {nome: 'Cleber', email: 'cleber@teste.com'})
      navigation.navigate('AtualizarAnuncio', {id: `${setCarroId2.id}`, marca: `${setCarroId2.marca}`,
                                              modelo: `${setCarroId2.modelo}`, anoFabricacao: `${setCarroId2.anoFabricacao}`,
                                              anoModelo: `${setCarroId2.anoModelo}`,cor: `${setCarroId2.cor}` })
      // navigation.navigate('AtualizarAnuncio', {setCarroId2})
      }
    catch(e){}      
    }
    
    
    
    if (loading === true){
      return (
      <View style={styles.containerLoader}>
        <ActivityIndicator
        size='large'
        color='#0000ff'
        />
        <Text style={styles.textLoader}>Carregando dados</Text>
        </View>
      )}
    
    else{

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


    
    <View style={styles.containerMeio3}>
    {/* <ScrollView showsVerticalScrollIndicator={false}> */}

    <View style={{flexDirection: 'row', justifyContent:'space-between', margin:10}}>
    <Text style={{alignSelf:'center'}}>Deletar</Text>
    <Text style={{alignSelf:'center'}}>Anúncio</Text>
    <Text style={{alignSelf:'center'}}>Editar</Text>
    </View>

      {/* {
        carros[0] ? carros.map((carro)=>(
          <View style={{display:'flex', flexDirection:'row'}} key={carro.id}>
          
          
          <View style={styles.flatView}>
          <Text style={styles.textDescrition}>{`Id: ${carro.id}`}</Text>
          <Text style={styles.textTitle}>{`${carro.modelo}`}</Text>           
          </View>

          

          
          <TouchableOpacity
              onPress={()=> handleDeletar(carro.id)}
              // style={{width: 80, height: 50, padding: 0, marginBottom:30, borderRadius:8, borderColor:'#3366FF' , alignItems:'center', justifyContent:'center', borderWidth:2  }}
              style={styles.buttonTab}
          >
              <IconExcluir/>
              {/* <Text style={{alignSelf:'center', color:'black', fontWeight:'bold',fontSize:18}}> EXCLUIR </Text> */}
          {/* </TouchableOpacity>
           
          </View>
        ))

        :<Text>Não há carros</Text>
      }  */}
      

        <FlatList
            data={carros}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
            <ListItem
                data={item}
                deletar = {()=> mensagemDelete(item.id)}
                // editar = {()=> navigation.navigate('AtualizarAnuncio')}                
                editar = {()=> handleCarroId(item.id)}                
            />
            // <View style={styles.flatView}>      
            // <Text style={styles.textDescrition}>{item.id}  </Text>
            // <Text style={styles.textDescrition}>{item.modelo}</Text>
            // </View>
            )}
            // ItemSeparatorComponent={()=><Separator/>}
            
        >

        </FlatList>


    {/* </ScrollView> */}
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
}


export default DeletarCarro;
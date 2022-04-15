
// import { Container } from './styles';

const general = {



// STYLES VIEW

  container: {
    flex: 1,
    // marginTop: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#3366FF',      
  },

  containerLoader: {
    flex:1, 
    alignContent:'center', 
    justifyContent:'center',
  },
  
  headerView: {      
    height:80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
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

  containerMeio3: {
    flex: 1,
    marginTop: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // backgroundColor: '#c4c4c4',
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
    // marginBottom: 50
  },

  containerPrincipal3: {
    flex: 1,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',          
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

  flatView3: {
    // flex: 1,
    margin: 4,
    marginLeft:5,
    marginRight:5,
    backgroundColor: '#FFFFFF',
    // justifyContent: 'center',              
    // paddingTop: 10,
    // marginBottom: 0,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: '#3366FF',
    borderWidth:0,
    elevation: 5,
    // shadowColor: '#52006A',                        
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

// STYLES BOTÕES

  buttonLogo:{
    backgroundColor:'#3366FF',
    width: '75%', 
    height: 48, 
    marginTop: 30,
    marginLeft:10,
    borderWidth:0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  buttonMenu:{
    backgroundColor:'#3366FF',
    width: '20%', 
    height: 48, 
    marginTop: 30,
    borderWidth:0,      
    alignItems:'center',
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
  
  buttonTab:{
 
    width: '33%', 
    height: 48, 
    marginTop: 1,
    borderWidth:0,
    alignItems: 'center',
    justifyContent: 'center',
  },

// STYLES TEXTOS

  textLogo:{

    color: '#FFFFFF',
    fontSize:36,
    fontWeight:'bold'      
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

  textBtPesquisar:{   
    color: '#FFFFFF',
    fontSize:14,
    fontWeight:'bold',
    // textAlign: 'center',
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

  textTab:{
    color: '#fff',
    fontSize:12,
    // alignSelf: 'center',
  },

  textLoader:{
    textAlign:'center',
  },

// STYLES TEXT INPUT

  btTextInput:{
    width: '80%', height: 40, borderWidth:1, padding: 4, marginBottom:8, borderRadius:5,
  },
        


// STYLES DO LISTITEM CARROS

container2:{
  backgroundColor:'#FFF',
  paddingHorizontal:10,
  paddingVertical:12,

},

texto:{
  color:'#222',
  fontSize:17,
 
},
deletar:{
  backgroundColor:'#d62525',
  justifyContent:'center',
  flex:1
 
},
editar:{
  backgroundColor:'#066720',
  justifyContent:'center',
  
 
},
textoList:{
  color:'#FFF',
  fontSize:19,
  padding:20
},

textoList2:{
  color:'#000',
  fontSize:19,
  padding:20
},


titulo:{
  flexDirection:'row',
},

subtitulo:{
  flexDirection:'row',
  marginTop:4,
  
},

icone:{
  marginRight:4,
  marginTop:2
}


};

export default general;
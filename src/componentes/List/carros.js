
import React from 'react';
import { StyleSheet, Text, View, Button, Animated, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function PuxarEsquerda(progress, eixoX){
    const scale = eixoX.interpolate({
        inputRange:[0, 100],
        outputRange:[0,1],
        extrapolate: 'clamp'
    })
    return(
        <View style={styles.deletar}>
            <Animated.Text style={[styles.textoList, {transform:[{scale}]}]}>Deletar</Animated.Text>
        </View>
    )
}


function PuxarDireita({progress, eixoX, onPress}){
    const scale = eixoX.interpolate({
        inputRange:[-100, 0],
        outputRange:[1,0],
        extrapolate: 'clamp'
    })
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.editar}>
            <Animated.Text style={[styles.textoList, {transform:[{scale}]}]}>Editar</Animated.Text>
        </View>
        </TouchableOpacity>
    )
}

export default function ListItem({data, deletar, editar}) {
  return (
    <Swipeable
        renderLeftActions={PuxarEsquerda}
        onSwipeableLeftOpen={deletar}
        renderRightActions={(progress, eixoX) => <PuxarDireita progress={progress} eixoX={eixoX} onPress={editar} />}
    >
    <View style={styles.flatView}>
      
      <View >
      {/* <FontAwesome style={styles.icone} name="square" size={20} color={data.cor}></FontAwesome> */}
      <Text style={styles.textoList2}>{data.id}  </Text>
      
      </View>
      <View>
      <Text style={styles.textTitle}>{data.modelo}</Text>
      {/* <Text style={styles.textoSub}>{data.hora}</Text> */}
      </View>
      
     
     
    </View>
    </Swipeable>
  );
}


// const styles = StyleSheet.create({
//     container2:{
//         backgroundColor:'#FFF',
//         paddingHorizontal:10,
//         paddingVertical:12,

//     },

//     texto:{
//         color:'#222',
//         fontSize:17,
       
//     },
//     deletar:{
//         backgroundColor:'#d62525',
//         justifyContent:'center',
//         flex:1
       
//     },
//     editar:{
//         backgroundColor:'#066720',
//         justifyContent:'center',
        
       
//     },
//     textoList:{
//         color:'#FFF',
//         fontSize:19,
//         padding:20
//     },

//     titulo:{
//         flexDirection:'row',
//     },

//     subtitulo:{
//         flexDirection:'row',
//         marginTop:4,
        
//     },

//     icone:{
//         marginRight:4,
//         marginTop:2
//     }
// });


import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff'
      
    },
    inicio: {
      flex: 1,
      backgroundColor: '#8A19D6',
      height:178,
      paddingVertical:50,
      paddingHorizontal:20,
    },
    text:{
      color:'#f0f0f0',
      marginTop:30,
      fontSize:18,
      fontWeight:'bold',
    },
    text2:{
      color:'#000',
      fontSize:20,
      marginBottom:10,
      fontWeight:'bold',
    },
    text3:{
      color:'#000',
      fontSize:28,
      fontWeight:'bold',
    },
    conta:{
      margin:20
    },
    imgUser:{
      width:30,
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:10,
      paddingHorizontal:25,
      borderRadius: 50,
      backgroundColor:'#9B3BDC'
    },
    imgM:{
      width:70,
      height:70,
      margin:5,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 50,
      backgroundColor:'#F0F1F5'
    },

    containerImgUser:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
    sub:{
      flexDirection:'row', 
      width:150, 
      justifyContent:'space-around',
      alignItems:'center'
    },
    list:{
      flex:1,
    },

    cartao:{
      width:'100vw',
      padding:20,
      margin:20,
      borderRadius:10,
      flexDirection:'row',
      backgroundColor:'#F0F1F5'
    }
  });
  
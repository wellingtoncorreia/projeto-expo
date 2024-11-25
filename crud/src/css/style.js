import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f1f1f',
      paddingHorizontal:30,
    },
    userItem: {
      width:'100vw',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:'#f0f0f0',
      padding:20,
      marginVertical: 5,
      borderRadius:10
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    title:{
      color:'#f0f0f0', 
      fontSize:30, 
      fontWeight:'900',
    }
  });
  
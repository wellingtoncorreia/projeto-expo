import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#278FEE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagemss:{
        width:'90%',
        height:45,
        marginBottom:50,
    },

    imagemBody:{
        paddingTop:100,
        alignItems: 'center',
        
    },
    input:{
        borderColor:"#ccc",
        borderWidth: 1,
        margin:10,
        padding:10,
    },
    text:{
        textAlign:"left",
        paddingHorizontal:10,
        paddingVertical: 5,
        marginTop:5,
    },
    form:{
        width:"90%",
    },

    btn:{
        width:"50%",
        backgroundColor:"#3949AE",
        paddingHorizontal:30,
        paddingVertical: 15,
        textAlign:'center',
        color:"#f0f0f0",
        borderRadius:8
    },

    formbtn:{
        width:'100%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center'
        // backgroundColor:'blue',
    },
    subBtn:{
        width:"100%",
        alignItems:"flex-end",
        padding:10,
    },
    subBtn1:{
        padding:5,
        fontSize:15,
        color: '#840884'
    }
  });

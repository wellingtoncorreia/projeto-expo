import { View, Text, TouchableOpacity } from "react-native";
export default function testeBtn(){
    const pressione= () =>{alert('Olá mundo!')}
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={pressione}>
          <Text>Pressione-me</Text>
        </TouchableOpacity>
      </View>
    );
}


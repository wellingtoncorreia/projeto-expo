import { View, Image, Text } from "react-native";
import { index } from "../css/style";




export default function home() {
    return (
        <View style={index.imagemBody}>
            <Image style={index.imagemss}
                source={require('../../assets/sesi-senai.webp')}
            />
            <View style={index.form}>
                <Text style={index.text}>Você está Conectado</Text>
            </View>
        </View>
    )
}



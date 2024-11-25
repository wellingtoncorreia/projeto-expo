import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { index } from "../css/style";
import { Link, router } from "expo-router";
import { useState } from "react";



export default function Home() {
    const [input, setinput] = useState("");

    const captura = (text) => {
        setinput(text);
    };
    const handleSave = () => {
       if(input == "123456"){
        router.navigate('inicio');
       }
       else{
        <text>Senha invalida</text>
       }
    };

    return (
        <View style={index.imagemBody}>
            <Image style={index.imagemss}
                source={require('../../assets/sesi-senai.webp')}
            />
            <View style={index.form}>
                <Text style={index.text}>LOGIN:</Text>
                <TextInput placeholder="Insira seu CPF" style={index.input} />
                <Text style={index.text}>SENHA:</Text>
                <TextInput secureTextEntry onChangeText={captura}
                    value={input} placeholder="Insira sua senha" style={index.input} />
                <View style={index.subBtn}>
                    <TouchableOpacity><Link href={'inicio'} style={index.subBtn1}>cadastrar</Link></TouchableOpacity>
                    <TouchableOpacity><Link href={'inicio'} style={index.subBtn1}>esqueci a senha</Link></TouchableOpacity>
                </View>
            </View>
            <Text>{input}</Text>
            <View style={index.formbtn}>
                <Link href={'inicio'} style={index.btn}>ENTRAR</Link>
            </View>
        </View>
    )
}



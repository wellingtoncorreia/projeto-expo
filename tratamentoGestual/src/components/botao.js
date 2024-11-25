import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../css/botaoStyle";
import { router } from "expo-router";

export default function Botao(props){
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        setIsPressed(!isPressed);
        router.navigate(props.src);
    }

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor:props.cor }, isPressed ? styles.buttonPressed : null]}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>{props.btn}</Text>
        </TouchableOpacity>
    );
}
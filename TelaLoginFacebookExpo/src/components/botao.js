import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
// importando o css de outro arquivo
import { styles } from '../css/botaoStyle';
// importando a biblioteca de rotas
import { router } from 'expo-router'; 

export default function Botao({btn, cor, src, tamanho, corTexto}) {
  // verifica se o botão foi precionado
    const [isPressed, setIsPressed] = useState(false);

  // função para criar o efeito de click e navegar para outra tela
    const handlePress = () => {
      setIsPressed(!isPressed);
      router.navigate(src);
    };

  
    return (
      // estrutura para criar o objeto botão
      <TouchableOpacity
        style={[styles.button,{ backgroundColor: cor },{ paddingHorizontal: tamanho }, isPressed ? styles.buttonPressed : null]}
        onPress={handlePress}
      >
        {/* texto do botão {btn} atributo que receberá o valor do botão */}
        <Text  style={[styles.buttonText, {color: corTexto}]}>{btn}</Text>
      </TouchableOpacity>
    );
  }
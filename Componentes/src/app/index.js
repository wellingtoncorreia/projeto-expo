import { View, Text, Image } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import  InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) => {
      console.log(newText);
  };

  return (
    <View style={styles.container}>
      <Image 
          style={{width:'80%', height:80, marginBottom:30}} 
          resizeMode="contain" 
          source={require('../../assets/facebook.png')} 
      />
      <InputTexto dica="Número de celular ou email" />
      <InputTexto dica="Senha" seguranca={true} />
      <Botao btn= "Entrar" cor='#1877F2' corTexto='#f0f0f0' src='home' tamanho='35%'/>

      <View style={styles.cont}>
        <View style={styles.line} />
        <Text style={styles.text}>ou</Text>
        <View style={styles.line} />
      </View>

      <Botao btn= "criar nova conta" corTexto='#59606B' tamanho='5%' src='excluido'/>
    </View>
  );
}


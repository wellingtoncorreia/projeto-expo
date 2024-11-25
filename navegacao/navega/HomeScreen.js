// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  const onAnimationFinish = () => {
    navigation.navigate('Other'); // Navega para a tela 'Other'
  };

  return (
    <View>
      <LottieView
        source={require('./assets/nave.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
      {/* Botão de exemplo para navegação manual */}
      <Button title="Ir para outra tela" onPress={() => navigation.navigate('Other')} />
    </View>
  );
};

export default HomeScreen;
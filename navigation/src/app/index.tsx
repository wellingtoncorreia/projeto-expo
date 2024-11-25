import React from 'react';
import { View } from 'react-native';
import { index } from '../css/style';
import { router } from 'expo-router';
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <View style={index.container}>
    <LottieView
      source={require("../../assets/nave.json")}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop={false}
      autoSize
      onAnimationFinish={()=> router.navigate('login')}
    />  
    </View>
  );
}




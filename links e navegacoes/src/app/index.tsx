import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
    <LottieView
      source={require("../../assets/nave.json")}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop={false}
      onAnimationFinish={()=>navigation.navigate('home')}
    />  
      <StatusBar style="auto" />
    </View>
  );
}

function Home() {
  return (
    <View style={styles.container}>
      <text>Tela Home</text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#278FEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


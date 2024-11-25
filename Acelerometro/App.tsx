import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const App = () => {
  const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0 });
  const [objectPosition, setObjectPosition] = useState({ x: screenWidth / 2, y: screenHeight / 2 });

  useEffect(() => {
    const subscription = Accelerometer.addListener((accelerometerData) => {
      setAccelerometerData(accelerometerData);
      const { x, y } = accelerometerData;
      const newX = objectPosition.x + x * 500; // Ajuste o multiplicador conforme necessário
      const newY = objectPosition.y - y * 500; // Ajuste o multiplicador conforme necessário

      // Verifique se o objeto não sai dos limites da tela
      const boundedX = Math.max(0, Math.min(newX, screenWidth));
      const boundedY = Math.max(0, Math.min(newY, screenHeight));

      setObjectPosition({ x: boundedX, y: boundedY });
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.object, { left: objectPosition.x, top: objectPosition.y }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  object: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    position: 'absolute',
  },
});

export default App;
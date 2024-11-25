import React, { useEffect } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function App() {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const orientation = width > height ? 'landscape' : 'portrait';
    console.log('Orientação atual:', orientation);
  }, [width, height]);

  return (
    <View style={[styles.container, { flexDirection: width > height ? 'row' : 'column' }]}>
      <Text>Texto 1</Text>
      <Text>Texto 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

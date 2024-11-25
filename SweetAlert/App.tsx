import React, { useEffect } from 'react';
import { Alert } from 'react-native';

export default function MyComponent() {
  useEffect(() => {
    Alert.alert(
      'Hello World',
      'This is a subtitle',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: true }
    );
  }, []);

  return null; // Como o Alert é usado fora da renderização, retornamos null ou outro componente de sua escolha.
}
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './AppStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Gatinho com fome</Text>
      <Image style={styles.imagens}
          source={require('./assets/foto-1.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}



import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import { styles } from './AppStyle';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
      <Text style={styles.texto}>um pequeno</Text>
  </SafeAreaView>
  );
}



import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página inicial</Text>

      <Link href="/sobre" style={styles.btn}>Sobre</Link>
      <Link href="/contato" style={styles.btn}>Contato</Link>

      <StatusBar style="auto" />
    </View>
  );
}



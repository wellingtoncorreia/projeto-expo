import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../css/contatoStyle';
import { Link } from 'expo-router';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Contatos</Text>

      <Link href="/sobre" style={styles.btn}>Sobre</Link>
      <Link href="/" style={styles.btn}>Início</Link>
      
      <StatusBar style="auto" />
    </View>
  );
}



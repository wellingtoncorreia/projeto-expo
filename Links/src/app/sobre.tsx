import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../css/sobreStyle';
import { Link } from 'expo-router';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página sobre</Text>
      <Link href="/" style={styles.btn}>Inicio</Link>
      <StatusBar style="auto" />
    </View>
  );
}


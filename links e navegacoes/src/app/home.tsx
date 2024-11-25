import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { ind } from '../css/indexStyle';

export default function Home() {
  return (
    <View style={ind.container}>
      <Text>Página Home</Text>
      <Link style={ind.btn} href={'/profile'}>Entrar</Link>
    </View>
  );
}


import { Text, View } from 'react-native';
import { styles } from '../css/style';
import * as Animatable from 'react-native-animatable';

export default function App() {
  return (
    <View style={styles.container}>
     <Animatable.Text animation="slideInDown" iterationCount='infinite' direction="alternate">Seu Projeto está funcionando</Animatable.Text>
    </View>
  );
}


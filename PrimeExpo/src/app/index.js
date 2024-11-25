import { View } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao'

export default function App() {
  return (
    <View style={styles.container}>
      <Botao texto = "Home" />
    </View>
  );
}


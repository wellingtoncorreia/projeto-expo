import { View} from 'react-native';
import Aviso from './components/aviso';
import { styles } from '../css/style';

export default function App() {
  return (
    <View style={styles.container}>
        <Aviso texto="conectado" animacao="bounceOut"/>
    </View>
  );
};


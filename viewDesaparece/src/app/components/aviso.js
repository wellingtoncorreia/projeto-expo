import { View, Text } from 'react-native';
import { styles } from '../../css/style';
import * as Animatable from 'react-native-animatable';

export default function Aviso(props) {
  return (
        <Animatable.View animation={props.animacao} delay={5000} duration={5000} style={styles.aviso}>
        <Text>{props.texto}</Text>
        </Animatable.View>
  );
};


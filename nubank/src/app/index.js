import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../css/style';
import Inicio from './screens/inicio';
import ListaMenu from './screens/listaMenu';
import { router } from 'expo-router';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Inicio />
      <ListaMenu style={{flex:1}}/>
      <TouchableOpacity style={styles.cartao} onPress={() => router.navigate ('/')}>
        <Image
          style={{marginRight:10}}
          source={require('../../assets/card.png')}
        />
        <Text>Meus Cartões</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


import { ScrollView, Text, View, Image } from 'react-native';
import { styles } from '../../css/style';



export default function inicio() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <View style={styles.containerImgUser}>
          <View style={styles.imgUser}>
            <Image
              source={require('../../../assets/user.png')}
            />
          </View>
          <View style={styles.sub}>
          <Image
            source={require('../../../assets/verFechado.png')}
          />
          <Image
            source={require('../../../assets/quest.png')}
          />
          <Image
            source={require('../../../assets/env.png')}
          />
          </View>
        </View>
        <Text style={styles.text}>Olá, Wellington Correia</Text>
      </View>
    </ScrollView>
  );
}


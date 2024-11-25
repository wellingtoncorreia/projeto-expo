import * as React from 'react';
import { ActivityIndicator, MD2Colors, Avatar, Button } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from '../css/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function App() {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
      <View>
        <Avatar.Icon size={100} icon="folder" />
      </View>
      <Button icon="star" mode="contained" onPress={() => router.navigate('appBar')}>
        Próximo
      </Button>
    </SafeAreaView>
  );
}


import { Text, View } from 'react-native';
import { profile } from '../css/profileStyle'
import { Link } from 'expo-router';


export default function Profile() {
  return (
    <View style={profile.container}>
      <Text>Página Profile</Text>
      <Link style={profile.btn} href={'/'}>Voltar</Link>
    </View>
  );
}   


import { Text, View } from 'react-native';
import { styles } from '../css/style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const data = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',  
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
  ];
  return (
    <SafeAreaView>
      <Text>Open up App.js to start working on your app!</Text>
    </SafeAreaView>
  );
}


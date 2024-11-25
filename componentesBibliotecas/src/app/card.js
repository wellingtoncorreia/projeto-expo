import { View } from 'react-native';
import { styles } from '../css/style';
import * as React from 'react';
import { Avatar, Button, Card, Text} from 'react-native-paper';
import { router } from 'expo-router';
const LeftContent = props => <Avatar.Icon {...props} icon="star" />


export default function App() {
    return (
        <View style={styles.alinhamento}>
            <Card style={styles.card}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button onPress={() => router.navigate('/')}>Próximo</Button>
                </Card.Actions>
            </Card>
        </View>
    );
}


import * as React from 'react';
import { View, Text } from 'react-native';
import { List, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function App() {
    const [active, setActive] = React.useState('');
    return (
        <List.AccordionGroup>
            <List.Accordion title="Accordion 1" id="1">
                <List.Item title="Item 1" />
                <List.Item title="Item 2" />
                <List.Item title="Item 3" />
                <List.Item title="Item 4" />
                <List.Item title="Item 5" />
                <List.Item title="Item 6" />
                <List.Item title="Item 7" />
                <List.Item title="Item 8" />
                <List.Item title="Item 9" />
                <List.Item title="Item 10" />
            </List.Accordion>
            <List.Accordion title="Accordion 2" id="2">
                <List.Item title="Item 2" />
            </List.Accordion>
            <View>
                <Text>
                    List.Accordion can be wrapped because implementation uses React.Context.
                </Text>
                <List.Accordion title="Accordion 3" id="3">
                    <List.Item title="Item 3" />
                </List.Accordion>
                <Button icon="star" mode="contained" onPress={() => router.navigate('card')}>
                    Próximo
                </Button>
            </View>
        </List.AccordionGroup>
        
    );
}


import { FlatList, ScrollView, View, Text } from 'react-native';
import React from 'react';
import { styles } from '../css/style';
import Card from '../components/card';


export default function App() {
    const data = [
        {
            'id': '1',
            'texto': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam nulla orci, in tincidunt dui aliquam eget. Pellentesque neque tortor, pulvinar in pellentesque id, lacinia ut enim. Curabitur est dui, tristique eu auctor quis, ultricies id libero. Integer dignissim sem a enim mattis hendrerit.',
            'image': 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2023/11/image6-1.png'
        },
        {
            'id': '2',
            'texto': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam nulla orci, in tincidunt dui aliquam eget. Pellentesque neque tortor, pulvinar in pellentesque id, lacinia ut enim. Curabitur est dui, tristique eu auctor quis, ultricies id libero. Integer dignissim sem a enim mattis hendrerit.',
            'image': 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2023/11/image4-3.png'
        },
        {
            'id': '3',
            'texto': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam nulla orci, in tincidunt dui aliquam eget. Pellentesque neque tortor, pulvinar in pellentesque id, lacinia ut enim. Curabitur est dui, tristique eu auctor quis, ultricies id libero. Integer dignissim sem a enim mattis hendrerit.',
            'image': 'https://leadster.com.br/blog/wp-content/uploads/2023/10/Night-Cafe-2.webp'
        }
    ]

    const renderItem = ({ item }) => (
        <ScrollView>
            <View style={styles.container}>
                <Card texto={item.texto} image={item.image} src="listaSimples" />
            </View>
        </ScrollView>
    );
    return (
        <ScrollView>
            <Text style={styles.texto}>FacePets</Text>
            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
}


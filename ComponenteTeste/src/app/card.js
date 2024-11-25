import { ScrollView, View } from 'react-native';
import { styles } from '../css/style';
import Card from '../components/card';


export default function App() {
    return (
        <ScrollView>
            <View style={styles.containerCard}>
                <Card 
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mauris aliquam nulla orci, in tincidunt dui aliquam eget. 
                Pellentesque neque tortor, pulvinar in pellentesque id, 
                lacinia ut enim. Curabitur est dui, tristique eu auctor quis, 
                ultricies id libero. Integer dignissim sem a enim mattis 
                hendrerit."

                image="https://blog.ebaconline.com.br/blog/wp-content/uploads/2023/11/image6-1.png"

                src="/"
                />

            </View>
        </ScrollView>
    );
}


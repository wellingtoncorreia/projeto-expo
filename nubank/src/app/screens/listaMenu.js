import { FlatList, ScrollView, Text, View } from "react-native";
import { styles } from "../../css/style";
import LinkMenu from "../components/linkLista";
import data from '../../../assets/bd';

export default function listaMenu(){
    const renderItem = ({ item }) => (<LinkMenu texto={item.texto} img={item.img} src={item.src} />);
    return(
        <ScrollView>
            <View style={styles.conta}>
                <Text style={styles.text2}>Conta</Text>
                <Text style={styles.text3}>R$ 100.000,33</Text>
            </View>
            <FlatList 
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
}
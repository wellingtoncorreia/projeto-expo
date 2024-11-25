import { View, Image, Text } from "react-native";
import { styles } from "../style";

export default function ListaItem(props) {
    return (
        <View style={styles.userItem}>
            <Image style={styles.avatar} source={{ uri: props.itemA }} />
            <View>
                <Text>{`${props.itemF} ${props.itemL}`}</Text>
                <Text>{props.itemE}</Text>
            </View>
        </View>
    );
}
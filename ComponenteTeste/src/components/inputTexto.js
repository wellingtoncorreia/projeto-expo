import { styles } from "../css/inputStyle";
import { TextInput, View, Text } from "react-native";

export default function Entrada(props) {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>{props.label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={props.valor}
                placeholder={props.dica}
                secureTextEntry={props.seguranca}
            />
        </View>
    );
}
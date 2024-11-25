import { View, Text,Image } from "react-native";
import { styles } from "../css/cardStyle";
import Botao from "./botao";

export default function Card(props){
    return(
        <View style={styles.body}>
           <Image 
                style={{width:'100%', height:300}} 
                source={{uri:(props.image)}} 
           />
            <Text style={styles.texto}>{props.texto}</Text>
            <Botao btn="saiba mais" cor='#0078D4' src={props.src} />
        </View>
    );
}
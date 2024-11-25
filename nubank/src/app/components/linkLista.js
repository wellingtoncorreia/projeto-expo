import { Image, TouchableOpacity, Text, View } from 'react-native'
import { styles } from '../../css/style';
import { router } from 'expo-router';
export default function linkMenu(props){
    return(
    <TouchableOpacity onPress={()=>router.navigate(props.src)}>
        <View style={styles.imgM}>
        <Image
            source={props.img}
        />
        </View>
        <Text style={{textAlign:'center', width:80}}>{props.texto}</Text>
    </TouchableOpacity>
    );
}




import React from 'react';
import { TouchableOpacity, View, Image, Text} from 'react-native';
import { styles } from '../css/listStyle';
import { router } from 'expo-router';

export default function ListItem ({data, src}){
  return (
    <TouchableOpacity style={styles.item} onPress={()=>router.navigate(src)}>
      <Image source={{ uri: data.imagem }} style={styles.itemPhoto} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.nome}</Text>
        <Text style={styles.itemP2}>{data.email}</Text>
      </View>
    </TouchableOpacity>
  );
};


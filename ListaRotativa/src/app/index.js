import React, { useState } from 'react';
import { SafeAreaView, View,Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from '../components/ListItem';
import lista from '../../assets/bd';
import { styles } from "../css/style";
import pesquisa from '../fuctions/pesquisa';
import ordenar from '../fuctions/ordenar';

export default function App() {
  const [pesquisaTexto, setpesquisaTexto] = useState('');
  const [list, setList] = useState(lista);
// chama a função de pesquisa
  pesquisa(pesquisaTexto, lista, setList);

// chama a função para ordem alfabetica
  const ordenarLocal = () => {
    ordenar(lista, setList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>CONTATOS</Text>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um personagem"
          placeholderTextColor="#888"
          value={pesquisaTexto}
          onChangeText={(t) => setpesquisaTexto(t)}
        />
        
        <TouchableOpacity onPress={ordenarLocal} style={styles.orderButton}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        style={styles.list}
        // horizontal
        renderItem={({ item }) => <ListItem data={item}  src='sobre'/>}
        keyExtractor={(item) => item.id}
        
      />
    </SafeAreaView>
  );
}
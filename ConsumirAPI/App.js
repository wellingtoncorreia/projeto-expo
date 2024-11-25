import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, ActivityIndicator, Image, SafeAreaView } from 'react-native'; // Adicionamos Image
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { styles } from './style';
import ListaItem from './components/ListaItem';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users');
    const usersData = response.data.data; // Os dados que queremos estão em response.data.data
    setUserData(usersData); // Armazenamos todos os dados de usuário no estado
    setLoading(false);
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    setLoading(false);
  }
};

export default function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CONTATOS</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> // Mostramos um indicador de loading enquanto carrega
      ) : (
        <FlatList
          data={userData}
          renderItem={({ item }) => ( <ListaItem itemA={ item.avatar } itemF={item.fast_name} itemL= {item.lest_name} itemE={item.email}/> )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <StatusBar style="inverted" />
    </SafeAreaView>

  );
}


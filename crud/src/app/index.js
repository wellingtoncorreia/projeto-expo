import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import Botao from './components/botao';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../css/style';
import ListaItem from './components/ListaItem';
import fetchData from '../services/fetchData';

export default function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const usersData = await fetchData();
        setUserData(usersData);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <View><Text style={styles.title}>CONTATOS</Text></View>
        <Botao btn="+" cor='#1577F2' src='screens/FormUser' cortexto='#fff' tmH='5%' tmV='2%' />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={userData}
          renderItem={({ item }) => (
            <ListaItem
            itemF={item.nome}
            itemL={item.sobrenome}
            itemE={item.email}
            itemA={item.urlimage}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}

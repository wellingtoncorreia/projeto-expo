import React, { useState } from 'react';
import { View, Text, Alert, Button } from 'react-native';
import axios from 'axios';
import InputTexto from '../components/inputTexto';
import { styles } from '../../css/formStyle';
import { router } from 'expo-router';

export default function FormUsers() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [urlimage, setUrlimage] = useState('');

    const handleSubmit = () => {
        // Criar o payload para enviar ao servidor
        const payload = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            urlimage: urlimage
        };

        // Enviar a requisição POST
        axios.post('http://192.168.2.122:8080/contato', payload)
            .then(response => {
                Alert.alert('Sucesso', 'Usuário cadastrado com sucesso');
                router.navigate('');
            })
            .catch(error => {
                Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário');
                console.error(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar</Text>
            <InputTexto label="Nome" dica="Digite seu nome" onChangeText={setNome} value={nome} />
            <InputTexto label="Sobrenome" dica="Digite seu Sobrenome" onChangeText={setSobrenome} value={sobrenome} />
            <InputTexto label="E-mail" dica="Digite seu E-mail" onChangeText={setEmail} value={email} />
            <InputTexto label="URL" dica="Digite seu URL" onChangeText={setUrlimage} value={urlimage} />

            <Button title='Cadastrar' onPress={handleSubmit} />
        </View>
    );
}
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import axios from 'axios';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { styles } from '../../css/formStyle';

export default function FormUsers() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = () => {
        // Criar o payload para enviar ao servidor
        const payload = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            url: url
        };

        // Enviar a requisição POST
        axios.post('https://sua-api-endpoint.com/users', payload)
            .then(response => {
                Alert.alert('Sucesso', 'Usuário cadastrado com sucesso');
                // Você pode adicionar mais lógica aqui, como redirecionar o usuário
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
            <InputTexto label="URL" dica="Digite seu URL" onChangeText={setUrl} value={url} />

            <Botao btn="Entrar" cor='#1577F2' cortexto='#fff' tmH='37%' tmV='1%' onPress={handleSubmit} />
        </View>
    );
}
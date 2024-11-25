import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
   // Define o estado inicial do contador como 0
   const [contador, setcontador] = useState(0);
   let cont = 0;

   // Função para incrementar o contador
   const somador = () => {
     setcontador(contador + 1); // Atualiza o estado do contador
   };
  // Função para incrementar o contador
   const somadorSestado = () => {
     cont = cont + 1; 
     console.log(cont)
   };

   useEffect(() => {
    console.log('O efeito foi acionado após a mudança em contador.');
  }, []);

   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ margin:30 }}>
       <Text>Contador com useState</Text>
       <Text style={{ margin:10 }}>Contador: {contador}</Text>
       <Button title="Incrementar" onPress={somador} />
      </View>
       
       <Text>Contador sem useState</Text>
       <Text style={{ margin:10 }}>Contador: {cont}</Text>
       <Button title="Incrementar" onPress={somadorSestado} />
     </View>
   );
}


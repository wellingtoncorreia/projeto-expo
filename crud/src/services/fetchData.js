import axios from 'axios';

export default async function fetchData() {
  try {
    const response = await axios.get('http://10.121.138.60:8080/contato');
    const usersData = response.data.data;
    return usersData;
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    throw error;
  }
}

import axios from 'axios';

async function PutVoo(url, headers, data) {
  try {
    const response = await axios.put(url, data, headers);
    return response.data;
  } catch (error) {
    throw new Error(`Erro na requisição PUT: ${error.message}`);
  }
}

export default PutVoo;

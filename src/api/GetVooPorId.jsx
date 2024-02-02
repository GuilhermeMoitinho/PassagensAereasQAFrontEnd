import axios from 'axios';

async function GetVooPorIdAPI(url, headers) {
  
  return await axios.get(url, headers);

}

export default GetVooPorIdAPI;

import axios from 'axios';

async function GetVoosAPI(url, headers) {
   return await axios.get(url, headers);
     
  }   


export default GetVoosAPI;
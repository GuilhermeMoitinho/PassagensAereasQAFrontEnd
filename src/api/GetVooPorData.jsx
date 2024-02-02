import axios from 'axios';

async function RequestVooPorData(url){
    return await axios.get(url);
}

export default RequestVooPorData;
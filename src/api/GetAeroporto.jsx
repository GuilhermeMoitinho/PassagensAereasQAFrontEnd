import axios from 'axios';

async function RequestAeroportos(url){
    return await axios.get(url);
}

export default RequestAeroportos;
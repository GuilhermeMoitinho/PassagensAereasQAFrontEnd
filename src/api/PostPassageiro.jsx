// PostCadastroPassageiro.js
import axios from 'axios';

const PostCadastroPassageiro = async (url, body) => {

    return await axios.post(url, body);

};

export default PostCadastroPassageiro;

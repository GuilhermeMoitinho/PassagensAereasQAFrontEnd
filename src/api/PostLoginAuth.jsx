import axios from "axios";

function PostAuth(url, body){
    return axios.post(url, body)
}

export default PostAuth
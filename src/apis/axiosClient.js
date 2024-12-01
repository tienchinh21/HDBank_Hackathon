import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://042ci14zaj.execute-api.us-east-1.amazonaws.com',
    timeout: 10000,
    headers: {
        "Content-Type": 'application/json'
    }
});

export default axiosClient;
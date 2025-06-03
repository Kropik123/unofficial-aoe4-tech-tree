import axios from 'axios';

const aoe4WorldDataClient = axios.create({
    baseURL: 'https://data.aoe4world.com',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

export default aoe4WorldDataClient;
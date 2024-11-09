import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://boutique-hotel.helmuth-lammer.at/api/v1',
    headers: {
        'Content-Type': 'Application/json',
        'Accept': 'Application/json', // Setzt den Accept-Header
    },
});

export default apiClient;

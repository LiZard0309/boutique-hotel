import apiClient from './axios';

export function login(username, password) {
    return apiClient.post('/login', { clientId: username, secret: password })
        .then((response) => {
            const token = response.data;
            localStorage.setItem('token', token);
            return token;
        })
        .catch((error) => {
            console.error("Login fehlgeschlagen:", error);
            throw error;
        });
}

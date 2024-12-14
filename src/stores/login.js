import {defineStore} from 'pinia';
import axios from 'axios';

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        user: null,
    }),
    actions: {
        async login(username, password) {
            return axios.post(apiUrl + 'login', {clientId: username, secret: password})
                .then((response) => {
                    this.token = response.data.token;
                    localStorage.setItem('token', response.data.token);
                    this.user = username;
                    return true;
                })
                .catch((error) => {
                    console.error("Login fehlgeschlagen:", error);
                    throw error;
                });
        },

        logout() {
            this.token = null;
            this.user = null;
            localStorage.removeItem('token');
        },

        initializeAuth() {
            const savedToken = localStorage.getItem('token');
            if (savedToken) {
                this.token = savedToken;
            }
        },
    },
});
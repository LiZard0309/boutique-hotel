import {defineStore} from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useUserStore = defineStore('user', {
    state: () => ({
        bookings: [],
        token: null,
        user: null,
        userData: [],
    }),
    actions: {
        async login(username, password) {
            return axios.post(apiUrl + 'login', {clientId: username, secret: password})
                .then((response) => {
                    this.token = response.data;
                    localStorage.setItem('token', response.data);
                    localStorage.setItem('user', username);
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
            this.bookings = [];
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },

        initializeAuth() {
            const savedToken = localStorage.getItem('token');
            const savedUser = localStorage.getItem('user');
            if (savedToken) {
                this.token = savedToken;
                this.user = savedUser;
            }
        },

        async postUserData(registerData) {
            await axios.post(`${apiUrl}register`, registerData, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((response) => {
                    this.token = response.data;
                    localStorage.setItem('token', response.data);
                })
                .catch((error) => {
                    console.log("Error registering user:", error);
                })
        },
        async fetchBookingHistory() {
            try {
                const response = await axios.get(`${apiUrl}user/bookings`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                })
                this.bookings = response.data;
            } catch (error) {
                console.error("Error fetching booking history:", error);
            }
        },

        async fetchUserData() {
            await axios.get(`${apiUrl}user`, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })
                .then((response) => {
                    this.userData = response.data;
                })
                .catch((error) => {
                    console.log("Error fetching userdata:", error);
                    this.userData = null;
                })
        }
    },
});

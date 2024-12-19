import {defineStore} from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useUserStore = defineStore('user', {
    state: () => ({
        registerToken: "",
    }),

    actions: {
        async postUserData(registerData) {
            await axios.post(`${apiUrl}register`, registerData, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((response) => {
                    console.log(response);
                    this.registerToken = response.data;
                })
                .catch((error) => {
                    console.log("Error registering user:", error);
                })


        }
    }
})
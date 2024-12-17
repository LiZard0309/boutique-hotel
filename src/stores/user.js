import {defineStore} from 'pinia'
import axios from 'axios'

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/"

export const useUserStore = defineStore('user', {
    state: () => ({
        bookings: [],
        token: "",
    }),

    actions: {
        async fetchBookingHistory(token) {
            try {
                const response = await axios.get('${apiUrl}/user/bookings', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                this.bookings = response.data;
                console.log(this.bookings);
            } catch (error) {
                console.error("Error fetching booking history:", error);
            }
        }
    }
})
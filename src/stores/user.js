import {defineStore} from 'pinia'
import axios from 'axios'

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/"

export const useUserStore = defineStore('user', {
    state: () => ({
        bookings: [],
        token: null,
    }),

    actions: {
        async fetchBookingHistory() {
            try {
                console.log(this.token);
                console.log(`URL: ${apiUrl}/user/bookings`);
                const response = await axios.get(`${apiUrl}user/bookings`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
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
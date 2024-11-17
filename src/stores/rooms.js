import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

let requestUrl;
export const useRoomsStore = defineStore('rooms', {
    state: () => ({
        dateRange: {
            startDate: null,
            endDate: null
        },
        bookingData:  {
            firstname: '',
            lastname: '',
            birthdate: null,
            email: '',
        },
        apiData: null,
    }),

    actions: {
        async fetchRoomInfo() {
            try {
                const response = await axios.get(`${apiUrl}rooms`);
                console.log("Fetched Room Info:", response.data);
                this.rooms = response.data;
            } catch (error) {
                console.log("Error fetching room info:", error);
            }
        },

        async fetchRoomAvailability(roomId) {
            try{
            const response = await axios.get(`${apiUrl}room/${roomId}/from/${this.dateRange.startDate}/to/${this.dateRange.endDate}`)
                .then(response => {
                    console.log("response:", response)
                    console.log("Room ID:", roomId)
                    console.log("response.data:", response.data.available)
                    this.apiData = response.data.available
                    console.log("apiData after Axios call", this.apiData)
                })
            }catch (error){
                console.error("Error fetching data:", error);
            }
        },
        postBookingData(roomNumber, bookingPayload) {
            return axios.post(
                    `${apiUrl}room/${roomNumber}/from/${this.getDateRange().startDate}/to/${this.getDateRange().endDate}`,
                    bookingPayload,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`, // Token wird aus dem lokalen Speicher abgerufen
                        },
                    }
                )
                .then((response) => {
                    console.log(response);
                    return response;
                })
                .catch((error) => {
                    console.error("Fehler bei der Buchung:", error);
                    return false;
                });
        },
        setDateRange(startDate, endDate) {
            this.dateRange.startDate = startDate;
            this.dateRange.endDate = endDate;
        },
        getDateRange() {
            return this.dateRange;
        },
        setBookingData(bookingData){
            this.bookingData = bookingData;
        }
    }
})

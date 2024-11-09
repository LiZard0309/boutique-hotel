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
        apiData: null,
    }),

    actions: {

        async fetchRoomAvailability(roomId) {
            try{
            const response = await axios.get(`${apiUrl}room/${this.roomId}/from/${this.dateRange.startDate}/to/${this.dateRange.endDate}`)
                .then(response => {
                    console.log("response:", response)
                    console.log("response.data:", response.data.available)
                    this.apiData = response.data.available
                    console.log("apiData after Axios call", this.apiData)
                })
            }catch (error){
                console.error("Error fetching data:", error);
            }
        },
        setDateRange(startDate, endDate) {
            this.dateRange.startDate = startDate;
            this.dateRange.endDate = endDate;
        },
        setRoomId(id){
            this.roomId = id;
        }
    }
})

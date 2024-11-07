import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'

//const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/room/";

let requestUrl;
export const useRoomsStore = defineStore('rooms', {
    state: () => ({
        dateRange: {
            startDate: null,
            endDate: null
        },
        roomId: null,
        apiData: null,
    }),
    getter: {
        roomAvailability() {
            return this.apiData;
        }
    },
    actions: {

        fetchApiData() {
            axios.get(`https://boutique-hotel.helmuth-lammer.at/api/v1/room/${this.roomId}/from/${this.dateRange.startDate}/to/${this.dateRange.endDate}`)
                .then(response => {
                    this.apiData = response.data
                })

            /*try {
                if (this.dateRange.startDate && this.dateRange.endDate) {
                    const response = axios.get(`https://boutique-hotel.helmuth-lammer.at/api/v1/room/${this.roomId}/from/${this.dateRange.startDate}/to/${this.dateRange.endDate}`)
                        .then(response => {this.apiData = response.data})
                } else {
                    console.warn('Date range is not set');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }*/
        },
        setDateRange(startDate, endDate) {
            this.dateRange.startDate = startDate;
            this.dateRange.endDate = endDate;
            this.fetchApiData(); // Automatically fetch data when date range is updated
        }
    }
})

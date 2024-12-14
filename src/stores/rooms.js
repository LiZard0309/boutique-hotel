import {defineStore} from 'pinia'
import axios from 'axios'

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useRoomsStore = defineStore('rooms', {
    state: () => ({
        dateRange: {
            startDate: null,
            endDate: null
        },
        bookingData:  {
            bookingId: null,
            roomID: null,
            roomNumber: null,
            room: [],
            firstname: '',
            lastname: '',
            birthdate: null,
            email: '',
        },
        rooms: [],

        apiData: null,
    }),

    actions: {
        async fetchRoomInfo() {
            try {
                const response = await axios.get(`${apiUrl}rooms`);
                this.rooms = response.data;
            } catch (error) {
                console.log("Error fetching room info:", error);
            }
        },

        async fetchRoomAvailability(roomId) {
            try{
            const response = await axios.get(`${apiUrl}room/${roomId}/from/${this.dateRange.startDate}/to/${this.dateRange.endDate}`)
                .then(response => {
                    this.apiData = response.data.available
                })
            }catch (error){
                console.error("Error fetching data:", error);
            }
        },
        postBookingData(roomId, bookingPayload) {
            return axios.post(
                    `${apiUrl}room/${roomId}/from/${this.getDateRange().startDate}/to/${this.getDateRange().endDate}`,
                    bookingPayload,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`, // Token wird aus dem lokalen Speicher abgerufen
                        },
                    }
                )
                .then((response) => {
                    if (response.data && response.data.id) {
                        // Speichert die Buchungs-ID
                        this.setBookingId(response.data.id);
                    } else {
                        console.error("Keine Buchungs-ID in der Antwort gefunden");
                    }
                    return response;
                })
                .catch((error) => {
                    console.error("Fehler bei der Buchung:", error);
                    return false;
                });
        },
        setBookingRoom(roomId) {
            this.bookingData.room = this.rooms[roomId - 1];
        },
        setBookingId(bookingId) {
            this.bookingData.bookingId = bookingId;
        },
        setRoomNumber(id){

            this.bookingData.roomNumber = this.rooms[id - 1].roomsNumber;
        },
        setSelectedRoomID(roomId) {
            this.bookingData.roomID = roomId;
            this.setRoomNumber(roomId);
            this.setBookingRoom(roomId);
        },
        setDateRange(startDate, endDate) {
            this.dateRange.startDate = startDate;
            this.dateRange.endDate = endDate;
        },
        getDateRange() {
            return this.dateRange;
        },
        setBookingData(bookingData){
            this.bookingData.firstname = bookingData.firstname;
            this.bookingData.lastname = bookingData.lastname;
            this.bookingData.birthdate = bookingData.birthdate;
            this.bookingData.email = bookingData.email;
        }
    }
})

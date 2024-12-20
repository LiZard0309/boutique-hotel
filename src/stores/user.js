import {defineStore} from 'pinia'
import axios from 'axios'

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/"

export const useUserStore = defineStore('user', {
    state: () => ({
        bookings: [{
            "booking": {
                "id": "67596925d0f48",
                "startDate": "2025-02-09",
                "endDate": "2025-02-17"
            },
            "room": {
                "id": 3,
                "roomsNumber": "103",
                "roomsName": "Default Single Bedroom",
                "beds": 1,
                "pricePerNight": 120,
                "extras": [
                    {
                        "bathroom": 1
                    },
                    {
                        "minibar": 1
                    },
                    {
                        "television": 1
                    },
                    {
                        "livingroom": 0
                    },
                    {
                        "aircondition": 1
                    },
                    {
                        "wifi": 1
                    },
                    {
                        "breakfast": 1
                    },
                    {
                        "handicapped accessible": 1
                    },
                    {
                        "bathroom": 1
                    },
                    {
                        "minibar": 1
                    },
                    {
                        "television": 1
                    },
                    {
                        "livingroom": 0
                    },
                    {
                        "aircondition": 1
                    },
                    {
                        "wifi": 1
                    },
                    {
                        "breakfast": 1
                    },
                    {
                        "handicapped accessible": 1
                    },
                    {
                        "bathroom": 1
                    },
                    {
                        "minibar": 1
                    },
                    {
                        "television": 1
                    },
                    {
                        "livingroom": 0
                    },
                    {
                        "aircondition": 1
                    },
                    {
                        "wifi": 1
                    },
                    {
                        "breakfast": 1
                    },
                    {
                        "handicapped accessible": 1
                    }
                ]
            }
        },
            {
                "booking": {
                    "id": "67596925d2976",
                    "startDate": "2025-02-05",
                    "endDate": "2025-02-13"
                },
                "room": {
                    "id": 10,
                    "roomsNumber": "303",
                    "roomsName": "Honeymoon Suite",
                    "beds": 2,
                    "pricePerNight": 320,
                    "extras": [
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        }
                    ]
                }
            },
            {
                "booking": {
                    "id": "67596925d44e9",
                    "startDate": "2025-02-01",
                    "endDate": "2025-02-12"
                },
                "room": {
                    "id": 10,
                    "roomsNumber": "303",
                    "roomsName": "Honeymoon Suite",
                    "beds": 2,
                    "pricePerNight": 320,
                    "extras": [
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        }
                    ]
                }
            },
            {
                "booking": {
                    "id": "67596925d66a4",
                    "startDate": "2025-03-06",
                    "endDate": "2025-03-14"
                },
                "room": {
                    "id": 10,
                    "roomsNumber": "303",
                    "roomsName": "Honeymoon Suite",
                    "beds": 2,
                    "pricePerNight": 320,
                    "extras": [
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        }
                    ]
                }
            },
            {
                "booking": {
                    "id": "67596925d8c05",
                    "startDate": "2024-02-18",
                    "endDate": "2024-02-20"
                },
                "room": {
                    "id": 5,
                    "roomsNumber": "201",
                    "roomsName": "Junior Suite",
                    "beds": 2,
                    "pricePerNight": 160,
                    "extras": [
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 0
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 0
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 0
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 0
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 0
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 0
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        }
                    ]
                }
            },
            {
                "booking": {
                    "id": "67596925d0f48",
                    "startDate": "2024-02-09",
                    "endDate": "2024-02-17"
                },
                "room": {
                    "id": 3,
                    "roomsNumber": "103",
                    "roomsName": "Default Single Bedroom",
                    "beds": 1,
                    "pricePerNight": 120,
                    "extras": [
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 0
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 0
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 0
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        }
                    ]
                }
            },
            {
                "booking": {
                    "id": "67596925d2976",
                    "startDate": "2024-02-05",
                    "endDate": "2024-02-13"
                },
                "room": {
                    "id": 10,
                    "roomsNumber": "303",
                    "roomsName": "Honeymoon Suite",
                    "beds": 2,
                    "pricePerNight": 320,
                    "extras": [
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        },
                        {
                            "bathroom": 1
                        },
                        {
                            "minibar": 1
                        },
                        {
                            "television": 1
                        },
                        {
                            "livingroom": 1
                        },
                        {
                            "aircondition": 1
                        },
                        {
                            "wifi": 1
                        },
                        {
                            "breakfast": 1
                        },
                        {
                            "handicapped accessible": 1
                        }
                    ]
                }
            },],
        token: "DnlYJwNAcbKDHKJiK7lFcAl42zgewdhvl8C68PcH", //hardcoded placeholder
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
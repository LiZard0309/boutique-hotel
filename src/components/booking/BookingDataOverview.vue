<script>
import {useRoomsStore} from "@/stores/rooms";


export default {
  name: "BookingDataOverview",

  data() {
    return {
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
      dateRange: {
        startDate: null,
        endDate: null
      },
    };
  },
  mounted() {
      const roomStore = useRoomsStore();
      this.bookingData = roomStore.bookingData
      this.dateRange = roomStore.dateRange

  }
}

</script>

<template>
  <div class="booking-confirmation">
    <div class="stay-details">
      <h3>Details zu Ihrem Aufenthalt:</h3>
      <p><strong>Buchungs-ID:</strong> {{ bookingData.bookingId || "unkown"  }}</p>
    </div>

    <div class="personal-details">
      <h3>Ihre Daten:</h3>
      <p><strong>Vorname:</strong> {{ bookingData.firstname }}</p>
      <p><strong>Nachname:</strong> {{ bookingData.lastname }}</p>
      <p><strong>Geburtstag:</strong> {{ bookingData.birthdate }}</p>
      <p><strong>E-Mail:</strong> {{ bookingData.email }}</p>
    </div>

    <div class="booking-period">
      <h3>Ihr Buchungszeitraum:</h3>
      <p><strong>{{ dateRange.startDate || "unkown" }}</strong> bis <strong>{{ dateRange.endDate || "unkown" }}</strong></p>
    </div>
  </div>
</template>

<style scoped>
.booking-confirmation {
  max-width: 900px;
  margin: 0;
  padding: 20px;
}
.booking-period {
  margin-top: 20px;
}

.personal-details {
  margin-top: 20px;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

h3 {
  margin-top: 20px;
  color: #555;
}

p {
  font-size: 1rem;
  color: #444;
  margin: 5px 0;
}

p strong {
  color: #222;
}
</style>
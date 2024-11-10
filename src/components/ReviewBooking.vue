<template>
  <div class="review-content">
    <p><strong>Zimmer: </strong>{{ bookingNumber}}</p>
    <p><strong>Zeitraum:</strong></p>
    <p><strong>Frühstück:</strong> {{ 'im Preis inbegriffen' }}</p>
    <br/>
    <p><strong>Vorname:</strong> {{ bookingData.firstname }}</p>
    <p><strong>Nachname:</strong> {{ bookingData.lastname }}</p>
    <p><strong>Geburtsdatum:</strong> {{ bookingData.birthdate }}</p>
    <p><strong>E-Mail:</strong> {{ bookingData.email }}</p>


    <div class="button-container mt-4">
      <b-button variant="secondary" class="mr-2" @click="$emit('edit')">Daten ändern</b-button>
      <b-button variant="primary" @click="$emit('confirm')">Buchung bestätigen</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewBooking",
  props: {
    bookingData: {
      type: Object,
      required: true,
    },
    bookingNumber: {
      type: Number,
      required: true,
    },
  },
};

</script>

<style scoped>
.review-content p {
  margin: 5px 0;
}

.button-container {
  display: flex;
  justify-content: flex-start;
}

.mr-2 {
  margin-right: 10px;
}
</style>

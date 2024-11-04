<template>
  <div class="review-content">
    <p><strong>Zimmer:</strong> {{ bookingData.roomName }}</p>
    <p><strong>Zeitraum:</strong> {{ bookingData.fromDate }} - {{ bookingData.toDate }}</p>
    <p><strong>Vorname:</strong> {{ bookingData.firstname }}</p>
    <p><strong>Nachname:</strong> {{ bookingData.lastname }}</p>
    <p><strong>Geburtsdatum:</strong> {{ bookingData.birthdate }}</p>
    <p><strong>E-Mail:</strong> {{ bookingData.email }}</p>
    <p><strong>Frühstück:</strong> {{ bookingData.breakfast === 'Ja' ? 'Inklusive' : 'Nicht inklusive' }}</p>
  </div>

  <!-- Buttons zum Schließen und Bestätigen der Buchung -->
  <div class="text-right">
    <b-button variant="secondary" @click="closeModal">Daten ändern</b-button>
    <b-button variant="primary" @click="confirmBooking">Buchung bestätigen</b-button>
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
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    confirmBooking() {
      this.$emit('confirm');
    },
  },
};
</script>

<style scoped>
.review-content p {
  margin: 5px 0;
}
</style>

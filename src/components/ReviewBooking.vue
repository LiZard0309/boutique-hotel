<template>
  <div class="review-content">
    <p><strong>Vorname:</strong> {{ bookingData.firstname }}</p>
    <p><strong>Nachname:</strong> {{ bookingData.lastname }}</p>
    <p><strong>Geburtsdatum:</strong> {{ bookingData.birthdate }}</p>
    <p><strong>E-Mail:</strong> {{ bookingData.email }}</p>
    <p><strong>Frühstück:</strong> {{ bookingData.breakfast === 'Ja' ? 'Inklusive' : 'Nicht inklusive' }}</p>

    <div class="text-right">
      <b-button variant="secondary" @click="$emit('close')">Daten ändern</b-button>
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
  },
};
</script>

<style scoped>
.review-content p {
  margin: 5px 0;
}
</style>

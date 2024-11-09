<template>
  <b-form @submit.prevent="submitBooking">
    <b-form-group label="Vorname" label-for="firstname">
      <b-form-input id="firstname" v-model="bookingData.firstname" required placeholder="Vorname eingeben" />
    </b-form-group>

    <b-form-group label="Nachname" label-for="lastname">
      <b-form-input id="lastname" v-model="bookingData.lastname" required placeholder="Nachname eingeben" />
    </b-form-group>

    <b-form-group label="Geburtsdatum" label-for="birthdate">
      <Datepicker id="birthdate" v-model="bookingData.birthdate" required placeholder="Geburtsdatum auswählen" />
    </b-form-group>

    <b-form-group label="E-Mail" label-for="email">
      <b-form-input id="email" type="email" v-model="bookingData.email" required placeholder="E-Mail eingeben" />
    </b-form-group>

    <b-form-group label="E-Mail bestätigen" label-for="confirmEmail">
      <b-form-input id="confirmEmail" type="email" v-model="confirmEmail" required placeholder="E-Mail erneut eingeben" />
    </b-form-group>

    <b-form-group label="Frühstück inkludiert?">
      <b-form-radio-group v-model="bookingData.breakfast" :options="['Ja', 'Nein']" />
    </b-form-group>

    <!-- Links ausgerichtete Buttons mit Abstand -->
    <div class="button-container mt-4">
      <b-button variant="secondary" class="mr-2" @click="$emit('cancel')">Abbrechen</b-button>
      <b-button variant="primary" type="submit">Buchung überprüfen</b-button>
    </div>
  </b-form>
</template>

<script>
import Datepicker from "vue3-datepicker";

export default {
  name: "BookingForm",
  components: {
    Datepicker,
  },
  data() {
    return {
      confirmEmail: '',
      bookingData: {
        firstname: '',
        lastname: '',
        birthdate: null,
        email: '',
        breakfast: 'Nein',
      },
    };
  },
  methods: {
    submitBooking() {
      if (this.bookingData.email !== this.confirmEmail) {
        alert('Die E-Mail-Adressen stimmen nicht überein.');
        return;
      }
      this.$emit('approve', this.bookingData); // Gibt die Buchungsdaten an BookingModal weiter
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: flex-start;
}

/* Rechter Abstand für den ersten Button */
.mr-2 {
  margin-right: 10px;
}
</style>

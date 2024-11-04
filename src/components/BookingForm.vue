<template>
    <b-form @submit.prevent="submitBooking">
      <b-form-group label="Vorname" label-for="firstname">
        <b-form-input id="firstname" v-model="bookingData.firstname" required placeholder="Vorname eingeben" />
      </b-form-group>

      <b-form-group label="Nachname" label-for="lastname">
        <b-form-input id="lastname" v-model="bookingData.lastname" required placeholder="Nachname eingeben" />
      </b-form-group>

      <b-form-group label="Geburtsdatum" label-for="birthdate">
        <b-form-datepicker id="birthdate" v-model="bookingData.birthdate" required placeholder="Geburtsdatum auswählen" />
      </b-form-group>

      <b-form-group label="E-Mail" label-for="email">
        <b-form-input
            id="email"
            type="email"
            v-model="bookingData.email"
            required
            placeholder="E-Mail eingeben"
        />
      </b-form-group>

      <b-form-group label="E-Mail bestätigen" label-for="confirmEmail">
        <b-form-input
            id="confirmEmail"
            type="email"
            v-model="confirmEmail"
            required
            placeholder="E-Mail erneut eingeben"
        />
      </b-form-group>

      <b-form-group label="Frühstück inkludiert?">
        <b-form-radio-group v-model="bookingData.breakfast" :options="['Ja', 'Nein']" />
      </b-form-group>

      <div class="text-right mt-4">
        <b-button variant="secondary" @click="closeModal">Abbrechen</b-button>
        <b-button variant="primary" type="submit">Buchung überprüfen</b-button>
      </div>
    </b-form>
</template>

<script>
export default {
  name: "BookingForm",
  data() {
    return {
      confirmEmail: '',
      bookingData: {
        firstname: '',
        lastname: '',
        birthdate: '',
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
      this.$emit('submit', this.bookingData);
      this.closeModal();
    },
    closeModal() {
      this.$emit('update:isVisible', false);
    },
  },
};
</script>

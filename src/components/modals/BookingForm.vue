<template>
  <b-modal v-model="isModalVisible" title="Zimmer buchen" @ok="submitBooking" ok-title="Buchung überprüfen" hide-footer>
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

      <!-- Button zum Überprüfen der Buchung -->
      <div class="text-right">
        <b-button variant="secondary" @click="closeModal">Abbrechen</b-button>
        <b-button variant="primary" type="submit">Buchung überprüfen</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  props: {
    isModalVisible: {
      type: Boolean,
      default: false,
    },
  },
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
      // Überprüfen, ob die E-Mails übereinstimmen
      if (this.bookingData.email !== this.confirmEmail) {
        alert('Die E-Mail-Adressen stimmen nicht überein.');
        return;
      }
      // Wenn die E-Mails übereinstimmen, werden die Buchungsdaten an den Parent übergeben
      this.$emit('submit', this.bookingData);
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import RegistrationModal from "../modals/RegistrationModal.vue";
import {useRoomsStore} from "../../stores/rooms";
import LoginForm from "./Login.vue";

export default {
  name: "BookingFormNotLoggedIn",
  components: {
    LoginForm,
    RegistrationModal,
    VueDatePicker
  },
  data() {
    return {
      confirmEmail: '',
      showLoginModal: false,
      bookingData: {
        firstname: '',
        lastname: '',
        birthdate: null,
        email: '',
      },
    };
  },
  methods: {
    submitBooking() {
      if (this.bookingData.email !== this.confirmEmail) {
        alert('Die E-Mail-Adressen stimmen nicht überein.');
        return;
      }
      this.bookingData.birthdate = this.format(this.bookingData.birthdate);
      useRoomsStore().setBookingData(this.bookingData);
      this.$emit('approve');
    },
    format(date) {
      if (!date) return null;
      return new Intl.DateTimeFormat('de-DE').format(date);
    },
    openLoginModal() {
      this.showLoginModal = true;
    },
    closeLoginModal() {
      this.showLoginModal = false;
    },
    handleCancelLogin() {
      this.closeLoginModal(); // Close the modal when the "Abbrechen" button is clicked
    },
  },
  computed: {
    maxDate() {
      const today = new Date();
      today.setFullYear(today.getFullYear() - 18);
      return today;
    },
  }
}
</script>

<template>
  <b-form @submit.prevent="submitBooking">
    <b-form-group label="Vorname" label-for="firstname">
      <b-form-input id="firstname" v-model="bookingData.firstname" required placeholder="Vorname eingeben"/>
    </b-form-group>

    <b-form-group label="Nachname" label-for="lastname">
      <b-form-input id="lastname" v-model="bookingData.lastname" required placeholder="Nachname eingeben"/>
    </b-form-group>

    <b-form-group label="Geburtsdatum" label-for="birthdate">
      <VueDatePicker
          id="birthdate"
          v-model="bookingData.birthdate"
          :max-date="maxDate"
          :start-date="maxDate"
          :enable-time-picker="false"
          required
          placeholder="Geburtsdatum auswählen"
      />
    </b-form-group>

    <b-form-group label="E-Mail" label-for="email">
      <b-form-input id="email" type="email" v-model="bookingData.email" required placeholder="E-Mail eingeben"/>
    </b-form-group>

    <b-form-group label="E-Mail bestätigen" label-for="confirmEmail">
      <b-form-input id="confirmEmail" type="email" v-model="confirmEmail" required
                    placeholder="E-Mail erneut eingeben"/>
    </b-form-group>

    <div class="registration-container">
      <p>Schon ein registrierter User?
        <b-button variant="outline-primary" @click="openLoginModal">Zum Login</b-button>
      </p>
    </div>

    <b-modal v-model="showLoginModal" title="Login" hide-footer>
      <login-form @finish="closeLoginModal" @cancel="handleCancelLogin"/>
    </b-modal>
    <div class="button-container mt-4">
      <b-button variant="secondary" class="mr-2" @click="$emit('cancel')">Abbrechen</b-button>
      <b-button variant="primary" type="submit">Buchung überprüfen</b-button>
    </div>
  </b-form>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
}

.mr-2 {
  margin-right: 10px;
}
</style>
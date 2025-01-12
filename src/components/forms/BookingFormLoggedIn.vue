<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import RegistrationModal from "../modals/RegistrationModal.vue";
import {useUserStore} from "../../stores/user";
import {useRoomsStore} from "../../stores/rooms";

export default {
  name: "BookingFormLoggedIn",
  components: {RegistrationModal, VueDatePicker},
  data() {
    return {
      isLoading: true,
      confirmEmail: '',
      bookingData: {
        firstname: '',
        lastname: '',
        birthdate: '',
        email: '',
      },
    };
  },
  computed: {
    registeredUserData() {
      return useUserStore().userData;
    },
    maxDate() {
      const today = new Date();
      today.setFullYear(today.getFullYear() - 18);
      return today;
    },
  },
  watch: {
    registeredUserData: {
      immediate: true,
      handler(newData) {
        if (newData) {
          this.bookingData = {
            firstname: newData.firstname || "",
            lastname: newData.lastname || "",
            birthdate: newData.birthdate ? new Date(newData.birthdate) : "",
            email: newData.email || "",
          };
        }
      },
    },
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
  },
  async mounted() {
    try {
      this.isLoading = true;
      await useUserStore().fetchUserData();
    } catch (error) {
      console.error("Error fetching user info:", error);
    } finally {
      this.isLoading = false;
    }
  },
}
</script>

<template>
  <div v-if="isLoading">
    <p>Lade Userdaten...</p>
  </div>
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
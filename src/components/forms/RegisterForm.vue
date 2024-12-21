<script>
import {useUserStore} from "../../stores/user";
import {useModalVisibilityStore} from "../../stores/modalVisibility";

export default {
  name: "RegisterForm",
  data() {
    return {
      confirmPassword: "",
      userToken: "",
      userRegisterData: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
      }
    }
  },
  computed: {
    modalVisibilityStore() {
      return useModalVisibilityStore()
    },
  },
  methods: {
    async submitRegisterForm() {
      this.userRegisterData.username = this.userRegisterData.email;

      const validInputData = this.validateInputData(this.userRegisterData, this.confirmPassword);

      if (validInputData) {
        await useUserStore().postUserData(this.userRegisterData);
        this.userToken = useUserStore().registerToken;
        this.closeModal();
        this.showRegisterSuccessMessage();
      } else {
        console.error("Fehler bei der Dateneingabe")
      }
    },
    validateInputData(userRegisterData, confirmPassword) {
      if (userRegisterData.password !== confirmPassword) {
        alert("Die Passwörter stimmen nicht überein.");
        return false;
      }
      if (!userRegisterData.firstname || !userRegisterData.lastname || !userRegisterData.email || !userRegisterData.password) {
        alert("Alle Felder müssen ausgefüllt sein.");
        return false;
      }
      return true;
    },
    showRegisterSuccessMessage(){
      alert(`Herzlich willkommen ${this.userRegisterData.firstname} ${this.userRegisterData.lastname}! Sie haben sich erfolgreich registriert.`)
    },
    closeModal() {
      this.modalVisibilityStore.closeRegistrationModal();
    }

  }
}
</script>

<template>

  <b-form @submit.prevent="submitRegisterForm">
    <b-form-group label="Vorname" label-for="firstNameForRegistration">
      <b-form-input id="firstNameForRegistration" type="text" v-model="userRegisterData.firstname" required
                    placeholder="Vorname eingeben"/>
    </b-form-group>

    <b-form-group label="Nachname" label-for="lastNameForRegistration">
      <b-form-input id="lastNameForRegistration" type="text" v-model="userRegisterData.lastname" required
                    placeholder="Nachname eingeben"/>
    </b-form-group>

    <b-form-group label="E-Mail-Adresse" label-for="emailForRegistration">
      <b-form-input id="emailForRegistration" type="email" v-model="userRegisterData.email" required placeholder="E-Mail eingeben"/>
    </b-form-group>

    <b-form-group label="Passwort" label-for="passwordForRegistration">
      <b-form-input id="passwordForRegistration" type="password" v-model="userRegisterData.password" required
                    placeholder="Passwort eingeben"/>
    </b-form-group>

    <b-form-group label="Passwort bestätigen" label-for="confirmPasswordForRegistration">
      <b-form-input id="confirmPasswordForRegistration" type="password" v-model="confirmPassword" required
                    placeholder="Passwort erneut eingeben"/>
    </b-form-group>

    <div class="button-container mt-4">
      <b-button variant="secondary" class="mr-2" @click="closeModal">Abbrechen</b-button>
      <b-button variant="primary" type="submit">Registrieren</b-button>
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
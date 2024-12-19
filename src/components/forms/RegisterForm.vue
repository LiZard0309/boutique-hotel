<script>
import {useUserStore} from "../../stores/user";

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
  methods: {
    async submitRegisterForm() {
      this.userRegisterData.username = this.userRegisterData.email;

      const validInputData = this.validateInputData(this.userRegisterData, this.confirmPassword);

      if (validInputData) {
        await useUserStore().postUserData(this.userRegisterData);
        this.userToken = useUserStore().registerToken;
        console.log("Token", this.userToken)
        console.log("Userdata:", this.userRegisterData);
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
    }

  }
}
</script>

<template>

  <b-form @submit.prevent="submitRegisterForm">
    <b-form-group label="Vorname" label-for="firstName">
      <b-form-input id="firstName" type="text" v-model="userRegisterData.firstname" required
                    placeholder="Vorname eingeben"/>
    </b-form-group>

    <b-form-group label="Nachname" label-for="lastName">
      <b-form-input id="lastName" type="text" v-model="userRegisterData.lastname" required
                    placeholder="Nachname eingeben"/>
    </b-form-group>

    <b-form-group label="E-Mail-Adresse" label-for="email">
      <b-form-input id="email" type="email" v-model="userRegisterData.email" required placeholder="E-Mail eingeben"/>
    </b-form-group>

    <b-form-group label="Passwort" label-for="password">
      <b-form-input id="password" type="password" v-model="userRegisterData.password" required
                    placeholder="Passwort eingeben"/>
    </b-form-group>

    <b-form-group label="Passwort bestätigen" label-for="confirmPassword">
      <b-form-input id="confirmPassword" type="password" v-model="confirmPassword" required
                    placeholder="Passwort erneut eingeben"/>
    </b-form-group>

    <div class="button-container mt-4">
      <b-button variant="secondary" class="mr-2" @click="$emit('cancel')">Abbrechen</b-button>
      <b-button variant="primary" type="submit">Registrieren</b-button>
    </div>
  </b-form>

</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: flex-start;
}

.mr-2 {
  margin-right: 10px;
}
</style>
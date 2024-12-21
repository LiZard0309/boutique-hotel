<script>
import {useUserStore} from "@/stores/user";
import RegistrationModal from "../modals/RegistrationModal.vue";
import {useModalVisibilityStore} from "../../stores/modalVisibility";

export default {
  name: "LoginForm",
  components: {RegistrationModal},
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      useUserStore().login(this.email, this.password)
          .then(() => {
            alert("Login erfolgreich!");
            this.$emit('finish');
          })
          .catch(() => {
            alert("Login fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldedaten.");
            this.$emit('finish');
          });
    },
    openRegistrationModal(){
      useModalVisibilityStore().openRegistrationModal()
    },
  },
};
</script>

<template>
  <b-form @submit.prevent="handleLogin">
    <b-form-group label="E-Mail" label-for="email">
      <b-form-input id="email" type="email" v-model="email" required placeholder="E-Mail eingeben" />
    </b-form-group>
    <b-form-group label="Passwort" label-for="password">
      <b-form-input id="password" type="password" v-model="password" required placeholder="Passwort eingeben" />
    </b-form-group>
    <p>Noch kein registrierter User? <b-button variant="outline-primary" @click="openRegistrationModal">Hier registrieren!</b-button> </p>

    <RegistrationModal/>
    <div class="button-container mt-4">
      <b-button variant="secondary" class="mr-2" @click="$emit('cancel')">Abbrechen</b-button>
      <b-button variant="primary" type="submit" class="ml-2">Login</b-button>
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

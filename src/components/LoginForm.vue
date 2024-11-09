<template>
  <b-form @submit.prevent="handleLogin">
    <b-form-group label="E-Mail" label-for="email">
      <b-form-input id="email" type="email" v-model="email" required placeholder="E-Mail eingeben" />
    </b-form-group>
    <b-form-group label="Passwort" label-for="password">
      <b-form-input id="password" type="password" v-model="password" required placeholder="Passwort eingeben" />
    </b-form-group>
    <div class="button-container mt-4">
      <b-button variant="secondary" class="mr-2" @click="$emit('cancel')">Abbrechen</b-button>
      <b-button variant="primary" type="submit" class="ml-2">Login</b-button>
    </div>
  </b-form>
</template>

<script>
import { login } from "@/api/auth";

export default {
  name: "LoginForm",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      login(this.email, this.password)
          .then(() => {
            alert("Login erfolgreich!");
            this.$emit("login");
          })
          .catch(() => {
            alert("Login fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldedaten.");
          });
    },
  },
};
</script>
<style scoped>
.button-container {
  display: flex;
  justify-content: flex-start;
}

.mr-2 {
  margin-right: 10px;
}
</style>

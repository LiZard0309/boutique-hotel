<template>
  <b-form @submit.prevent="submitLogin">
    <b-form-group label="E-Mail" label-for="loginEmail">
      <b-form-input id="loginEmail" type="email" v-model="loginData.email" required placeholder="E-Mail eingeben" />
    </b-form-group>
    <b-form-group label="Passwort" label-for="loginPassword">
      <b-form-input id="loginPassword" type="password" v-model="loginData.password" required placeholder="Passwort eingeben" />
    </b-form-group>

    <!-- Links ausgerichtete Buttons mit Abstand -->
    <div class="button-container mt-4">
      <b-button variant="secondary" class="mr-2" @click="$emit('cancel')">Abbrechen</b-button>
      <b-button variant="primary" type="submit">Login</b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      loginData: { email: '', password: '' },
    };
  },
  methods: {
    submitLogin() {
      this.$emit('login', this.loginData);
    },
  },
};
</script>

<style scoped>
/* Flexbox zur Kontrolle der Button-Position */
.button-container {
  display: flex;
  justify-content: flex-start;
}

/* Rechter Abstand für den ersten Button */
.mr-2 {
  margin-right: 10px;
}
</style>

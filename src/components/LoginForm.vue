<template>
  <b-form @submit.prevent="submitLogin">
    <b-form-group label="E-Mail" label-for="loginEmail">
      <b-form-input id="loginEmail" type="email" v-model="loginData.email" required placeholder="E-Mail eingeben" />
    </b-form-group>
    <b-form-group label="Passwort" label-for="loginPassword">
      <b-form-input id="loginPassword" type="password" v-model="loginData.password" required placeholder="Passwort eingeben" />
    </b-form-group>
    <b-button variant="primary" type="submit">Login</b-button>
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

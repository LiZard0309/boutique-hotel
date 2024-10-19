<script>

export default {
  name: "Contact",

  data(){
    return {
      phone: "05/12345678",
      email: "office@alpenblick-resort.at"
    }
  }
}
</script>

<template>
  <p class="subtitle">Kontaktdaten:</p>
  <p> Telefon: {{phone}}</p>
  <p> E-Mail: <span class="email">{{email}}</span> </p>
  <p> Fax: {{phone}}-02</p>

</template>

<style scoped>

.subtitle {
  font-weight: bold;
}

.email {
  color: blue;
  text-decoration: underline;
}
</style>
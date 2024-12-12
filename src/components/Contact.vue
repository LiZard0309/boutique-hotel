<script>

export default {
  name: "Contact",

  data() {
    return {
      phone: "+43 (0) 123 456789",
      email: "info@alpenblick.at"
    }
  }
}
</script>

<template>
  <p class="subtitle">Kontaktdaten:</p>
  <p> Telefon: {{ phone }}<br/>
    E-Mail: <span class="email">{{ email }}</span> <br/>
    Fax: {{ phone }}-02</p>

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
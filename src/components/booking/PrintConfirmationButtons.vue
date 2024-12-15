<script>
export default {
  name: "PrintConfirmationButtons",
  methods: {
    printPage() {
      window.print();
    },
    register() {
      console.log("Registrierung wird später implementiert.");
    },
  },
};
</script>

<template>
  <div class="help-section">
    <h1>Noch Fragen?</h1>
    <p>Kontaktieren Sie uns: <span class="email">email@hotel.at</span></p>

    <div class="button-group">
      <b-button variant="primary" @click="printPage">Buchungsbestätigung drucken</b-button>
      <b-button @click="register">Registrieren</b-button>
    </div>
  </div>
</template>

<style scoped>
.help-section {
  max-width: 300px;
}

.email {
  font-weight: bold;
  color: #0056b3;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

b-button {
  width: 200px;
}
</style>

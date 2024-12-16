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

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

b-button {
  width: 200px;
}
</style>

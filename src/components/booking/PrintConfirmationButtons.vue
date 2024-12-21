<script>
import RegistrationModal from "../modals/RegistrationModal.vue";
import {useModalVisibilityStore} from "../../stores/modalVisibility";

export default {
  name: "PrintConfirmationButtons",
  components: {RegistrationModal},
  methods: {
    printPage() {
      window.print();
    },
    openRegistrationModal() {
      useModalVisibilityStore().openRegistrationModal();
    },
  },
};
</script>

<template>
  <div class="help-section">
    <div class="button-group">
      <b-button variant="primary" @click="printPage">Buchungsbestätigung drucken</b-button>
      <b-button @click="openRegistrationModal">Registrieren</b-button>

      <RegistrationModal/>
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

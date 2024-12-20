<script>
import {useModalVisibilityStore} from "../../stores/modalVisibility";
import RegisterForm from "../forms/RegisterForm.vue";

export default {
  name: "RegistrationModal",
  components: {RegisterForm},
  computed: {
    isModalVisible() {
      return useModalVisibilityStore().isRegistrationModalVisible
    },
  },
  methods: {
    closeModal() {
      useModalVisibilityStore().closeRegistrationModal()
    }
  }
}
</script>

<template>
  <b-modal
      v-model="isModalVisible"
      title="Registrieren"
      @hidden="closeModal"
      hide-footer>
    <RegisterForm/>
  </b-modal>

</template>

<style scoped>

</style>
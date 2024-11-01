<script>
export default {
  name: 'BaseModal',
  props: {
    title: {
      type: String,
      default: 'Form Modal',
    },
    buttonText: {
      type: String,
      default: 'Submit',
    },
    actionHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    handleButtonClick() {
      // Emit an event to inform parent that the button was clicked
      this.actionHandler();
      this.showModal = false; // Close the modal after the action (optional)
    },
    onModalShown() {
      // Reset or focus logic when the modal is opened (if needed)
    },
  },
};
</script>

<template>
  <b-modal v-model="showModal" :title="title">
    <!-- Slot to accept any content -->
    <slot></slot>
    <!-- Button to trigger form submission or AJAX call -->
    <b-button variant="success" @click="handleButtonClick">{{ buttonText }}</b-button>
  </b-modal>
</template>

<style scoped>

</style>
<script>
export default {
  name: 'ModalWithSendButton',
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
  methods: {
    handleButtonClick() {
      // Emit an event to inform parent that the button was clicked
      this.actionHandler();
      this.$emit('update:modelValue', false); // Emit to close the modal
    },
  },
};
</script>

<template>
  <b-modal id="modalWithSendButton" :title="title" @hide="handleButtonClick">
    <!-- Slot to accept any content -->
    <slot></slot>
    <!-- Button to trigger form submission or AJAX call -->
    <template #modal-footer>
      <b-button variant="success" @click="handleButtonClick">{{ buttonText }}</b-button>
    </template>
  </b-modal>
</template>

<style scoped>

</style>
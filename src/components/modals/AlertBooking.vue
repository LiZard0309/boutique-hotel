<script>
import {BAlert} from "bootstrap-vue-3";

export default {
  name: "AlertBooking",
  components: {
    BAlert
  },
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    modelValue(newVal) {
      console.log('Alert visibility updated:', newVal);
    }
  },

  methods: {
    closeAlert() {
      this.$emit("update:modelValue", false);
      this.$emit("close");
    }
  }
}
</script>

<template>
  <b-alert
      :show="modelValue"
      :variant="type"
      dismissible
      @dismissed="closeAlert"
  >
    {{ message }}
  </b-alert>

</template>

<style scoped>

</style>
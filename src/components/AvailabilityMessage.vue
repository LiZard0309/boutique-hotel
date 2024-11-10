<script>
export default {
  name: "AvailabilityMessage",
  props: {
    availabilityMessage: String,
    required: true
  }
}
</script>

<template>
  <span class="availability-message">
    tesets
    {{ availabilityMessage }} </span>
</template>

<style scoped>
.availability-message {
  margin: 0.8rem;
  font-size: 14px;
  font-style: italic;
  text-decoration-color: #2c3e50;
}

</style>
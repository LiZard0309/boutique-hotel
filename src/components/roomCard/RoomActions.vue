<script>
export default {
  props: {
    availabilityChecked: Boolean,
    isAvailable: Boolean
  },
  methods: {
    openAvailabilityModal() {
      this.$emit("open-availability-modal");
    },
    reserveRoom() {
      this.$emit("reserve-room");
    }
  }
};
</script>

<template>
  <!-- Button logik -->
  <div class="right-content">
    <b-button
        v-if="!availabilityChecked"
        @click="openAvailabilityModal"
        variant="primary"
    >Verfügbarkeit prüfen</b-button>

    <b-button
        v-else-if="availabilityChecked && isAvailable"
        @click="reserveRoom"
        variant="primary"
    >Reservieren</b-button>

    <b-button
        v-else-if="availabilityChecked && !isAvailable"
        @click="openAvailabilityModal"
        variant="primary"
    >Anderes Datum Prüfen</b-button>
  </div>
</template>

<style scoped>
.right-content {
  margin-right: 15px;
}
</style>

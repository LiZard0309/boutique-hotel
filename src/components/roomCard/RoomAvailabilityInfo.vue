<script>
export default {
  props: {
    isAvailable: Boolean,
    availabilityChecked: false,
    selectedDateRange: String
  },
  methods: {
    openAvailabilityModal() {
      this.$emit("open-availability-modal");
    },
  }
};
</script>

<template>
  <!-- Datum logik -->
  <div v-if="availabilityChecked" class="availability-section">
    <div @click.prevent="openAvailabilityModal" class="left-content">
      <i-QuillCalendar width="38" height="38" color="#2e2e2e"/>
      <div class="selected-date hover-underline-animation left">
        {{ selectedDateRange }}
      </div>
    </div>
    <div class="right-content">
      <template v-if="isAvailable">
        <i-LaCheckCircle width="35" height="35" color="green"/>
        <span class="availability-text available-text">Verfügbar</span>
      </template>
      <template v-else>
        <i-CodiconError width="35" height="35" color="red"/>
        <span class="availability-text unavailable-text">Nicht Verfügbar</span>
      </template>
    </div>
  </div>
</template>

<style scoped>

.availability-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.selected-date {
  margin-left: 10px;
  color: #383838;
  cursor: pointer;
}

.left-content {
  display: flex;
  align-items: center;
}
.right-content {
  margin-right: 15px;
}

.left-content p {
  font-size: 1.2rem;
  margin-left: 10px;
  margin-bottom: 0;
  font-weight: bold;
}

.availability-text {
  font-size: 1rem;
  margin-left: 8px;
}

.available-text {
  color: green;
}

.unavailable-text {
  color: red;
}

/* Hover-Animation für den Unterstrich */
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(130, 133, 157);
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

.hover-underline-animation.left::after {
  transform-origin: bottom right;
}

.hover-underline-animation.left:hover::after {
  transform-origin: bottom left;
}

</style>

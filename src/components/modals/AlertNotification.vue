<script>

export default {
  name: "AlertNotification",
  props: {
    message: {
      type: String,
      required: true,
    },
    showAlert: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    closeAlert() {
      this.$emit('update:showAlert', false); // Close the alert
    }
  }
}
</script>

<template>
  <<div v-if="showAlert" class="alert-overlay">
  <div class="alert-box">
    <p>{{ message }}</p>
    <button @click="closeAlert">OK</button>
  </div>
</div>
</template>

<style scoped>
.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.alert-box {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  margin: 0 20px;
}

.alert-box p {
  font-size: 1.2rem;
}

.alert-box button {
  margin-top: 10px;
  padding: 8px 15px;
  font-size: 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.alert-box button:hover {
  background-color: #0056b3;
}
</style>
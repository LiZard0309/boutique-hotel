<script>
export default {
  name: "ConfirmationNotification",
  props: {
    isSuccessful: {
      type: Boolean,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="booking-card">

    <div class="icon">
      <i-LaCheckCircle v-if="isSuccessful" width="35" height="35" color="green"/>
      <i-CodiconError v-else width="35" height="35" color="red"/>
    </div>

    <div class="text-content">
      <h2 class="header">{{ header }}</h2>

      <p class="message">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.booking-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fff;
  max-width: 400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 auto;
  gap: 20px;
}

.icon {
  margin-left: 15px;
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.message {
  font-size: 1rem;
  color: #555;
}
</style>
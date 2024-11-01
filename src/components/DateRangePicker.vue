<script>
export default {
  name: 'DateRangePicker',
  data() {
    return {
      selectedRange: null,
      minDate: this.getTomorrowDate(),
      maxDate: this.getSixMonthsFromNow(),
    };
  },
  methods: {
    getTomorrowDate() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
    },
    getSixMonthsFromNow() {
      const sixMonthsLater = new Date();
      sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
      return sixMonthsLater.toISOString().split('T')[0];
    },
    disableDatesBeforeMin(date) {
      const selectedDate = new Date(date);
      const minDate = new Date(this.minDate);
      return selectedDate < minDate;
    },
  },
};
</script>

<template>
  <div>
    <b-form-group label="Select a Date Range">
      <b-calendar
          v-model="selectedRange"
          range
          :min="minDate"
          :max="maxDate"
          :date-disabled-fn="disableDatesBeforeMin"
      ></b-calendar>
    </b-form-group>
  </div>
</template>

<style scoped>

</style>
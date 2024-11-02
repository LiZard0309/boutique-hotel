<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'DateRangePicker',
  components: { VueDatePicker },

  data() {
    return {
      selectedRange: { start: null, end: null },
      minDate: this.getTomorrowDate(),
      maxDate: this.getSixMonthsFromNow(),
      rangeConfig: {
        showCalendars: 2,
      },
    };
  },

  watch: {
    selectedRange: {
      handler(newVal) {
        this.$emit('date-selected', newVal);
      },
      deep: true,
    },
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
    <b-form-group label="Wählen Sie Ankunfts- und Abreisedatum">
      <div class="d-flex">
        <vue-date-picker
            v-model="selectedRange.start"
            format="yyyy-MM-dd"
            locale="de"
        :min-date="minDate"
        :max-date="maxDate"
        placeholder="Startdatum"
        class="me-2"
        />
        <vue-date-picker
            v-model="selectedRange.end"
            format="yyyy-MM-dd"
            locale="de"
        :min-date="minDate"
        :max-date="maxDate"
        placeholder="Enddatum"
        />
      </div>
    </b-form-group>
  </div>
</template>

<style scoped>

</style>
<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

//TODO: Date Range Picker weiter modifizieren:
// 4) evtl. Select weg!

export default {
  name: 'DateRangePicker',
  components: {VueDatePicker},

  data() {
    return {
      selectedRange: {start: null, end: null},
      minDate: this.getTomorrowDate(),
      maxDate: this.getSixMonthsFromNow(),
      /*rangeConfig: {
      },*/
    };
  },

  watch: {
    selectedRange: {
      handler(dateValue) {
        const formattedRange = {
          start: dateValue[0] ? this.formatDate(dateValue[0]) : null,
          end: dateValue[1] ? this.formatDate(dateValue[1]) : null,
        };

        this.$emit('date-selected', formattedRange);
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
    formatDate(date) {
      if (!date) return null;
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<template>
  <div>
    <b-form-group label="Reisezeitraum">
      <div class="d-flex">
        <vue-date-picker
            v-model="selectedRange"
            :range="{partialRange: false}"
            format="yyyy-MM-dd"
            locale="de"
            :min-date="minDate"
            :max-date="maxDate"
            :enable-time-picker="false"
            placeholder="Anreise? -> Abreise?"
            class="date-range-picker"
        />
      </div>
    </b-form-group>
  </div>
</template>

<style scoped>
.date-range-picker {
  width: 100%;
}
</style>
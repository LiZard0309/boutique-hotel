<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

//TODO: Date Range Picker weiter modifizieren:
// 1) Datumsformat für API Call anpassen
// 2) Uhrzeitpicker weg
// 3) evtl. nur 1 Kalender zeigen
// 4) evtl. Select weg!

//TODO: Error Handling: Derzeit ist es noch möglich ein Enddatum auszuwählen, das vor dem Startdatum liegt.

export default {
  name: 'DateRangePicker',
  components: {VueDatePicker},

  data() {
    return {
      selectedRange: {start: null, end: null},
      minDate: this.getTomorrowDate(),
      maxDate: this.getSixMonthsFromNow(),
      rangeConfig: {
        //showCalendars: 2,
        partialRange: false
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
            enable-time-picker="false"
            placeholder="Startdatum"
            class="me-2"
        />
        <vue-date-picker
            v-model="selectedRange.end"
            format="yyyy-MM-dd"
            locale="de"
            :min-date="minDate"
            :max-date="maxDate"
            enable-time-picker="false"
            placeholder="Enddatum"
        />
      </div>
    </b-form-group>
  </div>
</template>

<style scoped>

</style>
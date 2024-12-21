<script>
import {useUserStore} from "../../stores/user";
import BookingFormNotLoggedIn from "./BookingFormNotLoggedIn.vue";
import BookingFormLoggedIn from "./BookingFormLoggedIn.vue";

export default {
  name: "BookingForm",
  components: {BookingFormLoggedIn, BookingFormNotLoggedIn},
  methods: {useUserStore}
};
</script>

<template>
  <div v-if="useUserStore().user">
    <BookingFormLoggedIn/>
  </div>
  <div v-else>
    <BookingFormNotLoggedIn/>
  </div>

</template>

<style>
.button-container {
  display: flex;
  justify-content: center;
}

.mr-2 {
  margin-right: 10px;
}

</style>

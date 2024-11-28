<script>
import Contact from "@/components/staticHotelInfo/Contact.vue";

export default {
  name: "ImpressumView",
  components: {Contact}
}
</script>

<template>
  <div>
    <div class="row imprint-container">
      <div class="col-md-6 mx-auto">
        <h1>Impressum</h1>
        <br/>

        <p>Hotel Alpenblick<br/>
          Inhaberin: Marie Dupont<br/>
          Höchstädtplatz 6<br/>
          1200 Wien<br/>
          Österreich</p>

        <Contact/>
        <p>UID-Nr: AT123456789<br/>
          Finanzamt Wien</p>
        <br/>
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        <p>Marie Dupont<br/>
          Höchstädtplatz 6<br/>
          1200 Wien<br/>
          Österreich</p>
      </div>
    </div>
  </div>

</template>

<style scoped>

.imprint-container{
  padding: 0.5rem;
}

</style>
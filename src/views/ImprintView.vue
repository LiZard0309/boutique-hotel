<script>
import Contact from "@/components/Contact.vue";

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
        <h2>Angaben gemäß § 5 TMG:</h2>
        <p>Hotel La Vie Élégante<br/>
          Inhaberin: Marie Dupont<br/>
          Bergstraße 12<br/>
          12345 Sonnental<br/>
          Deutschland</p>

        <Contact/>
        <p>UID-Nr: DE123456789<br/>
          Finanzamt Sonnental</p>
        <br/>
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        <p>Marie Dupont<br/>
          Bergstraße 12<br/>
          12345 Sonnental<br/>
          Deutschland</p>
      </div>
    </div>
  </div>

</template>

<style scoped>

.imprint-container{
  padding: 0.5rem;
}

</style>
<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "ImpressumView",
  components: {Contact}
}
</script>

<template>
  <body>
  <div>
    <div class="row imprint-container">
      <div class="col-md-6 mx-auto">
        <h1>__________</h1>
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
        <p class="paragraph">Verantwortlich für den Inhalt <br/> nach § 55 Abs. 2 RStV:</p>
        <p>Marie Dupont<br/>
          Höchstädtplatz 6<br/>
          1200 Wien<br/>
          Österreich</p>
      </div>
    </div>
  </div>
  </body>

</template>

<style scoped>

.paragraph {
  font-weight: bold;
}

.imprint-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}


p {
  text-align: justify;
}


</style>
<script>
export default {
  name: "MediaMap"
}
</script>

<template>
  <iframe class="responsive-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.2693243556964!2d16.37459797745232!3d48.23994274402789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d064f687c20e3%3A0x24c3f008083e282d!2zSMO2Y2hzdMOkZHRwbC4sIDEyMDAgV2llbg!5e0!3m2!1sde!2sat!4v1729199682692!5m2!1sde!2sat"
          width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<style scoped>

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 2%;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 90%;
  margin-top: 2rem;
}


</style>
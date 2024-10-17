<script>
export default {
  name: "Directions"
}
</script>

<template>
  <h4>So finden Sie uns: </h4>
  <div class="container">
    <iframe class="responsive-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.2693243556964!2d16.37459797745232!3d48.23994274402789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d064f687c20e3%3A0x24c3f008083e282d!2zSMO2Y2hzdMOkZHRwbC4sIDEyMDAgV2llbg!5e0!3m2!1sde!2sat!4v1729199682692!5m2!1sde!2sat"
            width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <div>
    <p class="subtitle">Anschrift:</p>
    <p> Hochstädtplatz 6, 1200 Wien </p>
  </div>

  <div>
    <p class="subtitle">Anfahrt:</p>
    <p>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-car-front-fill"
           viewBox="0 0 16 16">
        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965
      1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4
      .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0
      .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097
      4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
      </svg>
      mit dem Auto: Straße entlang fahren
    </p>

    <p>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-train-front-fill" viewBox="0 0 16 16">
        <path d="M10.621.515C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5
        16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM6.5 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1
        0-1m-2 2h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5v-2A1.5 1.5 0 0 1 4.5 4m.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0
        0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2M4 5.5a.5.5 0 0 1 .5-.5h3v3h-3a.5.5 0 0 1-.5-.5zM8.5
        8V5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"/>
      </svg>
      mit den Öffis: in Zug oder Bus einsteigen
    </p>
  </div>


</template>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 85%;
  height: 85%;
}

.subtitle {
  font-weight: bold;
}

h4 {
  font-weight: bold;
}

svg {
  margin: 0.5rem;
}


</style>
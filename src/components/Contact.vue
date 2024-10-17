<script>
export default {
  name: "Contact",

  data(){
    return {
      email: "hotel@email.com"
    }
  }
}
</script>

<template>
  <h4>Noch Fragen? </h4>
  <p> Kontaktieren Sie uns: <a href="">{{email}}</a></p>

</template>

<style scoped>

h4 {
  font-weight: bold;
}

</style>
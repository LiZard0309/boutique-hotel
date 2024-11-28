<script setup>

</script>

<template>
  <div class="container">
    <div class="paragraph">
      <p>Tauchen Sie ein in eine Welt voller Komfort und Stil, in der Sie sich wie zu Hause fühlen werden. Unser
        Boutique-Hotel bietet Ihnen mehr als nur eine Unterkunft – es ist ein Erlebnis für die Sinne. Genießen Sie die
        Ruhe und Gelassenheit unseres charmanten Hauses, umgeben von atemberaubender Natur und modernen
        Annehmlichkeiten.</p>
    </div>
    <div class="paragraph">
      <p>Egal, ob Sie einen romantischen Kurzurlaub planen, die Region erkunden oder einfach nur abschalten möchten – bei uns sind Sie in den besten Händen. Lassen Sie sich von unserer Gastfreundschaft und der Liebe zum Detail verzaubern. Wir freuen uns darauf, Ihnen unvergessliche Momente zu bereiten.</p>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto;
}

.paragraph {
  text-align: justify;
  flex: 1;
  min-width: 300px;
  margin: 10px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .paragraph {
    min-width: 90%;
  }
}

</style>
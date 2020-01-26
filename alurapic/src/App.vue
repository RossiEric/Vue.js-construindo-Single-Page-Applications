<!-- deve contar um elemento container para todos os elementos da pagina -->
<template>

  <div id="container">
    <h1>{{ titulo }}</h1>

    <!-- 
    dentro de atributos, não podemos usar interpolação exemplo:
    <img src="{{ foto.url }}" alt="{{ foto.titulo }}">
    -->

    <!-- para atributos, usar v-bind: exemplo -->
    <img v-bind:src="foto.url" v-bind:alt="foto.titulo">

    <!-- para atributos, usar tbm apenas ":" exemplo -->
    <img :src="foto.url" :alt="foto.titulo">

  </div>

</template>

<script>
/* data bind unidirecional, sempre de dados para template, nunca template para dados */
export default {
  data() {
    return {
      titulo: 'Alurapic',
      foto: {
        url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
        titulo: 'Cachorro'
      }
    }
  }
}
</script>

<style>
</style>

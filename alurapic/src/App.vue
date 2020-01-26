<!-- deve contar um elemento container para todos os elementos da pagina -->
<template>

  <div id="container">
    <h1>{{ titulo }}</h1>

    <ul>

      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>

    </ul>

  </div>

</template>

<script>
/* data bind unidirecional, sempre de dados para template, nunca template para dados */
export default {
  data() {
    return {
      titulo: 'Alurapic',
      fotos: []
    }
  },
  //Options / Lifecycle Hooks
  //executa quando o componente é criado, antes de data()
  created(){
    console.log('componente criado');

    //consulta API com VueResource
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      //this.fotos definida em data()
      .then(fotos => this.fotos = fotos, err => console.log(err));

  }
}
</script>

<style>
</style>

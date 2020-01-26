<!-- deve contar um elemento container para todos os elementos da pagina -->
<template>
  <div class="corpo">

    <h1 class="titulo">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotos">

        <div class="painel">
          <h2 class="painel-titulo">{{foto.titulo}}</h2>
          <div class="painel-corpo">

            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">

          </div><!-- fim painel-corpo -->
        </div><!-- fim painel -->

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
 .titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
</style>

<!-- deve contar um elemento container para todos os elementos da pagina -->
<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <!-- v-on:input; data bindings de evento -->
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre pelo título da foto">
    
    {{ filtro }}

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
//importando componentes
//importando componente painel
import Painel from '../src/components/shred/painel/Painel.vue';

/* data bind unidirecional, sempre de dados para template, nunca template para dados */
export default {
  //criar chave com nome do componente importado para uso
  componentes:{
    'meu-painel': Painel
  },
  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ''
    }
  },
  //isolando lógica
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        // filtra a lista, por enquanto vamos retornar uma lista em branco
        // criando uma expressão com o valor do filtro, insensitivo
        let exp = new RegExp(this.filtro.trim(), 'i');
        // retorna apenas as fotos que condizem com a expressão
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        // se o campo estiver vazio, não filtramos, retornamos a lista
        return this.fotos;
      }
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
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado {

    text-align: center;
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
</style>

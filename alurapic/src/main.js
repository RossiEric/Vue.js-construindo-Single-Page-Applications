//Global View Object, um objeto especial do Vue.js, seu core.
import Vue from 'vue'

//componente
import App from './App.vue'

/*
O módulo VueResource, baixado através do npm, é aquele que disponibiliza artefatos especializados na realização de requisições assíncronas ao mesmo tempo em que se integra com o ecossistema do Vue
*/
//importando modulos
import VueResource from 'vue-resource';

//use VueResource do import modulo
Vue.use(VueResource)

//criando uma view instance
new Vue({
  el: '#app', //onde quero renderizar o componente
  render: h => h(App) //o componente que quero renderizar
})

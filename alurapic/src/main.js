//Global View Object, um objeto especial do Vue.js, seu core.
import Vue from 'vue'

//componente
import App from './App.vue'

//criando uma view instance
new Vue({
  el: '#app', //onde quero renderizar o componente
  render: h => h(App) //o componente que quero renderizar
})

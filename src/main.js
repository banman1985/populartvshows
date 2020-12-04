// Programmer: Brian Nelson
// Project: Popular TV Shows
// Date:12/4/2020

//Added imports for bootstrap to allow the use of bootstrap.
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

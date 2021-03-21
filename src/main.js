import Vue from 'vue'
import store from './store'
import App from './components/App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

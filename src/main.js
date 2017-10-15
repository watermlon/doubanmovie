// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import Mint from 'mint-ui'
import ElementUI from 'element-ui'
import '../node_modules/mint-ui/lib/style.min.css'
import '../node_modules/element-ui/lib/theme-default/index.css'
import '../static/css/restore.css'
import '../static/font-awesome-4.7.0/css/font-awesome.min.css'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(Mint)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

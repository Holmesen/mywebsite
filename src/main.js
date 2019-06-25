import Vue from 'vue'
import App from './App'
import router from './router'
// import echarts from 'echarts'

Vue.config.productionTip = false

// Vue.use(echarts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

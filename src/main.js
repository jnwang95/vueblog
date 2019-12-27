import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VueContextMenu from 'vue-contextmenu'

// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.use(VueContextMenu)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

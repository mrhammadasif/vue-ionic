import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"

import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import IonicVue from "@ionic/vue"

Vue.use(IonicVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")

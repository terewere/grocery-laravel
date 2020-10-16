require('@/bootstrap');
import Vue from "vue"

import App from '@/App.vue';
import { store } from '@/store/store'
import router from '@/routes/router'

Vue.config.productionTip = false

export default new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
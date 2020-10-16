import Vue from "vue"
import router from '@/routes/router'

Vue.use( {
    install(Vue) {

        Vue.prototype.$goBack = () => {
            window.history.length > 1
              ? router.go(-1)
              : router.push('/')
          }
    }
})



import Vue from "vue"
import Gate from '@/plugins/Gate';

//Auth user is set in vuex/SET_AUTH_USER
Vue.prototype.$gate = new Gate();

Vue.use({
    install(Vue, options) {
        Vue.mixin({
            computed: {
              gate(){
                  return this.$gate
              }
            }
        })
    }
})




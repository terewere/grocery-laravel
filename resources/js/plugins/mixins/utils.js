import Vue from "vue"
import { mapGetters } from "vuex"

Vue.use({
    install(Vue, options) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    authenticated: 'isLoggedIn',
                    authUser: 'getAuthUser',
                    isOnline: 'isOnline',
                    temploading: 'getLoading',
                    getNumber: 'getNumber'
                })
            },
            methods: {
                isMobile() {
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                        return true
                    } else {

                        return false
                    }
                },

            }
        })
    }
})
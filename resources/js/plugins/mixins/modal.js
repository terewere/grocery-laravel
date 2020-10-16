import Vue from "vue"

Vue.use({
    install(Vue, options) {
        Vue.mixin({
            methods: {
                showModal(id, show = true, backdrop= true){
                    $(id).modal({
                     show: show,
                     backdrop: backdrop
         })
                  },
      
                  hideModal(id){
                    $(id).modal('hide')
                  },
      
                
            }
        })
    }
})




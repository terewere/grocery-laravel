<template>
         <router-view></router-view>
</template>

<script>

    export default {

       watch: {
           '$route': 'log'
       },

        methods: {

            log() {
                // console.log('just watching!')
            },

        fetchData(){
            return  this.$store.dispatch('fetchAllUsers')
        }
    },


    created(){

             this.$Progress.start()
            this.fetchData().then( () => {
            this.$Progress.finish()
            
                
            }).catch( () =>  {
                      this.$Progress.fail() 

            } )

            if(this.authUser.name === undefined) {
                this.$store.dispatch('setAuthUser')

                }

            
        }

    }
</script>



<template>
       
     <a class="float-left" href="#" @click="btnClicked()" >{{data.text}}</a>
   
</template>

<script>

    export default{

        mounted(){
            
        },
         props: {
            data: { type: Object },
        }, 

        methods:{
            btnClicked(){
            if(this.data.event)
                EventBus.$emit(this.data.event, this.data.data);
            },

        }
       
    }
</script>

<style  scoped>
.dropdown-item.active {

    background-color: transparent;
    color: #212529;

}

</style>
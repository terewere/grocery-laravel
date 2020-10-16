<template>
    <div class="d-flex">
       
        <div id="del_el" class="btn-group">
            <template v-if="mainBtn !== null">
            <router-link :to="mainBtn !== null? this.mainBtn.url: ''">{{mainBtn !== null? this.mainBtn.text : ''}}</router-link>
            </template>
            <a href="" 
               class="dropdown-toggle dropdown-toggle-split"
               data-toggle="dropdown" 
               data-reference="parent">
            </a>
            <div class="dropdown-menu" >
               
            <router-link @click.native="EmitStatus(item)" v-for="(item, i) in this.dropDownBtn" :key="i" class="dropdown-item" :to="item.url">{{item.text}}</router-link>
            </div>
        </div>
        </div>
</template>

<script>

    export default{
         props: {
            id: { default: '' },
            mainBtn: { type: Object, required: false },
            dropDownBtn: {type: Array }
        }, 

        methods:{
            EmitStatus(item){
            if(item.event)
                EventBus.$emit(item.event, item.id);
            },

            //    EmitStatus(item){
            //     EventBus.$emit("MARK_AS_COMPLETE", item.id);
            // },
        }
       
    }
</script>

<style  scoped>
.dropdown-item.active {

    background-color: transparent;
    color: #212529;

}

</style>
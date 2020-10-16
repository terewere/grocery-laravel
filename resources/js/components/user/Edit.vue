<template>

             <main-content>
                <template v-slot:left>
                    <i class="fa fa-briefcase mr-3"></i>Detail
                </template>
                <template v-slot:right>
                    <bread-crumb :list="['Home', 'Detail']"></bread-crumb>
                </template>

                    <pre>{{authUser}}</pre>


            </main-content>
 
</template>

<script type="text/ecmascript-6">
  
    export default {


        created() {
                        
    
        }
    }
</script>

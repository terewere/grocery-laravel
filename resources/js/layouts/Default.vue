<template>
   <div class="wrapper">
    <navbar/>
    <sidebar/>
      <slot/>
<my-footer/>
  <AddUser v-if="permissions && permissions.can('create_users')"/> -->
</div>
<!-- ./wrapper -->
</template>

<script>
     import Navbar from "@/components/common/Navbar.vue"
    import Sidebar from "@/components/common/Sidebar.vue"
    import Footer from "@/components/common/Footer.vue"
    const AddUser =() => import("@/pages/users/AddUser.vue")
 
    export default {

        data(){
            return {
                permissions: this.gate
            }
        },

        components : {
            'navbar': Navbar,
            'sidebar': Sidebar,
            'my-footer': Footer,
            AddUser
        },

          watch:{
        authUser(){
            
           return this.permissions = this.gate;
            
        }
      
      },

    }
</script>
<template>

     <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-warning navbar-dark">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
      <!-- <li v-if="permissions && permissions.can('do_all')" class="nav-item">
        <a target="_blank" class="nav-link text-info" href="https://k5.ofhgroupgh.com"><i class="fas fa-globe"></i></a>
      </li> -->
    </ul>

    <!-- SEARCH FORM -->
    <!-- <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form> -->

    <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
 
      <li class="nav-item">
        <router-link to="/profile" class="nav-link">Profile</router-link>
      </li>

       <li class="nav-item">
           <a @click="logout" class="nav-link" href="#">Logout</a>
      </li>
    </ul>

  </nav>
  <!-- /.navbar -->
</template>

<script type="text/ecmascript-6">

    export default {

          data(){
            return {
                permissions: this.gate
            }
        },

      watch:{
        authUser(){
         this.permissions = this.gate
        }
      
      },

        methods: {
            logout(){
                this.$store.dispatch('LOGOUT')
                 this.$router.push('/login')
            }

        },
      
    }
</script>
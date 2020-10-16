<template>
<body class="hold-transition login-page">
       <div class="login-box">
  <div class="login-logo">
    <b>Zongovation </b> Projects
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>


<ValidationObserver ref="observer" v-slot="{invalid, passes }">
      <form @submit.prevent="passes(login)" >
     <p class="alert alert-danger" v-if="server_errors.unauthorized">{{ server_errors.unauthorized[0]}}</p>
 <validation-provider name="email" rules="required|email" v-slot="{ errors }">
        <div class="input-group mb-3">
          <input name="email"  v-model="form.email" type="text" class="form-control" placeholder="Phone">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-phone"></span>
            </div>
          </div>
        </div>
        <span class="text-danger">{{ errors[0] }}</span>
 </validation-provider>
  <validation-provider name="password" rules="required|min:8" v-slot="{ errors }">
        <div class="input-group mb-3">
          <input name="password" v-model="form.password" type="password" class="form-control" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <span class="text-danger">{{ errors[0] }}</span>
  </validation-provider>
            <button :disabled="invalid || processing||!isOnline" type="submit" 
            class="btn btn-warning btn-block btn-flat">
            {{processing?'Processing...':'Sign In'}}
            </button>
      </form>

</ValidationObserver>

    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
</body>
</template>

<script type="text/ecmascript-6">

import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider
  },

    data() {
        return {
          processing: false,
            form : {
              email: '',
            password: ''
            }

        }
    },



    methods: {

        login(){

              this.processing = true
              this.$store.dispatch('LOGIN', this.form ).then( () => {
                // this.processing = false
                                
              // this.$router.push('/dashboard')
              this.$router.go('/dashboard')
            
              


            }).catch( () =>  {
              this.$refs.observer.setErrors(this.server_errors);
              this.$Progress.fail() 
               this.processing = false

            } )

              // this.$router.replace('/dashboard')       
              
              }
    },
    
}
</script>

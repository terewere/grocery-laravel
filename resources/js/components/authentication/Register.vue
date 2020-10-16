<template>
<body class="hold-transition login-page">
       <div class="login-box">
  <div class="login-logo">
    <b>GH Islamic</b> Radio
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>


<ValidationObserver ref="observer" v-slot="{invalid, passes }">
      <form @submit.prevent="passes(login)" >
     <p class="alert alert-danger" v-if="server_errors.unauthorized">{{ server_errors.unauthorized[0]}}</p>
 <validation-provider name="name" rules="required" v-slot="{ errors }">
        <div class="input-group mb-3">
          <input name="name" v-model="form.name" type="text" class="form-control" placeholder="Enter Name">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <span class="text-danger">{{ errors[0] }}</span>
 </validation-provider>
  <validation-provider name="number" rules="required|numeric|min:10" v-slot="{ errors }">
        <div class="input-group mb-3">
          <input name="number" v-model="form.number" readonly type="text" class="form-control" placeholder="Phone">
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
  <validation-provider name="password_confirmation" rules="required|confirmed:password" v-slot="{ errors }">
        <div class="input-group mb-3">
          <input name="password_confirmation" v-model="form.password_confirmation" type="password" class="form-control" placeholder="Confirm Password">
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
            {{processing?'Processing...':'Create Account'}}
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
  name: "Register",
  components: {
    ValidationObserver,
    ValidationProvider
  },

    data() {
        return {
          processing: false,
            form : {
            name:'',
            number: '',
            password: '',
            password_confirmation: ''
            }

        }
    },

  mounted(){
      this.form.number = this.getNumber
  },


    methods: {

        login(){

              this.processing = true
              this.$store.dispatch('REGISTER', this.form ).then( () => {
                                
            //   this.$router.go('/dashboard')

               this.$router.push({
                    path: this.$route.query.redirect || "/dashboard"
                })
            
            
            }).catch( () =>  {
              this.$refs.observer.setErrors(this.server_errors);
              this.$Progress.fail() 
              
            } ).finally(()=> {
                this.$Progress.finish()
                 this.processing = false
            }
                )

              
              }
    },
    
}
</script>

<template>
<body class="hold-transition login-page">
       <div class="login-box">
  <div class="login-logo">
    <b>GH Islamic</b> Radio
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Enter Token Number</p>


<ValidationObserver ref="observer" v-slot="{invalid, passes }">
      <form @submit.prevent="passes(login)" >
     <p class="alert alert-danger" v-if="server_errors.unauthorized">{{ server_errors.unauthorized[0]}}</p>
 <validation-provider name="number" rules="required|numeric|min:10" v-slot="{ errors }">
        <div class="input-group mb-3">
          <input name="number" readonly v-model="form.number" type="text" class="form-control" placeholder="Phone">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-phone"></span>
            </div>
          </div>
        </div>
        <span class="text-danger">{{ errors[0] }}</span>
 </validation-provider>
  <validation-provider name="token" rules="required|numeric|min:6" v-slot="{ errors }">
        <div class="input-group mb-3">
          <input name="token" v-model="form.token" type="text" class="form-control" placeholder="Token">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-phone"></span>
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
  name: "VerifyToken",
  components: {
    ValidationObserver,
    ValidationProvider
  },

    data() {
        return {
          processing: false,
            form : {
              number: '',
              token: '',
            }

        }
    },
 
  mounted(){

      this.form.number = this.getNumber
   
  },

    methods: {

        login(){

              this.processing = true
              this.$store.dispatch('VERIFY_TOKEN', this.form ).then( (data) => {
                // this.processing = false

                
                                
              // this.$router.push('/dashboard')
            //   this.$router.go('/dashboard')
            if (data === 'register') {

                this.$router.push('/register')
            }
            
              


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

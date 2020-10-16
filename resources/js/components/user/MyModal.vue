<template>
<modal name="addAccount" width="80%" height="auto" :scrollable="true">
          
        <div class="container">
            <div class="row">

                <h1> <i class="fa fa-briefcase mx-3 mt-5"></i> Add Account</h1>
                <hr>
        <div class="col-md-10 offset-1">
        <ValidationObserver ref="observer" v-slot="{invalid, passes }">
               <form @submit.prevent="passes(save)">
                <div class="row">
                   
                <div class="col-md-6 mb-5">
                    <div class="form-group">
                  <label>Account Type</label>
                  <validation-provider name="type" rules="required" v-slot="{ errors }">
                     <v-select 
                     label="name"
                     :reduce="name =>name.id"
                     :options="getTypes" 
                     :placeholder="'Select account type'" 
                     v-model="form.type"
                     @input="fetchDetails"
                     >
                     </v-select>
                    <span class="text-danger">{{ errors[0] }}</span>
                     </validation-provider>
                </div>

                <div class="form-group">
                  <label>Detail Type</label>
                  <validation-provider name="detail" rules="required" v-slot="{ errors }">
                    <v-select 
                            label="name"
                            :reduce="name =>name.id"
                            :options="getDetails"
                            @input="getDetail"
                            v-model="form.detail"
                            :placeholder="'Select detail type'"
                            :resetOnOptionsChange="true"
                            :disabled="disabled"
                          >

                            <template slot="option" slot-scope="option">
                                <span class="mr-2 fa" :class="option.icon"></span>
                                {{ option.name }}
                            </template>
                          
                          </v-select>
                   <span class="text-danger">{{ errors[0] }}</span>
                     </validation-provider>       

                       
                </div>
                <div class="form-group">
                    <label for="desc">Detail Description</label>
                    <div id="detail_desc" v-html="getDescription">
                    </div>
                </div>
                </div>


                <div class="col-md-6">
                   <validation-provider name="accounts_name" rules="required" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="name">Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" v-model="form.accounts_name">
                    </div>
                      <span class="text-danger">{{ errors[0] }}</span>
                     </validation-provider>
                    
                    <div class="form-group">
                        <label for="description">Number</label>
                        <input type="text" class="form-control" v-model="form.number">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" class="form-control" v-model="form.description">
                    </div>
                </div>
                  
                </div>
                <div class="row mb-5">
                        <div class="col-12 col-md-2">
                            <button :disabled="invalid" type="submit" class="btn btn-primary btn-block"><i class="fas fa-save mr-2"></i>Save</button>
                        </div>

                        <div class="col-0 col-md-10"></div>
                    </div>                
               </form>
               </ValidationObserver>
                               
                </div>

          </div>
        </div>
  
</modal>
</template>

<script type="text/ecmascript-6">

import { ValidationObserver, ValidationProvider } from "vee-validate";
import vSelect from 'vue-select'
import { mapGetters , mapActions } from 'vuex'

export default {
    name: "AddAccount",
    components: {
    ValidationObserver,
    ValidationProvider,
    'v-select': vSelect
  },

       computed: {
    ...mapGetters([
      'getDetails',
      'getTypes',
      'getDescription',
    ]),

  },

  

  data() {
    return {

      disabled: true,
        form: {
            detail: '',
             type: '',
             accounts_name: '',
             number: '',
             description: '',
        },
    }
  }, 
  methods: {
      ...mapActions([
      'clearDescription','saveAccount', 'setDescription'
      ]),

      ...mapActions({
       actionFetchDetails: 'fetchDetails',
       actionFetchAccounts: 'fetchAccounts'
    }),

    resetForm(){
      this.disabled = true
      this.form = {}
       this.clearDescription()
    },

    save(){
        this.$Progress.start()
        this.saveAccount(this.form).then( () => {
                          
        this.$Progress.finish()
        this.resetForm()
         
        requestAnimationFrame(() => {
            this.$refs.observer.reset();
          });

        }).catch( () =>  {
              this.$refs.observer.setErrors(this.server_errors);
              this.$Progress.fail() 
        } )
  

    },


     getDetail(value) {
       if(value === 0){
         alert('new entry')
       }
        this.setDescription(value)
      },

       fetchAccounts(value){
            this.$Progress.start()
            this.actionFetchAccounts().then( () => {
                              
            this.$Progress.finish()

            }).catch( () =>  {
                  this.$Progress.fail() 
            } )
        },

        fetchDetails(value){

            this.$Progress.start()
            this.actionFetchDetails(value).then( () => {
            this.disabled = false
            this.$Progress.finish()

            }).catch( () =>  {
                this.$refs.observer.setErrors(this.server_errors);
                this.$Progress.fail() 
            } )
        },
  },

  mounted() {

      this.fetchAccounts()
  }

    }
</script>
<style scoped>
  #detail_desc {
      width : 95%;
    min-height : 250px;
    border : 2px solid lightgray;
    background: #f8fafc;
    padding: 1em;
  }

</style>
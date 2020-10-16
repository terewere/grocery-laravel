<template>

<!-- Modal -->
<div class="modal fade" id="adjustable-account" tabindex="-1" role="dialog" aria-labelledby="adjustable-accountLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="adjustable-accountLabel">{{pageTitle}}</h5>
        <button @click="hide" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <ValidationObserver ref="observer" v-slot="{invalid, passes }">
        <form @submit.prevent="passes(submit)">
          <div class="row">
            <div class="col-md-12 mb-5">
              <div class="form-group">
                <label>Account</label>
                <validation-provider name="account name" rules="required" v-slot="{ errors }">
                  <multiselect
                    v-model="detail"
                    label="accounts_name"
                    :options="getAdjustableAccounts"
                    @select="selectAdjustableAccount"
                    @remove="removeAdjustableAccount"
                    track-by="id"
                    placeholder="Select Account"
                    :loading="detailLoading"
                    :custom-label="nameWithTypeName"

                  ></multiselect>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="desc">Detail Description</label>
                <div id="detail_desc" v-html="detail_description"></div>
              </div>
     

              <div class="row">
                <div class="col">
                  <label for="description">Balance</label>
                  <div readonly type="text" class="form-control">{{form.balance | currency}}</div>
                </div>
                <div class="col">
                  <label for="description">Add Amount</label>
                  <input 
                  type="number" 
                  class="form-control" 
                  placeholder="add Amount"
                  @change="amountChanged($event)"
                   />
                </div>
                <div class="col">
                  <label for="description">Ending Date</label>
                  <input type="date" class="form-control" v-model="form.balance_date" />
                </div>
              </div>
            </div>
          </div>
    
              <button :disabled="invalid||processing" type="submit" class="btn btn-info btn-block">
                {{processing? 'Processing...' : 'update'}}
              </button>

        </form>
      </ValidationObserver>
     
      </div>
  
    </div>
  </div>
</div>
</template>

<script >
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapGetters, mapActions } from "vuex";

function getDefaultData() {
  return {
      processing: false,
      detailLoading: false,
      detail: "",
      detail_description: "",
      form: {
        balance: "",
        detail_id: "",
        id:'',
        account_type_id: "",
        balance_date: moment().format("YYYY-MM-DD")
      },
  };
}

export default {
  name: "AccountAdjustables",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      pageTitle: "Account Adjustment",
      balance: '',
      ...getDefaultData()
     
    };
  },

  computed: {
    ...mapGetters([
      'getAdjustableAccounts',
      'getAdjustableAccount'
    ])
  },
  methods: {
    ...mapActions([ 'save', 'FETCH_ADJUSTABLE_ACCOUNTS']),

    resetForm() {
      Object.assign(this.$data, getDefaultData())
    },

      hide(){
           $('#adjustable-account').modal('hide')
         },

      submit() {
        this.processing = true
      this.save({
        url: `accounts/adjustables/${this.detail.id}`,
        method: "PATCH",
        data: this.form 
      })
        .then(() => {
          requestAnimationFrame(() => {
            this.$refs.observer.reset();
          });
          this.resetForm();
          this.FETCH_ADJUSTABLE_ACCOUNTS()

        })
         .finally(() => {
          this.processing = false;
        });
    },


    selectAdjustableAccount(value){

      this.form.balance = value.balance
      this.form.id = value.id
      this.form.detail_id = value.detail_id
      this.form.account_type_id = value.account_type_id
      this.detail_description = value.description


    },
    removeAdjustableAccount(value){
      this.form.balance = ''

    },



    adjustableAccounts(value) {
      this.detailLoading = true;
      this.detail = "";
      this.FETCH_ADJUSTABLE_ACCOUNTS()
        .then(() => {
          this.detailLoading = false;
        })
        .catch(() => {
          this.detailLoading = false;
        });
    },

        nameWithTypeName({ accounts_name, account_types_name }) {
      return `${accounts_name} — [ ${account_types_name}]`;
    },


    onModalShow(id) {
        
      $(id).on("show.bs.modal", e => {
        
       this.adjustableAccounts();
      });
    
  },
    amountChanged(evt) {
      let amount = evt.target.value
      if (amount === '') {
        return
      }
      this.form.balance =  parseInt(this.form.balance) + parseInt(amount)
      evt.target.value = ''
      
    },
},
  mounted() {
        this.onModalShow("#adjustable-account");

  }
}
</script>
<style scoped>
#detail_desc {
  width: 95%;
  min-height: 50px;
  border: 2px solid lightgray;
  background: #f8fafc;
  padding: 1em;
}
</style>
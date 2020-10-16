<template>

<!-- Modal -->
<div class="modal fade" id="edit-account" tabindex="-1" role="dialog" aria-labelledby="edit-accountLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="edit-accountLabel">{{pageTitle}}</h5>
        <button @click="hide" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <ValidationObserver ref="observer" v-slot="{invalid, passes }">
        <form @submit.prevent="passes(submit)">
          <div class="row">
            <div class="col-md-6 mb-5">
              <div class="form-group">
                <label>Account Type</label>
                <validation-provider name="account_type_id" rules="required" v-slot="{ errors }">
                  <multiselect
                    v-model="account_type"
                    label="name"
                    :options="getTypes"
                    track-by="id"
                    :disabled="true"
                  ></multiselect>

                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>

              <div class="form-group">
                <label>Detail Type</label>
                <validation-provider name="detail_id" rules="required" v-slot="{ errors }">
                  <multiselect
                    v-model="detail"
                    label="account_details_name"
                    :options="getDetails"
                    track-by="id"
                    :disabled="true"
                  ></multiselect>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="desc">Detail Description</label>
                <div id="detail_desc" v-html="detail_description"></div>
              </div>
            </div>

            <div class="col-md-6">
              <validation-provider name="accounts_name" rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="name">
                    Name
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" v-model="form.accounts_name" />
                </div>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>

              <div class="form-group">
                <label for="description">Number</label>
                <input type="text" class="form-control" v-model="form.number" />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" v-model="form.description" />
              </div>

              <div class="row" v-if="show">
                <div class="col">
                  <label for="description">{{balanceLabel}}</label>
                  <div readonly type="text" class="form-control">{{form.balance | currency}}</div>
                </div>
           
              </div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-12 col-md-2">
              <button :disabled="invalid||processing" type="submit" class="btn btn-primary">
               {{processing?'Processing...' : 'update'}}
              </button>
            </div>

            <div class="col-0 col-md-10"></div>
          </div>
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
      account_type: "",
      detail: "",
      detail_description: "",
      form: {
    
      },
      show: false,
      balanceLabel: "Balance"
  };
}

export default {
  name: "EditAccount",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      pageTitle: "Edit Account",
      ...getDefaultData()
     
    };
  },

  computed: {
    ...mapGetters([
      "getDetails",
      "getTypes",
      'getAccount'
    ])
  },
  methods: {
    ...mapActions([ "save"]),

    ...mapActions({
      actionFetchDetails: "fetchDetails",
      actionFetchTypes: "fetchTypes"
    }),

    resetForm() {
      Object.assign(this.$data, getDefaultData())
    },

      hide(){
           $('#edit-account').modal('hide')
         },

    submit() {
        this.processing = true
        this.save({
        url: `accounts/${this.form.id}`,
        method: "PATCH",
        data: this.form 
      })
       
        .then(() => {
            this.hide()

          requestAnimationFrame(() => {
            this.$refs.observer.reset();
          });
        })
        .catch(() => {
          this.$refs.observer.setErrors(this.server_errors);
        }).finally( () => {
          this.processing = false
           
        });
    },



    fetchDetails(value) {
      this.detailLoading = true;
      this.form.account_type_id = value.id;
      this.detail = "";
      this.actionFetchDetails(value.id)
        .then(() => {
          this.disabled = false;
          this.detailLoading = false;
        })
        .catch(() => {
          this.$refs.observer.setErrors(this.server_errors);
          this.detailLoading = false;
        });
    },



      onModalShow(id) {
        
      $(id).on("show.bs.modal", e => {
        this.account_type = {
          id: this.getAccount.account_type_id,
          name: this.getAccount.account_types_name
        }
        this.form =  {...this.getAccount}
       
       this.detail = {
          id: this.getAccount.id,
          account_details_name: this.getAccount.account_details_name
        }
        this.form.detail_id = this.getAccount.id
        this.detail_description = this.getAccount.description

        if (parseInt(this.getAccount.balance) > 0) {
           this.show = true;
        }
       
      });
    }
  },
  mounted() {
    this.onModalShow("#edit-account");

  },
  
};
</script>
<style scoped>
#detail_desc {
  width: 95%;
  min-height: 250px;
  border: 2px solid lightgray;
  background: #f8fafc;
  padding: 1em;
}
</style>
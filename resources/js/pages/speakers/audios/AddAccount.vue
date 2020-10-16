<template>

<!-- Modal -->
<div class="modal fade" id="add-account" tabindex="-1" role="dialog" aria-labelledby="add-accountLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="add-accountLabel">{{pageTitle}}</h5>
        <button @click="hide" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <ValidationObserver ref="observer" v-slot="{invalid, passes }">
        <form @submit.prevent="passes(save)">
          <div class="row">
            <div class="col-md-6 mb-5">
              <div class="form-group">
                <label>Account Type</label>
                <validation-provider name="account_type_id" rules="required" v-slot="{ errors }">
                  <multiselect
                    v-model="account_type_id"
                    label="name"
                    :options="getTypes"
                    track-by="id"
                    placeholder="Select account type"
                    @select="fetchDetails"
                    :loading="temploading"
                  ></multiselect>

                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>

              <div class="form-group">
                <label>Detail Type</label>
                <validation-provider name="detail_id" rules="required" v-slot="{ errors }">
                  <multiselect
                    v-model="detail_id"
                    label="account_details_name"
                    :options="getDetails"
                    track-by="id"
                    placeholder="Select detail type"
                    @select="getDetail"
                    :disabled="disabled"
                    :loading="detailLoading"
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

              <!-- <div class="form-group">
                <label for="description">Number</label>
                <input type="text" class="form-control" v-model="form.number" />
              </div> -->
              <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" v-model="form.description" />
              </div>

              <div class="row" v-if="show">
                <div class="col">
                  <label for="description">{{balanceLabel}}</label>
                  <input type="text" class="form-control" v-model="form.balance" />
                </div>
                <div class="col">
                  <label for="description">as of</label>
                  <input type="date" class="form-control" v-model="form.balance_date" />
                </div>
              </div>
            </div>
          </div>
       
              <button :disabled="invalid||processing" type="submit" class="btn btn-primary btn-block">
               {{processing? 'Processing...':'Save'}}
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
     disabled: true,
      detailLoading: false,
      account_type_id: "",
      detail_id: "",
      detail_description: "",
      form: {
        detail_id: "",
        account_type_id: "",
        accounts_name: "",
        number: "",
        description: "",
        balance: 0,
        balance_date: moment().format("YYYY-MM-DD")
      },
      show: false,
      balanceLabel: "Balance"
  };
}

export default {
  name: "AddAccount",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      pageTitle: "Add Account",
      ...getDefaultData()
     
    };
  },

  computed: {
    ...mapGetters([
      "getDetails",
      "getTypes",
      "getTypeByID",
      "getDetailByTypeID",
      "getDescription"
    ])
  },
  methods: {
    ...mapActions(["clearDescription", "saveAccount", "setDescription"]),

    ...mapActions({
      actionFetchDetails: "fetchDetails",
      actionFetchTypes: "fetchTypes"
    }),

    resetForm() {
      Object.assign(this.$data, getDefaultData())
    },

      hide(){
           $('#add-account').modal('hide')
         },

    save() {
      this.processing = true,
      this.saveAccount(this.form)
        .then(() => {
         
          requestAnimationFrame(() => {
            this.$refs.observer.reset();
          });

          this.resetForm();
          this.hide()


        })
        .catch(() => {
          this.$refs.observer.setErrors(this.server_errors);
        }).finally( () => {
            this.processing = false
        })
    },

    getDetail(value) {
  
      if (value.id === 20) {
        this.balance = -this.balance;
      }

            console.log(value);


      this.toggleDetail(value, this.form.account_type_id);
      this.detail_description = value.description;
      this.form.detail_id = value.id;
    },

   

    fetchDetails(value) {
      this.detailLoading = true;
      this.form.account_type_id = value.id;
      this.detail_id = "";
      this.detail_description = "";
      this.toggleBalance(value);
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

    toggleBalance(obj) {
      const balance_sheet_id = obj.balance_sheet_type_id;

      if (
        obj.name == "Accounts payable (A/P)" ||
        obj.name == "Accounts receivable(A/R)"
      ) {
        this.show = false;
      } else if (obj.name == "Fixed assets") {
        this.balanceLabel = "Original Cost";

        this.show = true;
      } else if (balance_sheet_id !== null) {
        if (balance_sheet_id === 2) {
          //2 ==> liability
          this.balanceLabel = "Unpaid Balance";
        } else {
          this.balanceLabel = "Balance";
        }

        this.show = true;
      } else {
        this.show = false;
      }
    },

    toggleDetail(detail, type_id) {

      if (
        detail.accounts_name === "Accumulated depreciation"
      ) {
        
        this.balanceLabel = "Balance";
      } else {
        this.balanceLabel = "Original Cost";
      }
    },

        onModalShow(id) {
        
      $(id).on("show.bs.modal", e => {
          
       this.actionFetchTypes();
      });
    
  },
},
  mounted() {
        this.onModalShow("#add-account");

  }
}
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
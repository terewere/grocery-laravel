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
       
            <div class="col-md-6">
              <validation-provider name="name" rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="name">
                    Name
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" v-model="form.title" />
                </div>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" v-model="form.description" />
              </div>
               <div class="form-group">
                      <label for="Role">Status</label>
                      <multiselect
                        :options="['pending', 'rejected', 'approved']"
                        @select="selectStatusValue"
                        @remove="clearStatus"
                        v-model="form.status"
                        placeholder="Select Status"
                      ></multiselect>
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
      form: {
      },
      show: false,
  };
}

export default {
  name: "EditSpeaker",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      pageTitle: "Edit Speaker",
      ...getDefaultData()
     
    };
  },

  computed: {
    ...mapGetters([
      'getSpeaker'
    ])
  },
  methods: {
    ...mapActions([ "save"]),

    resetForm() {
      Object.assign(this.$data, getDefaultData())
    },

      hide(){
           $('#edit-account').modal('hide')
         },

    submit() {
        this.processing = true
        this.save({
        url: `speakers/${this.form.id}`,
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



      selectStatusValue(value) {
      this.form.status = value;
    },

    clearStatus(value) {
      this.form.status = '';
    },



      onModalShow(id) {
        
      $(id).on("show.bs.modal", e => {

     
        this.form =  {...this.getSpeaker}
  

       
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
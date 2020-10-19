<template>

<!-- Modal -->
<div class="modal fade" id="edit-status" tabindex="-1" role="dialog" aria-labelledby="edit-statusLabel" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="edit-statusLabel">{{pageTitle}}</h5>
        <button @click="hide" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <ValidationObserver ref="observer" v-slot="{invalid, passes }">
        <form @submit.prevent="passes(submit)"> 

                <textarea
                  v-model="form.message"
                  placeholder="Enter the notification message"
                  class="form-control"
                  rows="2"
                ></textarea>      

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
        message: ""
      },
      show: false,
  };
}

export default {
  name: "Editstatus",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      pageTitle: "Audio status",
      ...getDefaultData()
     
    };
  },

  computed: {
    ...mapGetters([
      'getAudio'
    ])
  },
  methods: {
    ...mapActions([ "save"]),

    resetForm() {
      Object.assign(this.$data, getDefaultData())
    },

      hide(){
           $('#edit-status').modal('hide')
         },

    submit() {
        this.processing = true
        this.save({
        url: `audio/status/${this.form.id}`,
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

    // getLanguages(){
    //   return [ "Hausa","Twi", "Ga","Ewe","Kotokoli","Dagbanli", "English"];
    // },

    getNotificationMessage(){
            let body = 'An Audio you submitted titled ' + this.form.title + ' by ' + this.form.feedTitle  + ' has been approved and published. Jazaakumullah Kharain.';
            return body;

    },
      selectStatusValue(value) {
      this.form.status = value;
    },

    clearStatus(value) {
      this.form.status = '';
    },




      onModalShow(id) {
        
      $(id).on("show.bs.modal", e => {

     
        this.form =  {...this.getAudio}
        this.form.message =  this.getNotificationMessage()
  

       
      });
    }
  },
  mounted() {
    this.onModalShow("#edit-status");

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
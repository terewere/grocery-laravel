<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="add-category"
    tabindex="-1"
    role="dialog"
    aria-labelledby="add-categoryLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="add-categoryLabel"
          >{{pageTitle}}</h5>
          <button @click="hide" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <ValidationObserver ref="observer" v-slot="{invalid, passes }">
              <form @submit.prevent="passes(submit)">
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-2">
                      <label for="label">
                        Label
                        <span class="text-danger">*</span>
                      </label>
                    </div>
                    <div class="col-md-8">
                      <validation-provider name="label" rules="required" v-slot="{ errors }">
                        <input
                          class="form-control input-sm"
                          placeholder="Enter Label"
                          v-model="form.label"
                          type="text"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                </div>

                <!-- <ValidationProvider
                      rules="required|image"
                      name="picture"
                      v-slot="{ validate, errors }"
                    >
                      <div class="text-center" style="margin: 0 auto;">
                        <p class="text-weight-bold">Click the image to upload passport picture</p>
                        <img
                          @click="choosePassPic"
                          class="image-input"
                          style="margin: 10px auto; display: block;"
                          id="picture"
                          :src="form.imgUrl || '/images/no-image.jpg'"
                          width="150"
                          height="auto"
                          alt="no image"
                        />

                        <input
                          @change="validate"
                          class="custom-file-input"
                          ref="filePic"
                          type="file"
                          @input="readPassPicURL"
                        />
                      </div>

                      <span class="text-danger text-center">{{ errors[0] }}</span>
                    </ValidationProvider> -->

                <ul class="nav mb-5">
                  <li class="nav-item ml-5">
                    <button :disabled="invalid||processing" type="submit" class="btn btn-success">
                      <i class="fas fa-save mr-2"></i>{{processing? 'Proccessing...' : 'Submit'}}
                    </button>
                  </li>
                </ul>
              </form>
            </ValidationObserver>
          </div>
          <!-- .container -->
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
    role: "",
    form: {
      label: "",
      imgUrl:""
    }
  };
}

export default {
  name: "AddCategory",

  components: {
    ValidationObserver,
    ValidationProvider
  },

  data() {
    return {
      pageTitle: "Add Category",

      ...getDefaultData()
    };
  },

  computed: {
  },
  methods: {
    ...mapActions(["save"]),

    resetForm: function() {
      Object.assign(this.$data, getDefaultData());
    },

    hide() {
      $("#add-category").modal("hide");
    },



    submit() {
      this.processing = true
      this.save({
        url: 'categories',
        data: this.form,
         method: 'post'
      })
        .then(() => {
          this.resetForm();
           this.hide();
          requestAnimationFrame(() => {
            this.$refs.observer.reset();
          });
        })
        .catch(() => {
          this.$refs.observer.setErrors(this.server_errors);
          this.$Progress.fail();
        })
         .finally(() => {
          this.processing = false;
        });
    },

  
 
  },

  mounted() {
    this.onModalShow("#add-category");
  },

};
</script>
<style scoped>
.image-input {
  cursor: pointer;
}
</style>

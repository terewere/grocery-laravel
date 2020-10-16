<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="edit-user"
    tabindex="-1"
    role="dialog"
    aria-labelledby="edit-userLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="edit-userLabel"
          >{{pageTitle}}</h5>
          <button @click="hideModal('#edit-user')" type="button" class="close" aria-label="Close">
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
                      <label for="surname">
                        Name
                        <span class="text-danger">*</span>
                      </label>
                    </div>
                    <div class="col-md-8">
                      <validation-provider name="name" rules="required" v-slot="{ errors }">
                        <input
                          class="form-control input-sm"
                          placeholder="Enter Name"
                          v-model="form.name"
                          type="text"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <div class="row">
                    <div class="col-md-2">
                      <label for="phone">
                        Phone
                        <span class="text-danger">*</span>
                      </label>
                    </div>
                    <div class="col-md-8">
                      <validation-provider
                        name="email"
                        rules="required|numeric|min:10"
                        v-slot="{ errors }"
                      >
                        <input
                          class="form-control input-sm"
                          placeholder="Enter Phone Number"
                          v-model="form.email"
                          readonly
                          type="text"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-2">
                      <label for="Password">Password</label>
                    </div>
                    <div class="col-md-8">
                      <validation-provider
                        name="Password"
                        rules="min:8"
                        vid="password"
                        v-slot="{ errors }"
                      >
                        <input
                          class="form-control input-sm"
                          placeholder="Enter Password"
                          v-model="form.password"
                          type="password"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-2">
                      <label for="Password Confirmation">Password Confirmation</label>
                    </div>
                    <div class="col-md-8">
                      <validation-provider
                        name="Password Confirmation"
                        rules="confirmed:password"
                        v-slot="{ errors }"
                      >
                        <input
                          class="form-control input-sm"
                          placeholder="Enter Password Confirmation"
                          v-model="form.password_confirmation"
                          type="password"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <div class="row">
                    <div class="col-md-2">
                      <label for="Role">Role</label>
                    </div>
                    <div class="col-md-8">
                      <multiselect
                        label="name"
                        :options="getRoles"
                        track-by="name"
                        @select="selectRoleValue"
                        @remove="clearRole"
                        v-model="role"
                        placeholder="Select Role"
                      ></multiselect>
                    </div>
                  </div>
                </div>

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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      status: "",
      role: ""
    }
  };
}

export default {
  name: "editUser",

  components: {
    ValidationObserver,
    ValidationProvider
  },

  data() {
    return {
      pageTitle: "Edit User",

      ...getDefaultData()
    };
  },

  computed: {
    ...mapGetters(["getRoles", "getUser"])
  },
  methods: {
    ...mapActions(["save"]),

    resetForm: function() {
      Object.assign(this.$data, getDefaultData());
    },


    submit() {
      this.processing = true
      this.save({
        url: `users/${this.getUser.id}`,
        data: this.form,
         method:'patch'
      })
        .then(() => {
           this.hideModal('#edit-user');
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

    selectRoleValue(value) {
      this.form.role = value.name;
    },

    clearRole(value) {
      this.form.role = '';
    },

    bootstrapping() {
      
            this.form = { ...this.getUser };
            this.role = {
              name: this.getUser.role
            };

    },

    onModalShow(id) {
      $(id).on("show.bs.modal", e => {
        this.bootstrapping();
      });
    },

  },

  mounted() {
    this.onModalShow("#edit-user");
  },

};
</script>
<style scoped>
.image-input {
  cursor: pointer;
}
</style>

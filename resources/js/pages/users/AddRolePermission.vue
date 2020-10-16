<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="role"
    tabindex="-1"
    role="dialog"
    aria-labelledby="roleLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="roleLabel">{{pageTitle}}</h5>
          <button @click="hide" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="form-group">
              <div class="row">
                <div class="col-md-6">
                  <ValidationObserver ref="observer" v-slot="{invalid, passes }">
                    <form @submit.prevent="passes(submit)">
                      <div class="form-group">
                        <label for="role">
                          Role
                          <span class="text-danger">*</span>
                        </label>
                        <validation-provider name="name" rules="required" v-slot="{ errors }">
                          <input
                            class="form-control input-sm"
                            placeholder="Enter Role"
                            v-model="form.name"
                            type="text"
                            required
                          />
                          <span class="text-danger">{{ errors[0] }}</span>
                        </validation-provider>
                      </div>
                      <table class="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th width="50" class="text-center">
                              <input type="checkbox" class="check-select-all-p" />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="permission in getPermissions" :key="permission.id">
                            <td>{{permission.name}}</td>
                            <td width="50" class="text-center">
                              <input
                                type="checkbox"
                                class="check-select-p"
                                :id="permission.id"
                                :value="permission.name"
                                v-model="form.permissions"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <ul class="nav mb-5">
                        <li class="nav-item ml-5">
                          <button :disabled="invalid || processing" type="submit" class="btn btn-success">
                            <i class="fas fa-save mr-2"></i>{{processing? 'Proccessing...' : 'Submit'}}
                          </button>
                        </li>
                      </ul>
                    </form>
                  </ValidationObserver>
                </div>
              </div>
            </div>
          </div>
          <!-- .container -->
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import { mapGetters, mapActions } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";

function getDefaultData() {
  return {
    processing: false,
    form: {
      name: "",
      permissions: []
    }
  };
}

export default {
  name: "Role",

  data() {
    return {
      pageTitle: "Add Role",
      ...getDefaultData()
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider
  },

  computed: {
    ...mapGetters(["getPermissions", "getRole"])
  },
  methods: {
    ...mapActions(["save", "FETCH_ROLES_PERMISSIONS"]),

    hide() {
      $("#role").modal("hide");
    },

    resetForm: function() {
      Object.assign(this.$data, getDefaultData());
    },

    submit() {
      this.$Progress.start();
      this.processing = true
      this.save({
        url: "roles",
        data: this.form
      })
        .then(() => {
          this.FETCH_ROLES_PERMISSIONS();
          this.resetForm();
          this.hide();

        })
        .catch(() => {
          this.$Progress.fail();
        })
         .finally(() => {
          this.processing = false;
          this.$Progress.finish();
        });
    }
  }
};
</script>
<style scoped>
.image-input {
  cursor: pointer;
}
</style>

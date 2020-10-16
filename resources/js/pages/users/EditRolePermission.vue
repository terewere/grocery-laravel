<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="permissions"
    tabindex="-1"
    role="dialog"
    aria-labelledby="permissionsLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="permissionsLabel">{{pageTitle}} : {{getRole.name}}</h5>
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
                      <i class="fas fa-save mr-2"></i>{{processing ? 'Processing...' :'Submit'}}
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
      name: '',
      permissions: []
    },
  };
}

export default {
  name: "Permissions",

  data() {
    return {
      pageTitle: "Permissions",
      newPilgrim: false,
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
      $("#permissions").modal("hide");
    },

    submit() {
          this.processing = true

      this.getRole.permissions = this.permissions;
      this.save({
        url: `roles/${this.getRole.id}`,
        method: "PATCH",
        data: this.form 
      })
        .then(() => {
          this.hide();
          this.FETCH_ROLES_PERMISSIONS();
        })

        .catch(() => {
          this.$Progress.fail();
        })
         .finally(() => {
          this.processing = false;
          this.$Progress.finish();
        });
    },

   



    onModalShow(id) {
      $(id).on("show.bs.modal", e => {
        // this.bootstrapping();

        const permissions = this.getRole.permissions.map(permission => {
          return permission.name;
        });

        this.form.permissions = permissions;
        this.form.name = this.getRole.name
      });
    }
  },
  mounted() {
    this.onModalShow("#permissions");

    // this.permissions.push('view_agents')
  },

  created() {
    // this.bootstrapping();
    // console.log(this.getAgency);
    //  if (this.pilgrim_id !=null && this.pilgrim_id !='') {
    //  console.log('here');
    //     this.FETCH_PILGRIM(this.pilgrim_id).then(data => {
    //   this.form = {...this.getPilgrim};
    // })
    //  }
  }
};
</script>
<style scoped>
.image-input {
  cursor: pointer;
}
</style>

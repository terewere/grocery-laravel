<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="user-permissions"
    tabindex="-1"
    role="dialog"
    aria-labelledby="user-permissionsLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="user-permissionsLabel">{{pageTitle}} : {{getUser.name}}</h5>
          <button @click="hideModal('#user-permissions')" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="form-group">
              <div class="row">
                <div class="col-sm-6">
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
                  <button :disabled="processing" @click="submit" class="btn btn-info btn-sm text-white">
                    <i class="fa fa-save"></i> {{processing?'Processing...' :'Submit'}}
                  </button>
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

function getDefaultData() {
  return {
    processing: false,
    form: {
      permissions: []
    },
  };
}

export default {
  name: "UserPermissions",

  data() {
    return {
      pageTitle: "User Permissions",
      newPilgrim: false,
      ...getDefaultData()
    };
  },

  computed: {
    ...mapGetters(["getPermissions", "getUser"])
  },
  methods: {
    ...mapActions(["save", 'fetchAllUsers']),



    submit() {
      this.processing = true
      this.save({
        url: `users/permissions/${this.getUser.id}`,
        method: "PATCH",
        data: { permissions: this.form.permissions }
      })
        .then(() => {
          this.fetchAllUsers();
        })

        .catch(() => {
          this.$Progress.fail();
        })
         .finally(() => {
          this.processing = false;
        });
    },

    selectAgencyValue(value) {
      this.form.agent_company = value.company_slug;
    },
    selectDesignationValue(value) {
      this.form.designation_id = value.id;
    },

 

    onModalShow(id) {
      $(id).on("show.bs.modal", e => {
        this.form.permissions = this.getUser.permissions;
      });
    },
       onModalHidden(id) {
      $(id).on("hidden.bs.modal", e => {
    this.$store.commit("SET_USER", {});

      });
    },
  },
  mounted() {
    this.onModalShow("#user-permissions");
    this.onModalHidden("#user-permissions");

  },


};
</script>
<style scoped>
.image-input {
  cursor: pointer;
}
</style>

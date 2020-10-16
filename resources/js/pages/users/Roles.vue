<template>
  <main-content>
    <template v-slot:left>
      <i class="fa fa-pray mr-2"></i>
      {{pageTitle}}
    </template>
    <template v-slot:right></template>
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="d-inline-block">
            <h3 class="card-title">
               <span class="d-none d-md-block float-left">{{this.pageTitle}}</span>
            </h3>
          </div>
          <div class="d-inline-block float-right">
            <button
              @click.prevent="showModal('#role')"
              class="text-white btn btn-success btn-sm"
            >
              <i class="fa fa-plus"></i> Add New Role
            </button>
          </div>
        </div>

        <div class="card-body">
          <table id="example2" class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Admin Role</th>
                <th>Permission</th>
                <th width="200">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="role in getRoles" :key="role.id">
                <td>{{role.name}}</td>

                <td>
                  <button @click="showRole('#permissions', role)" class="btn btn-info btn-xs mr5">
                    <i class="fas fa-2x fa-sliders-h"></i>
                  </button>
                </td>
                <td>
                  <button
                    @click="deleteRole(role.id)"
                    class="text-white btn btn-danger btn-xs"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Permissions />
    <Role />
  </main-content>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Permissions from "@/pages/users/EditRolePermission";
import Role from "@/pages/users/AddRolePermission";

export default {
  data() {
    return {
      pageTitle: "Role & Permissions"
    };
  },

  components: {
    Permissions,
    Role
  },

  computed: {
    ...mapGetters(["getRoles"])
  },

  methods: {
    ...mapActions(["FETCH_ROLES_PERMISSIONS", 'deleteItem']),

    showRole(id, role = null) {

     if (role) {

        this.$store.commit("SET_ROLE", role);
       
     }

      this.showModal(id)
    },

     deleteRole(id) {
      swal
        .fire({
          title: "Deleting a role",
          text:
            "You are about to delete a role.  Do you want to proceed?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
           if (result.value) {
                   
                  this.deleteItem({url: 'roles' + '/'+ id}).then(() => { 
                    this.FETCH_ROLES_PERMISSIONS();      
                
                })
                .catch(() => {
                  this.$Progress.fail();
                })
                }
        });
    }
  },

  created() {
    this.FETCH_ROLES_PERMISSIONS();
  }
};
</script>

<template>
  <main-content>
    <template v-slot:left>
      <i class="fa fa-briefcase mr-3"></i>
      {{pageTitle}}
    </template>
    <template v-slot:right></template>

    <div class="col-12">
      <div class="card card-outline">
        <div class="card-header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <span class="float-left d-none d-md-block">{{this.pageTitle}}</span>
                <button
                  :disabled="!isOnline"
                  type="button"
                  class="btn btn-success mr-2 btn-sm float-right"
                  @click="showModal('#add-user')"
                >Add User</button>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <div class="card-body table-responsive">
          <table class="table table-striped projects">
            <thead>
              <tr>
                <th style="width: 1%">#</th>
                <th>Photo</th>
                <th>Name</th>

                <th>Phone</th>
                <th>Role</th>
                <th>Permissions</th>
                <th class="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user,i) in getAllUsers" :key="i">
                <td>{{i+1}}</td>
                <td>
                  <avatar
                    class="mr-1 mt-1"
                    :image="getAuthPhoto(user)"
                    :fullname="user.name"
                    :size="50"
                    :key="user.name"
                  ></avatar>
                </td>

                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.role}}</td>
                <td>
                  <a @click="showUser('#user-permissions', user)" class="btn btn-info btn-xs mr5">
                    <i class="text-white fas fa-2x fa-sliders-h"></i>
                  </a>
                </td>

                <td class="project-actions text-right">
                  <a @click="showUser('#edit-user',user)" class="m-2 btn btn-secondary btn-sm" href="#">
                    <i class="fas fa-pencil-alt"></i>
                  </a>
                  <a @click="deleteUser(user.id)" class="m-2 btn btn-danger btn-sm" href="#">
                    <i class="fas fa-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Permissions />
    <EditUser />
  </main-content>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Avatar from "@/components/Avatar";
import Permissions from "@/pages/users/UserPermissions";
import EditUser from "@/pages/users/EditUser";

export default {
  components: {
    Avatar,
    Permissions,
    EditUser
  },

  data() {
    return {
      pageTitle: "Users",
      project: [],
      loaded: false
    };
  },
  methods: {
    ...mapActions(["fetchAllUsers", "FETCH_ROLES_PERMISSIONS", 'deleteItem']),

    getAuthPhoto(user) {
      if (user.photo) {
        return `/storage${user.photo}`;
      }
      return "";
    },


    showUser(id, user = null) {
      
      if (user) {
        this.$store.commit("SET_USER", user);
      }

      this.showModal(id)
    },

    deleteUser(id) {
      swal
        .fire({
          title: "Deleting a user",
          text: "You are about to delete a user.  Do you want to proceed?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {

            this.deleteItem({ url: "users" + "/" + id })
              .then(() => {
                this.fetchAllUsers();
              })
              .catch(() => {
                this.$Progress.fail();
              })
          }
        });
    }
  },

  computed: {
    ...mapGetters(["getAllUsers"])
  },
   mounted() {
    $("#edit-user").on("hidden.bs.modal", e => {
      this.fetchAllUsers();
    });
    $("#add-user").on("hidden.bs.modal", e => {
      this.fetchAllUsers();
    });
  },

  async created() {
    await this.fetchAllUsers();
    await this.FETCH_ROLES_PERMISSIONS();

    this.loaded = true;
  }
};
</script>
<style lang="scss" scoped>
.fa-sliders-h {
  cursor: pointer;
}
</style>
<template>
  <main-content>
    <template v-slot:left>
      <i class="fa fa-briefcase mr-3"></i>
      {{pageTitle}}
    </template>
    <template v-slot:right></template>

    <div class="col-md-12">
      <div class="card card-primary card-outline">
        <div class="card-header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <span class="float-left d-none d-md-block">{{this.pageTitle}}</span>
               
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <div class="card-body table-responsive">
          <div class="accounts">
            <div class="d-flex justify-content-between">
              <label class="d-flex">
                Show
                <select
                  v-model="getOrderData.length"
                  @change="getData()"
                  class="form-control mx-2"
                >
                  <option
                    v-for="(records, index) in perPage"
                    :key="index"
                    :value="records"
                  >{{records}}</option>
                </select>
                entries
              </label>
              <label>
                Search:
                <input
                  class="form-control"
                  type="text"
                  v-model="getOrderData.search"
                  placeholder="Search Table"
                  @input="getData()"
                />
              </label>
            </div>

            <table id="table" style="width:100%" class="mitable table table-striped table-bordered">
              <!-- display nowrap  -->
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="orders.length==0" class="odd"><td valign="top" colspan="9" class="text-center dataTables_empty">No data available in table</td></tr>

                <tr v-for="order in orders" :key="order.id">
                  <td>{{order.no}}</td>
                  <td><img style="display:block; margin: 0 auto;"
                id="imgUrl"
                :src="order.imgUrl || '/images/no-image.jpg'"
                width="100"
                height="auto"
                alt="no image"
              /></td>
                  <td>{{order.status}}</td>
                   <td>
                    <div id="del_el" class="btn-group">
                        <router-link :to="`/audio/${order.id}`">view</router-link>
                      <a
                        href
                        class="dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown"
                        data-reference="parent"
                      ></a>
                      <div class="dropdown-menu">
                      

                        <a
                          class="dropdown-item"
                          href
                          @click.prevent="showModal('#edit-status', order)"
                        >Update Status</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
             <div v-if="temploading" id="table_processing" class="dataTables_processing card" >Processing...</div>
            <Pagination
              :pagination="pagination"
              @prev="getData(pagination.prevPageUrl)"
              @next="getData(pagination.nextPageUrl)"
            ></Pagination>
            <!-- <button
              :disabled="!isOnline"
              @click.prevent="deleteMultiple"
              class="btn btn-danger btn-sm text-white"
            >
              <i class="fa fa-trash"></i> Delete Multiple
            </button> -->

            <EditOrder />
          </div>
        </div>
      </div>
    </div>
  </main-content>
</template>

<script>
import Pagination from "@/components/common/Pagination.vue";
import datatable from "./mixins/datatable";
import globalDatatableMixin from "@/plugins/mixins/tabledata.js";
import EditOrder from "./EditOrder";
import { mapActions, mapGetters } from "vuex";
export default {
  mixins: [datatable, globalDatatableMixin],

  components: {
    EditOrder,
    Pagination
  },

 

  computed: {
    ...mapGetters([ "getOrders"]),

  },


  data() {
 
    return {
      pageTitle: "Orders",
      url: "/orders",
      orders: [],

    };
  },
  methods: {
    ...mapActions(['fetchOrders']),
  
    showModal(id, order = null) {
      if (order) {
        this.$store.commit("SET_ORDER", order);
      }
      $(id).modal({
        show: true,
        backdrop: true
      });
    }
  },

  mounted() {
    this.destroyItem();
    this.onModalHidden("#add-account");
    this.onModalHidden("#edit-account");
  }
};
</script>
<style>
  /* @import "../../../sass/datatable.css"; */

</style>
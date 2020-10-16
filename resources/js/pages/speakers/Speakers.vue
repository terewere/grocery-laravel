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
                <button
                  :disabled="!isOnline"
                  type="button"
                  class="btn btn-success mr-2 btn-sm float-right"
                  @click="showModal('#add-account')"
                >Add Speaker</button>
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
                  v-model="getSpeakerData.length"
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
                  v-model="getSpeakerData.search"
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
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="speakers.length==0" class="odd"><td valign="top" colspan="9" class="text-center dataTables_empty">No data available in table</td></tr>

                <tr v-for="account in speakers" :key="account.id">
                  <td>{{account.no}}</td>
                  <td>{{account.title}}</td>
                  <td>
                    <div id="del_el" class="btn-group">
                        <router-link :to="`/audio/${account.id}`">Recordings</router-link>
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
                          @click.prevent="showModal('#edit-account', account)"
                        >Edit</a>
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

            <EditSpeaker />
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
import EditSpeaker from "./EditSpeaker";
import { mapActions, mapGetters } from "vuex";
export default {
  mixins: [datatable, globalDatatableMixin],

  components: {
    EditSpeaker,
    Pagination
  },

 

  computed: {
    ...mapGetters([ "getSpeakers"]),

  },


  data() {
 
    return {
      pageTitle: "Speakers",
      url: "/speakers",
      speakers: [],

    };
  },
  methods: {
    ...mapActions(['fetchSpeakers']),
  
    showModal(id, speaker = null) {
      if (speaker) {
        this.$store.commit("SET_SPEAKER", speaker);
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
<template>
  <div class="card card-primary card-outline">
    <div class="card-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <span class="float-left">{{this.tableTitle}}</span>
            <slot>
              <router-link
                v-for="(btn,i) in this.tableBtns"
                :key="i"
                :to="btn.url"
                class="btn btn-success mr-2 btn-sm float-right"
              >{{btn.text}}</router-link>
            </slot>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <div class="card-body table-responsive">
      <table id="table" class="table table-striped table-bordered">
        <!-- display nowrap  -->
        <thead>
          <tr>
            <th v-for="(column,i) in parameters.columns" :key="i" v-html="title(column)"></th>
          </tr>
        </thead>
        <tfoot v-if="footer">
          <tr>
            <th v-for="(column,i) in parameters.columns" :key="i" v-html="column.footer"></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataTable: {}
    };
  },

  methods: {
    title(column) {
      return column.title || this.titleCase(column.data);
    },
    titleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    selectAll() {
      console.log("select all");
    }
  },
  computed: {
    parameters() {
      return $.extend(
        {
          serverSide: this.serverSide,
          processing: true,
          order: [],
          iDisplayLength: 500
          // responsive: true,
          // columnDefs: [
          //     { responsivePriority: 1, targets: 0 },
          //     { responsivePriority: 2, targets: -1 }
          // ]
        },
        {
          ajax: {
            url: this.ajax,
            dataType: "json",
            type: "GET",
            beforeSend: function(xhr) {
              xhr.setRequestHeader(
                "Authorization",
                "Bearer " + localStorage.getItem("token")
              );
            }
          },
          columns: this.columns
        },
        this.options
      );
    }
  },
  props: {
    footer: { default: false },
    columns: { type: Array },
    ajax: { default: "" },
    options: {},
    tableTitle: { type: String },
    tableBtns: { type: Array, default: () => [] },
    serverSide: { type: Boolean, default: false }
  },
  mounted() {
    this.dataTable = $("#table").DataTable(this.parameters);
  },
  destroyed() {
    this.dataTable.destroy();
  }
};
</script>


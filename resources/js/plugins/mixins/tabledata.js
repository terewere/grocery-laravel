import { mapGetters, mapActions } from "vuex"

export default {

  computed: {
    ...mapGetters(["isOnline"]),

  },
  mounted() {
    $('#select_all').click(function () {
      $('input[type="checkbox"]').prop('checked', this.checked)

    })

  },


  destroyed() {
    EventBus.$off("DELETED");
  },

  methods: {
    ...mapActions(["destroyMultiple", "deleteItem"]),

 
    showModal(id, show = true, backdrop = true) {
      $(id).modal({
        show: show,
        backdrop: backdrop
      })
    },

    hideModal(id) {
      $(id).modal('hide')
    },

    onModalHidden(id) {
      const vm = this
      $(id).on('hidden.bs.modal', function (e) {
        vm.getData();
      })
    },

    destroyItem() {

      EventBus.$on("DELETED", id => {


        swal.fire({
          title: 'Deleting a record',
          text: "You are about to delete records. This action cannot be undone. Do you want to proceed?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {

            this.deleteItem({ url: this.url + '/' + id }).then(() => {

              this.getData();
            })
          }
        })

      });

    },

    deleteMultiple() {
      var selected_rows = [];
      $('input[name="selected"]:checked').each(function () {
        selected_rows.push(this.value);

      });
      if (selected_rows.length == 0) {
        swal.fire({ title: 'Select a record', text: 'Please select at least one item to delete' })

        return
      }
      swal.fire({
        title: 'Deleting a record',
        text: "You are about to delete records. This action cannot be undone. Do you want to proceed?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.destroyMultiple({ url: this.url, data: selected_rows }).then(() => {

            this.getData();
          })
        }
      })

    },



  }

}


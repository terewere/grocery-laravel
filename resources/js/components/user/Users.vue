<template>
            <main-content>
                <template v-slot:left>
                    <i class="fa fa-briefcase mr-3"></i> Chart of Accounts
                </template>
                <template v-slot:right>
                    <bread-crumb :list="['Home', 'Chart of Accounts']"></bread-crumb>
                </template>

                <div class="col-md-12">
                   
                <data-table 
                    :serverSide="serverSide"
                    :columns="columns" 
                    :ajax="'api/accounts/data'" 
                    :tableTitle="tableTitle"  
                    :tableBtns="tableBtns">
                </data-table>


 </div>

            </main-content>

</template>

<script type="text/ecmascript-6">

    import User from "./User.vue"
    import {mapGetters} from "vuex"

    export default {

  data() {
    return {
      errorMsg: null,
      mypath: null,
      serverSide: false,
      tableTitle: 'Chart of Accounts',
      tableBtns: [
          { url: '/profile', text: 'Add account'},
          { url: '/edit', text: 'Edit account'},
          { url: '/user', text: 'Add User'}
      ],
        columns: [
        { data: 'accounts_number' , name: 'accounts.accounts_number', "title": "Number"},
        {data: 'accounts_name', name: 'accounts.accounts_number', title: "Name"},
        {data: 'account_types_name', name: 'account_types.account_types_name', title: "Type"},
        {data: 'account_details_name', name: 'account_details.account_details_name', title: "Detail Type"},
        {data: 'amount', name: 'accounts.amount', title: "Balance"},
        {
            data: 'action',
            orderable: false,
            searchable: false,
            createdCell(cell, cellData, rowData) {
                let instance = new DeleteButton({
                    propsData: {
                    id: rowData.id,
                    mainBtn: {url: '/profile', text: 'Account history'},
                    dropDownBtn: [
                        {url: '/edit', text: 'Dashboard'},
                        {url: '/profile', text: 'Profile'},
                        {url: `/users/${rowData.id}`, text: 'Detail'}
                    ]
                },
                });
                instance.$mount();
                $(cell).empty().append(instance.$el);
            },
            defaultContent: ""
        },

            //            {
            //     data: "Action",
            //          orderable: false,
            //       searchable: false,                  
            //     render: function ( val, type, row ) {

            //               let instance = new DeleteButton({
            //               propsData: {
            //               id: row.id,
            //               mainBtn: {url: '/profile', text: 'Account history'},
            //               dropDownBtn: [
            //                   {url: '/dashboard', text: 'Dashboard'},
            //                   {url: '/profile', text: 'Profile'},
            //                   {url: `/users/${row.id}`, text: 'Detail'}
            //               ]
            //             },
            //           });
            //           instance.$mount();
                       
            //          return instance.$el.innerHTML

            //     },
            //     defaultContent: ""
            //   }
       
        ]
    }
  }, 


        components : {

            'user': User
        },

        computed: {
            filteredUsers(){
                return this.users.filter(user =>  user.id != this.authUser.id
                )
            },
            ...mapGetters ({
               users: 'getAllUsers'
        }),

        },

        methods: {

            goBack() {
                 window.history.length > 1
              ? this.$router.go(-1)
              : this.$router.push('/')
            }
        },
 

        //   beforeRouteEnter(to, from, next) {
//     if (to.query.redirectFrom === '/profile') {
//       next(vm => {
//         vm.errorMsg =
//           "Sorry, you don't have the right access to reach the  profile route requested"
//           vm.mypath = from.fullPath
//       })
//     } else {
//       next()
//     }
//   },

        // beforeRouteLeave (to, from, next) {
        //     const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        //     if (answer) {
        //         next()
        //     } else {
        //         next(false)
        //     }
        //     }

    }
</script>
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2XA9":function(t,e,s){var r=s("hzVw");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(t.exports=r.locals)},"4ibu":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".fa-sliders-h[data-v-31ce9c36] {\n  cursor: pointer;\n}",""])},N80c:function(t,e,s){"use strict";var r=s("wuG9");s.n(r).a},NvFb:function(t,e,s){"use strict";s.r(e);var r=s("o0o1"),a=s.n(r),o=s("L2JU"),n=s("m/BY");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={name:"UserPermissions",data:function(){return c({pageTitle:"User Permissions",newPilgrim:!1},{processing:!1,form:{permissions:[]}})},computed:c({},Object(o.c)(["getPermissions","getUser"])),methods:c(c({},Object(o.b)(["save","fetchAllUsers"])),{},{submit:function(){var t=this;this.processing=!0,this.save({url:"users/permissions/".concat(this.getUser.id),method:"PATCH",data:{permissions:this.form.permissions}}).then((function(){t.fetchAllUsers()})).catch((function(){t.$Progress.fail()})).finally((function(){t.processing=!1}))},selectAgencyValue:function(t){this.form.agent_company=t.company_slug},selectDesignationValue:function(t){this.form.designation_id=t.id},onModalShow:function(t){var e=this;$(t).on("show.bs.modal",(function(t){e.form.permissions=e.getUser.permissions}))},onModalHidden:function(t){var e=this;$(t).on("hidden.bs.modal",(function(t){e.$store.commit("SET_USER",{})}))}}),mounted:function(){this.onModalShow("#user-permissions"),this.onModalHidden("#user-permissions")}},u=(s("TIPw"),s("KHd+")),m=Object(u.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"user-permissions",tabindex:"-1",role:"dialog","aria-labelledby":"user-permissionsLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"user-permissionsLabel"}},[t._v(t._s(t.pageTitle)+" : "+t._s(t.getUser.name))]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.hideModal("#user-permissions")}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("table",{staticClass:"table table-bordered table-striped"},[t._m(0),t._v(" "),s("tbody",t._l(t.getPermissions,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",{staticClass:"text-center",attrs:{width:"50"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.permissions,expression:"form.permissions"}],staticClass:"check-select-p",attrs:{type:"checkbox",id:e.id},domProps:{value:e.name,checked:Array.isArray(t.form.permissions)?t._i(t.form.permissions,e.name)>-1:t.form.permissions},on:{change:function(s){var r=t.form.permissions,a=s.target,o=!!a.checked;if(Array.isArray(r)){var n=e.name,i=t._i(r,n);a.checked?i<0&&t.$set(t.form,"permissions",r.concat([n])):i>-1&&t.$set(t.form,"permissions",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form,"permissions",o)}}})])])})),0)]),t._v(" "),s("button",{staticClass:"btn btn-info btn-sm text-white",attrs:{disabled:t.processing},on:{click:t.submit}},[s("i",{staticClass:"fa fa-save"}),t._v(" "+t._s(t.processing?"Processing...":"Submit")+"\n                ")])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",{staticClass:"text-center",attrs:{width:"50"}},[e("input",{staticClass:"check-select-all-p",attrs:{type:"checkbox"}})])])])}],!1,null,"965458d6",null).exports,f=s("e7F3");function v(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(Object(s),!0).forEach((function(e){b(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function b(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var h={name:"editUser",components:{ValidationObserver:f.a,ValidationProvider:f.b},data:function(){return p({pageTitle:"Edit User"},{processing:!1,role:"",form:{name:"",email:"",password:"",password_confirmation:"",status:"",role:""}})},computed:p({},Object(o.c)(["getRoles","getUser"])),methods:p(p({},Object(o.b)(["save"])),{},{resetForm:function(){Object.assign(this.$data,{processing:!1,role:"",form:{name:"",email:"",password:"",password_confirmation:"",status:"",role:""}})},submit:function(){var t=this;this.processing=!0,this.save({url:"users/".concat(this.getUser.id),data:this.form,method:"patch"}).then((function(){t.hideModal("#edit-user"),requestAnimationFrame((function(){t.$refs.observer.reset()}))})).catch((function(){t.$refs.observer.setErrors(t.server_errors),t.$Progress.fail()})).finally((function(){t.processing=!1}))},selectRoleValue:function(t){this.form.role=t.name},clearRole:function(t){this.form.role=""},bootstrapping:function(){this.form=p({},this.getUser),this.role={name:this.getUser.role}},onModalShow:function(t){var e=this;$(t).on("show.bs.modal",(function(t){e.bootstrapping()}))}}),mounted:function(){this.onModalShow("#edit-user")}},_=(s("N80c"),Object(u.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"edit-user",tabindex:"-1",role:"dialog","aria-labelledby":"edit-userLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"edit-userLabel"}},[t._v(t._s(t.pageTitle))]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.hideModal("#edit-user")}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"container"},[s("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid,a=e.passes;return[s("form",{on:{submit:function(e){return e.preventDefault(),a(t.submit)}}},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("label",{attrs:{for:"surname"}},[t._v("\n                      Name\n                      "),s("span",{staticClass:"text-danger"},[t._v("*")])])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("validation-provider",{attrs:{name:"name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control input-sm",attrs:{placeholder:"Enter Name",type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("label",{attrs:{for:"phone"}},[t._v("\n                      Phone\n                      "),s("span",{staticClass:"text-danger"},[t._v("*")])])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("validation-provider",{attrs:{name:"email",rules:"required|numeric|min:10"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control input-sm",attrs:{placeholder:"Enter Phone Number",readonly:"",type:"text"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("label",{attrs:{for:"Password"}},[t._v("Password")])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("validation-provider",{attrs:{name:"Password",rules:"min:8",vid:"password"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control input-sm",attrs:{placeholder:"Enter Password",type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("label",{attrs:{for:"Password Confirmation"}},[t._v("Password Confirmation")])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("validation-provider",{attrs:{name:"Password Confirmation",rules:"confirmed:password"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control input-sm",attrs:{placeholder:"Enter Password Confirmation",type:"password"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("label",{attrs:{for:"Role"}},[t._v("Role")])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("multiselect",{attrs:{label:"name",options:t.getRoles,"track-by":"name",placeholder:"Select Role"},on:{select:t.selectRoleValue,remove:t.clearRole},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}})],1)])]),t._v(" "),s("ul",{staticClass:"nav mb-5"},[s("li",{staticClass:"nav-item ml-5"},[s("button",{staticClass:"btn btn-success",attrs:{disabled:r||t.processing,type:"submit"}},[s("i",{staticClass:"fas fa-save mr-2"}),t._v(t._s(t.processing?"Proccessing...":"Submit")+"\n                  ")])])])])]}}])})],1)])])])])}),[],!1,null,"43242d03",null).exports);function g(t,e,s,r,a,o,n){try{var i=t[o](n),c=i.value}catch(t){return void s(t)}i.done?e(c):Promise.resolve(c).then(r,a)}function w(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?w(Object(s),!0).forEach((function(e){y(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function y(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var O={components:{Avatar:n.a,Permissions:m,EditUser:_},data:function(){return{pageTitle:"Users",project:[],loaded:!1}},methods:C(C({},Object(o.b)(["fetchAllUsers","FETCH_ROLES_PERMISSIONS","deleteItem"])),{},{getAuthPhoto:function(t){return t.photo?"/storage".concat(t.photo):""},showUser:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&this.$store.commit("SET_USER",e),this.showModal(t)},deleteUser:function(t){var e=this;swal.fire({title:"Deleting a user",text:"You are about to delete a user.  Do you want to proceed?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(s){s.value&&e.deleteItem({url:"users/"+t}).then((function(){e.fetchAllUsers()})).catch((function(){e.$Progress.fail()}))}))}}),computed:C({},Object(o.c)(["getAllUsers"])),mounted:function(){var t=this;$("#edit-user").on("hidden.bs.modal",(function(e){t.fetchAllUsers()})),$("#add-user").on("hidden.bs.modal",(function(e){t.fetchAllUsers()}))},created:function(){var t,e=this;return(t=a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAllUsers();case 2:return t.next=4,e.FETCH_ROLES_PERMISSIONS();case 4:e.loaded=!0;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(r,a){var o=t.apply(e,s);function n(t){g(o,r,a,n,i,"next",t)}function i(t){g(o,r,a,n,i,"throw",t)}n(void 0)}))})()}},P=(s("OIjX"),Object(u.a)(O,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main-content",{scopedSlots:t._u([{key:"left",fn:function(){return[s("i",{staticClass:"fa fa-briefcase mr-3"}),t._v("\n    "+t._s(t.pageTitle)+"\n  ")]},proxy:!0},{key:"right",fn:function(){},proxy:!0}])},[t._v(" "),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"card card-outline"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("span",{staticClass:"float-left d-none d-md-block"},[t._v(t._s(this.pageTitle))]),t._v(" "),s("button",{staticClass:"btn btn-success mr-2 btn-sm float-right",attrs:{disabled:!t.isOnline,type:"button"},on:{click:function(e){return t.showModal("#add-user")}}},[t._v("Add User")])])])])]),t._v(" "),s("div",{staticClass:"card-body table-responsive"},[s("table",{staticClass:"table table-striped projects"},[s("thead",[s("tr",[s("th",{staticStyle:{width:"1%"}},[t._v("#")]),t._v(" "),s("th",[t._v("Photo")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Phone")]),t._v(" "),s("th",[t._v("Role")]),t._v(" "),s("th",[t._v("Permissions")]),t._v(" "),s("th",{staticClass:"text-right"},[t._v("Action")])])]),t._v(" "),s("tbody",t._l(t.getAllUsers,(function(e,r){return s("tr",{key:r},[s("td",[t._v(t._s(r+1))]),t._v(" "),s("td",[s("avatar",{key:e.name,staticClass:"mr-1 mt-1",attrs:{image:t.getAuthPhoto(e),fullname:e.name,size:50}})],1),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[t._v(t._s(e.role))]),t._v(" "),s("td",[s("a",{staticClass:"btn btn-info btn-xs mr5",on:{click:function(s){return t.showUser("#user-permissions",e)}}},[s("i",{staticClass:"text-white fas fa-2x fa-sliders-h"})])]),t._v(" "),s("td",{staticClass:"project-actions text-right"},[s("a",{staticClass:"m-2 btn btn-secondary btn-sm",attrs:{href:"#"},on:{click:function(s){return t.showUser("#edit-user",e)}}},[s("i",{staticClass:"fas fa-pencil-alt"})]),t._v(" "),s("a",{staticClass:"m-2 btn btn-danger btn-sm",attrs:{href:"#"},on:{click:function(s){return t.deleteUser(e.id)}}},[s("i",{staticClass:"fas fa-trash"})])])])})),0)])])])]),t._v(" "),s("Permissions"),t._v(" "),s("EditUser")],1)}),[],!1,null,"31ce9c36",null));e.default=P.exports},OIjX:function(t,e,s){"use strict";var r=s("m9eu");s.n(r).a},TIPw:function(t,e,s){"use strict";var r=s("2XA9");s.n(r).a},hzVw:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.image-input[data-v-965458d6] {\n  cursor: pointer;\n}\n",""])},m9eu:function(t,e,s){var r=s("4ibu");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(t.exports=r.locals)},vvRa:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.image-input[data-v-43242d03] {\n  cursor: pointer;\n}\n",""])},wuG9:function(t,e,s){var r=s("vvRa");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(t.exports=r.locals)}}]);
//# sourceMappingURL=users.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2IBg":function(t,e,n){var a=n("afGO");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(t.exports=a.locals)},"3D3f":function(t,e,n){var a=n("kLqX");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(t.exports=a.locals)},"3OQj":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".pagination {\n  justify-content: flex-end !important;\n}\n.pagination .page-stats {\n  align-items: center;\n  margin-right: 5px;\n}\n.pagination i {\n  color: #3273dc !important;\n}",""])},"9w1w":function(t,e,n){"use strict";n.r(e);var a=n("mAkd"),i=n("o0o1"),o=n.n(i),r=n("L2JU");n("U5ez");function s(t,e,n,a,i,o,r){try{var s=t[o](r),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,i)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){var t={},e=[{width:"33%",label:"Deadline",name:"deadline"},{width:"33%",label:"Budget",name:"budget"},{width:"33%",label:"Status",name:"status"}];return e.forEach((function(e){t[e.name]=-1})),{columns:e,sortKey:"deadline",sortOrders:t,perPage:["10","20","30","100","500"],pagination:{lastPage:"",currentPage:"",total:"",lastPageUrl:"",nextPageUrl:"",prevPageUrl:"",from:"",to:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(r.c)(["getAudioData"])),created:function(){this.getData()},methods:{getData:function(){var t,e=this;return(t=o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAudios({url:e.url,feed_id:e.$route.params.audio});case 2:e.mergeData();case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function r(t){s(o,a,i,r,c,"next",t)}function c(t){s(o,a,i,r,c,"throw",t)}r(void 0)}))})()},mergeData:function(){var t=this.getAudios;if(this.getAudioData.draw==t.meta.draw){for(var e=t.data,n=0;n<e.length;n++)e[n].no=n+1;this.audios=e,this.configPagination(t)}},configPagination:function(t){this.pagination.lastPage=t.meta.last_page,this.pagination.currentPage=t.meta.current_page,this.pagination.total=t.meta.total,this.pagination.lastPageUrl=t.links.last,this.pagination.nextPageUrl=t.links.next,this.pagination.prevPageUrl=t.links.prev,this.pagination.from=t.meta.from,this.pagination.to=t.meta.to},sortBy:function(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t],this.getAudioData.column=this.getIndex(this.columns,"name",t),this.getAudioData.dir=1===this.sortOrders[t]?"asc":"desc",this.getData()},getIndex:function(t,e,n){return t.findIndex((function(t){return t[e]==n}))}}},d=n("Ce7o"),f=n("e7F3");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"EditAudio",components:{ValidationObserver:f.a,ValidationProvider:f.b},data:function(){return g({pageTitle:"Edit Audio"},{processing:!1,form:{},show:!1})},computed:g({},Object(r.c)(["getAudio"])),methods:g(g({},Object(r.b)(["save"])),{},{resetForm:function(){Object.assign(this.$data,{processing:!1,form:{},show:!1})},hide:function(){$("#edit-account").modal("hide")},submit:function(){var t=this;console.log(this.form),this.processing=!0,this.save({url:"audio/".concat(this.form.id),method:"PATCH",data:this.form}).then((function(){t.hide(),requestAnimationFrame((function(){t.$refs.observer.reset()}))})).catch((function(){t.$refs.observer.setErrors(t.server_errors)})).finally((function(){t.processing=!1}))},getLanguages:function(){return["Hausa","Twi","Ga","Ewe","Kotokoli","Dagbanli","English"]},selectLanguageValue:function(t){this.form.status=t},clearLanguage:function(t){this.form.status=""},onModalShow:function(t){var e=this;$(t).on("show.bs.modal",(function(t){e.form=g({},e.getAudio)}))}}),mounted:function(){this.onModalShow("#edit-account")}},b=(n("LmCx"),n("KHd+")),h=Object(b.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"edit-account",tabindex:"-1",role:"dialog","aria-labelledby":"edit-accountLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"edit-accountLabel"}},[t._v(t._s(t.pageTitle))]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.hide}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid,i=e.passes;return[n("form",{on:{submit:function(e){return e.preventDefault(),i(t.submit)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("validation-provider",{attrs:{name:"name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("\n                    title\n                    "),n("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),t._v(" "),n("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)}),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"Role"}},[t._v("Language")]),t._v(" "),n("multiselect",{attrs:{options:t.getLanguages(),placeholder:"Select Language"},on:{select:t.selectLanguageValue,remove:t.clearLanguage},model:{value:t.form.language,callback:function(e){t.$set(t.form,"language",e)},expression:"form.language"}})],1)],1)]),t._v(" "),n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-12 col-md-2"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:a||t.processing,type:"submit"}},[t._v("\n               "+t._s(t.processing?"Processing...":"update")+"\n              ")])]),t._v(" "),n("div",{staticClass:"col-0 col-md-10"})])])]}}])})],1)])])])}),[],!1,null,"de7f5542",null).exports;function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w={name:"Editstatus",components:{ValidationObserver:f.a,ValidationProvider:f.b},data:function(){return O({pageTitle:"Audio status"},{processing:!1,form:{message:""},show:!1})},computed:O({},Object(r.c)(["getAudio"])),methods:O(O({},Object(r.b)(["save"])),{},{resetForm:function(){Object.assign(this.$data,{processing:!1,form:{message:""},show:!1})},hide:function(){$("#edit-status").modal("hide")},submit:function(){var t=this;this.processing=!0,this.save({url:"audio/status/".concat(this.form.id),method:"PATCH",data:this.form}).then((function(){t.hide(),requestAnimationFrame((function(){t.$refs.observer.reset()}))})).catch((function(){t.$refs.observer.setErrors(t.server_errors)})).finally((function(){t.processing=!1}))},getNotificationMessage:function(){return"An Audio you submitted titled "+this.form.title+" by "+this.form.feedTitle+" has been approved and published. Jazaakumullah Kharain."},selectStatusValue:function(t){this.form.status=t},clearStatus:function(t){this.form.status=""},onModalShow:function(t){var e=this;$(t).on("show.bs.modal",(function(t){e.form=O({},e.getAudio),e.form.message=e.getNotificationMessage()}))}}),mounted:function(){this.onModalShow("#edit-status")}},C=(n("TmXI"),Object(b.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"edit-status",tabindex:"-1",role:"dialog","aria-labelledby":"edit-statusLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"edit-statusLabel"}},[t._v(t._s(t.pageTitle))]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.hide}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid,i=e.passes;return[n("form",{on:{submit:function(e){return e.preventDefault(),i(t.submit)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{placeholder:"Enter the notification message",rows:"2"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"Role"}},[t._v("Status")]),t._v(" "),n("multiselect",{attrs:{options:["pending","rejected","approved"],placeholder:"Select Status"},on:{select:t.selectStatusValue,remove:t.clearStatus},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),t._v(" "),n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-12 col-md-2"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:a||t.processing,type:"submit"}},[t._v("\n               "+t._s(t.processing?"Processing...":"update")+"\n              ")])]),t._v(" "),n("div",{staticClass:"col-0 col-md-10"})])])]}}])})],1)])])])}),[],!1,null,"147c7f56",null).exports);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var D={mixins:[u,d.a],components:{EditAudio:h,EditStatus:C,Pagination:a.a},computed:j({},Object(r.c)(["getAudios"])),data:function(){return{pageTitle:"Audio",url:"/audio",audios:[]}},methods:j(j({},Object(r.b)(["fetchAudios"])),{},{showModal:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&this.$store.commit("SET_AUDIO",e),$(t).modal({show:!0,backdrop:!0})}}),mounted:function(){this.destroyItem(),this.onModalHidden("#add-account"),this.onModalHidden("#edit-account"),this.onModalHidden("#edit-status")}},k=(n("hctj"),Object(b.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-content",{scopedSlots:t._u([{key:"left",fn:function(){return[n("i",{staticClass:"fa fa-briefcase mr-3"}),t._v("\n    "+t._s(t.pageTitle)+"\n  ")]},proxy:!0},{key:"right",fn:function(){},proxy:!0}])},[t._v(" "),t._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card card-primary card-outline"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("span",{staticClass:"float-left d-none d-md-block"},[t._v(t._s(this.pageTitle))]),t._v(" "),n("button",{staticClass:"btn btn-success mr-2 btn-sm float-right",attrs:{disabled:!t.isOnline,type:"button"},on:{click:function(e){return t.showModal("#add-account")}}},[t._v("Add Speaker")])])])])]),t._v(" "),n("div",{staticClass:"card-body table-responsive"},[n("div",{staticClass:"accounts"},[n("div",{staticClass:"d-flex justify-content-between"},[n("label",{staticClass:"d-flex"},[t._v("\n              Show\n              "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.getAudioData.length,expression:"getAudioData.length"}],staticClass:"form-control mx-2",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.getAudioData,"length",e.target.multiple?n:n[0])},function(e){return t.getData()}]}},t._l(t.perPage,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])})),0),t._v("\n              entries\n            ")]),t._v(" "),n("label",[t._v("\n              Search:\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.getAudioData.search,expression:"getAudioData.search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search Table"},domProps:{value:t.getAudioData.search},on:{input:[function(e){e.target.composing||t.$set(t.getAudioData,"search",e.target.value)},function(e){return t.getData()}]}})])]),t._v(" "),n("table",{staticClass:"mitable table table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"table"}},[n("thead",[n("tr",[n("th",[t._v("Count")]),t._v(" "),n("th",[t._v("Title")]),t._v(" "),n("th",[t._v("Language")]),t._v(" "),n("th",[t._v("Action")])])]),t._v(" "),n("tbody",[0==t.audios.length?n("tr",{staticClass:"odd"},[n("td",{staticClass:"text-center dataTables_empty",attrs:{valign:"top",colspan:"9"}},[t._v("No data available in table")])]):t._e(),t._v(" "),t._l(t.audios,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.no))]),t._v(" "),n("td",[t._v(t._s(e.title))]),t._v(" "),n("td",[t._v(t._s(e.language))]),t._v(" "),n("td",[n("div",{staticClass:"btn-group",attrs:{id:"del_el"}},[n("router-link",{attrs:{to:"/audio/"+e.id}},[t._v("Recordings")]),t._v(" "),n("a",{staticClass:"dropdown-toggle dropdown-toggle-split",attrs:{href:"","data-toggle":"dropdown","data-reference":"parent"}}),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(n){return n.preventDefault(),t.showModal("#edit-account",e)}}},[t._v("Edit")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(n){return n.preventDefault(),t.showModal("#edit-status",e)}}},[t._v("Update Status")])])],1)])])}))],2)]),t._v(" "),t.temploading?n("div",{staticClass:"dataTables_processing card",attrs:{id:"table_processing"}},[t._v("Processing...")]):t._e(),t._v(" "),n("Pagination",{attrs:{pagination:t.pagination},on:{prev:function(e){return t.getData(t.pagination.prevPageUrl)},next:function(e){return t.getData(t.pagination.nextPageUrl)}}}),t._v(" "),n("EditAudio"),t._v(" "),n("EditStatus")],1)])])])])}),[],!1,null,null,null));e.default=k.exports},Ce7o:function(t,e,n){"use strict";var a=n("L2JU");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={computed:o({},Object(a.c)(["isOnline"])),mounted:function(){$("#select_all").click((function(){$('input[type="checkbox"]').prop("checked",this.checked)}))},destroyed:function(){EventBus.$off("DELETED")},methods:o(o({},Object(a.b)(["destroyMultiple","deleteItem"])),{},{showModal:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];$(t).modal({show:e,backdrop:n})},hideModal:function(t){$(t).modal("hide")},onModalHidden:function(t){var e=this;$(t).on("hidden.bs.modal",(function(t){e.getData()}))},destroyItem:function(){var t=this;EventBus.$on("DELETED",(function(e){swal.fire({title:"Deleting a record",text:"You are about to delete records. This action cannot be undone. Do you want to proceed?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&t.deleteItem({url:t.url+"/"+e}).then((function(){t.getData()}))}))}))},deleteMultiple:function(){var t=this,e=[];$('input[name="selected"]:checked').each((function(){e.push(this.value)})),0!=e.length?swal.fire({title:"Deleting a record",text:"You are about to delete records. This action cannot be undone. Do you want to proceed?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&t.destroyMultiple({url:t.url,data:e}).then((function(){t.getData()}))})):swal.fire({title:"Select a record",text:"Please select at least one item to delete"})}})}},LmCx:function(t,e,n){"use strict";var a=n("2IBg");n.n(a).a},Mddp:function(t,e,n){var a=n("3OQj");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(t.exports=a.locals)},Qf5g:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n#detail_desc[data-v-147c7f56] {\n  width: 95%;\n  min-height: 250px;\n  border: 2px solid lightgray;\n  background: #f8fafc;\n  padding: 1em;\n}\n",""])},TmXI:function(t,e,n){"use strict";var a=n("wvrV");n.n(a).a},UdMg:function(t,e,n){"use strict";var a=n("Mddp");n.n(a).a},afGO:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n#detail_desc[data-v-de7f5542] {\n  width: 95%;\n  min-height: 250px;\n  border: 2px solid lightgray;\n  background: #f8fafc;\n  padding: 1em;\n}\n",""])},hctj:function(t,e,n){"use strict";var a=n("3D3f");n.n(a).a},kLqX:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* @import "../../../sass/datatable.css"; */\n\n',""])},mAkd:function(t,e,n){"use strict";var a={props:["pagination","client","filtered"]},i=(n("UdMg"),n("KHd+")),o=n("sqhZ"),r=n.n(o),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.client?n("nav",{staticClass:"pagination"},[n("ul",{staticClass:"pagination"},[n("span",{staticClass:"page-stats"},[t._v("\n            "+t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" of "+t._s(t.filtered.length)+"\n            "),t.filtered.length<t.pagination.total?n("span",[t._v("(filtered from "+t._s(t.pagination.total)+" total entries)")]):t._e()]),t._v(" "),t.pagination.prevPage?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return t.$emit("prev")}}},[t._v("\n            Prev\n        ")])]):n("li",{staticClass:"page-item",attrs:{disabled:!0}},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("\n           Prev\n        ")])]),t._v(" "),t.pagination.nextPage?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return t.$emit("next")}}},[t._v("\n            Next\n        ")])]):n("li",{staticClass:"page-item",attrs:{disabled:!0}},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("\n            Next\n        ")])])])]):n("nav",[n("ul",{staticClass:"pagination"},[n("span",{staticClass:"page-stats"},[t._v(t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" of "+t._s(t.pagination.total))]),t._v(" "),t.pagination.prevPageUrl?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",on:{click:function(e){return t.$emit("prev")}}},[t._v("\n            Prev\n        ")])]):n("li",{staticClass:"page-item",attrs:{disabled:!0}},[n("a",{staticClass:"page-link"},[t._v("\n           Prev\n        ")])]),t._v(" "),t.pagination.nextPageUrl?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",on:{click:function(e){return t.$emit("next")}}},[t._v("\n            Next\n        ")])]):n("li",{staticClass:"page-item",attrs:{disabled:!0}},[n("a",{staticClass:"page-link"},[t._v("\n            Next\n        ")])])])])}),[],!1,null,null,null);"function"==typeof r.a&&r()(s);e.a=s.exports},sqhZ:function(t,e){},wvrV:function(t,e,n){var a=n("Qf5g");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(t.exports=a.locals)}}]);
//# sourceMappingURL=Audios.js.map
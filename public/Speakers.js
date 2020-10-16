(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3OQj":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".pagination {\n  justify-content: flex-end !important;\n}\n.pagination .page-stats {\n  align-items: center;\n  margin-right: 5px;\n}\n.pagination i {\n  color: #3273dc !important;\n}",""])},"42Wc":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n#detail_desc[data-v-b99be180] {\n  width: 95%;\n  min-height: 250px;\n  border: 2px solid lightgray;\n  background: #f8fafc;\n  padding: 1em;\n}\n",""])},"A/qg":function(t,e,n){"use strict";n.r(e);var a=n("mAkd"),r=n("o0o1"),i=n.n(r),o=n("L2JU");function s(t,e,n,a,r,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,r)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function o(t){s(i,a,r,o,c,"next",t)}function c(t){s(i,a,r,o,c,"throw",t)}o(void 0)}))}}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={data:function(){var t={},e=[{width:"33%",label:"Deadline",name:"deadline"},{width:"33%",label:"Budget",name:"budget"},{width:"33%",label:"Status",name:"status"}];return e.forEach((function(e){t[e.name]=-1})),{columns:e,sortKey:"deadline",sortOrders:t,perPage:["10","20","30","100","500"],pagination:{lastPage:"",currentPage:"",total:"",lastPageUrl:"",nextPageUrl:"",prevPageUrl:"",from:"",to:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(o.c)(["getSpeakerData"])),created:function(){var t=this;return c(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t.getSpeakers.length){e.next=3;break}return e.next=3,t.fetchSpeakers();case 3:t.mergeData();case 4:case"end":return e.stop()}}),e)})))()},methods:{getData:function(){var t=arguments,e=this;return c(i.a.mark((function n(){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:e.url,n.next=3,e.fetchSpeakers(a);case 3:e.mergeData();case 4:case"end":return n.stop()}}),n)})))()},mergeData:function(){var t=this.getSpeakers;if(this.getSpeakerData.draw==t.meta.draw){for(var e=t.data,n=0;n<e.length;n++)e[n].no=n+1;this.speakers=e,this.configPagination(t)}},configPagination:function(t){this.pagination.lastPage=t.meta.last_page,this.pagination.currentPage=t.meta.current_page,this.pagination.total=t.meta.total,this.pagination.lastPageUrl=t.links.last,this.pagination.nextPageUrl=t.links.next,this.pagination.prevPageUrl=t.links.prev,this.pagination.from=t.meta.from,this.pagination.to=t.meta.to},sortBy:function(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t],this.getSpeakerData.column=this.getIndex(this.columns,"name",t),this.getSpeakerData.dir=1===this.sortOrders[t]?"asc":"desc",this.getData()},getIndex:function(t,e,n){return t.findIndex((function(t){return t[e]==n}))}}},p=n("Ce7o"),f=n("e7F3");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b={name:"EditSpeaker",components:{ValidationObserver:f.a,ValidationProvider:f.b},data:function(){return g({pageTitle:"Edit Speaker"},{processing:!1,form:{},show:!1})},computed:g({},Object(o.c)(["getSpeaker"])),methods:g(g({},Object(o.b)(["save"])),{},{resetForm:function(){Object.assign(this.$data,{processing:!1,form:{},show:!1})},hide:function(){$("#edit-account").modal("hide")},submit:function(){var t=this;this.processing=!0,this.save({url:"speakers/".concat(this.form.id),method:"PATCH",data:this.form}).then((function(){t.hide(),requestAnimationFrame((function(){t.$refs.observer.reset()}))})).catch((function(){t.$refs.observer.setErrors(t.server_errors)})).finally((function(){t.processing=!1}))},selectStatusValue:function(t){this.form.status=t},clearStatus:function(t){this.form.status=""},onModalShow:function(t){var e=this;$(t).on("show.bs.modal",(function(t){e.form=g({},e.getSpeaker)}))}}),mounted:function(){this.onModalShow("#edit-account")}},h=(n("oqyk"),n("KHd+")),_=Object(h.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"edit-account",tabindex:"-1",role:"dialog","aria-labelledby":"edit-accountLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"edit-accountLabel"}},[t._v(t._s(t.pageTitle))]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.hide}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid,r=e.passes;return[n("form",{on:{submit:function(e){return e.preventDefault(),r(t.submit)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("validation-provider",{attrs:{name:"name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("\n                    Name\n                    "),n("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),t._v(" "),n("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)}),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"description"}},[t._v("Description")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"Role"}},[t._v("Status")]),t._v(" "),n("multiselect",{attrs:{options:["pending","rejected","approved"],placeholder:"Select Status"},on:{select:t.selectStatusValue,remove:t.clearStatus},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1)]),t._v(" "),n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-12 col-md-2"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:a||t.processing,type:"submit"}},[t._v("\n               "+t._s(t.processing?"Processing...":"update")+"\n              ")])]),t._v(" "),n("div",{staticClass:"col-0 col-md-10"})])])]}}])})],1)])])])}),[],!1,null,"b99be180",null).exports;function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k={mixins:[d,p.a],components:{EditSpeaker:_,Pagination:a.a},computed:O({},Object(o.c)(["getSpeakers"])),data:function(){return{pageTitle:"Speakers",url:"/speakers",speakers:[]}},methods:O(O({},Object(o.b)(["fetchSpeakers"])),{},{showModal:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&this.$store.commit("SET_SPEAKER",e),$(t).modal({show:!0,backdrop:!0})}}),mounted:function(){this.destroyItem(),this.onModalHidden("#add-account"),this.onModalHidden("#edit-account")}},C=(n("nTZx"),Object(h.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-content",{scopedSlots:t._u([{key:"left",fn:function(){return[n("i",{staticClass:"fa fa-briefcase mr-3"}),t._v("\n    "+t._s(t.pageTitle)+"\n  ")]},proxy:!0},{key:"right",fn:function(){},proxy:!0}])},[t._v(" "),t._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card card-primary card-outline"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("span",{staticClass:"float-left d-none d-md-block"},[t._v(t._s(this.pageTitle))]),t._v(" "),n("button",{staticClass:"btn btn-success mr-2 btn-sm float-right",attrs:{disabled:!t.isOnline,type:"button"},on:{click:function(e){return t.showModal("#add-account")}}},[t._v("Add Speaker")])])])])]),t._v(" "),n("div",{staticClass:"card-body table-responsive"},[n("div",{staticClass:"accounts"},[n("div",{staticClass:"d-flex justify-content-between"},[n("label",{staticClass:"d-flex"},[t._v("\n              Show\n              "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.getSpeakerData.length,expression:"getSpeakerData.length"}],staticClass:"form-control mx-2",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.getSpeakerData,"length",e.target.multiple?n:n[0])},function(e){return t.getData()}]}},t._l(t.perPage,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])})),0),t._v("\n              entries\n            ")]),t._v(" "),n("label",[t._v("\n              Search:\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.getSpeakerData.search,expression:"getSpeakerData.search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search Table"},domProps:{value:t.getSpeakerData.search},on:{input:[function(e){e.target.composing||t.$set(t.getSpeakerData,"search",e.target.value)},function(e){return t.getData()}]}})])]),t._v(" "),n("table",{staticClass:"mitable table table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"table"}},[n("thead",[n("tr",[n("th",[t._v("Count")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Action")])])]),t._v(" "),n("tbody",[0==t.speakers.length?n("tr",{staticClass:"odd"},[n("td",{staticClass:"text-center dataTables_empty",attrs:{valign:"top",colspan:"9"}},[t._v("No data available in table")])]):t._e(),t._v(" "),t._l(t.speakers,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.no))]),t._v(" "),n("td",[t._v(t._s(e.title))]),t._v(" "),n("td",[n("div",{staticClass:"btn-group",attrs:{id:"del_el"}},[n("router-link",{attrs:{to:"/audio/"+e.id}},[t._v("Recordings")]),t._v(" "),n("a",{staticClass:"dropdown-toggle dropdown-toggle-split",attrs:{href:"","data-toggle":"dropdown","data-reference":"parent"}}),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(n){return n.preventDefault(),t.showModal("#edit-account",e)}}},[t._v("Edit")])])],1)])])}))],2)]),t._v(" "),t.temploading?n("div",{staticClass:"dataTables_processing card",attrs:{id:"table_processing"}},[t._v("Processing...")]):t._e(),t._v(" "),n("Pagination",{attrs:{pagination:t.pagination},on:{prev:function(e){return t.getData(t.pagination.prevPageUrl)},next:function(e){return t.getData(t.pagination.nextPageUrl)}}}),t._v(" "),n("EditSpeaker")],1)])])])])}),[],!1,null,null,null));e.default=C.exports},CCgx:function(t,e,n){var a=n("42Wc");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,r);a.locals&&(t.exports=a.locals)},Ce7o:function(t,e,n){"use strict";var a=n("L2JU");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={computed:i({},Object(a.c)(["isOnline"])),mounted:function(){$("#select_all").click((function(){$('input[type="checkbox"]').prop("checked",this.checked)}))},destroyed:function(){EventBus.$off("DELETED")},methods:i(i({},Object(a.b)(["destroyMultiple","deleteItem"])),{},{showModal:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];$(t).modal({show:e,backdrop:n})},hideModal:function(t){$(t).modal("hide")},onModalHidden:function(t){var e=this;$(t).on("hidden.bs.modal",(function(t){e.getData()}))},destroyItem:function(){var t=this;EventBus.$on("DELETED",(function(e){swal.fire({title:"Deleting a record",text:"You are about to delete records. This action cannot be undone. Do you want to proceed?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&t.deleteItem({url:t.url+"/"+e}).then((function(){t.getData()}))}))}))},deleteMultiple:function(){var t=this,e=[];$('input[name="selected"]:checked').each((function(){e.push(this.value)})),0!=e.length?swal.fire({title:"Deleting a record",text:"You are about to delete records. This action cannot be undone. Do you want to proceed?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&t.destroyMultiple({url:t.url,data:e}).then((function(){t.getData()}))})):swal.fire({title:"Select a record",text:"Please select at least one item to delete"})}})}},MF4b:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* @import "../../../sass/datatable.css"; */\n\n',""])},Mddp:function(t,e,n){var a=n("3OQj");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,r);a.locals&&(t.exports=a.locals)},TPwW:function(t,e,n){var a=n("MF4b");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,r);a.locals&&(t.exports=a.locals)},UdMg:function(t,e,n){"use strict";var a=n("Mddp");n.n(a).a},mAkd:function(t,e,n){"use strict";var a={props:["pagination","client","filtered"]},r=(n("UdMg"),n("KHd+")),i=n("sqhZ"),o=n.n(i),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.client?n("nav",{staticClass:"pagination"},[n("ul",{staticClass:"pagination"},[n("span",{staticClass:"page-stats"},[t._v("\n            "+t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" of "+t._s(t.filtered.length)+"\n            "),t.filtered.length<t.pagination.total?n("span",[t._v("(filtered from "+t._s(t.pagination.total)+" total entries)")]):t._e()]),t._v(" "),t.pagination.prevPage?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return t.$emit("prev")}}},[t._v("\n            Prev\n        ")])]):n("li",{staticClass:"page-item",attrs:{disabled:!0}},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("\n           Prev\n        ")])]),t._v(" "),t.pagination.nextPage?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return t.$emit("next")}}},[t._v("\n            Next\n        ")])]):n("li",{staticClass:"page-item",attrs:{disabled:!0}},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("\n            Next\n        ")])])])]):n("nav",[n("ul",{staticClass:"pagination"},[n("span",{staticClass:"page-stats"},[t._v(t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" of "+t._s(t.pagination.total))]),t._v(" "),t.pagination.prevPageUrl?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",on:{click:function(e){return t.$emit("prev")}}},[t._v("\n            Prev\n        ")])]):n("li",{staticClass:"page-item",attrs:{disabled:!0}},[n("a",{staticClass:"page-link"},[t._v("\n           Prev\n        ")])]),t._v(" "),t.pagination.nextPageUrl?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",on:{click:function(e){return t.$emit("next")}}},[t._v("\n            Next\n        ")])]):n("li",{staticClass:"page-item",attrs:{disabled:!0}},[n("a",{staticClass:"page-link"},[t._v("\n            Next\n        ")])])])])}),[],!1,null,null,null);"function"==typeof o.a&&o()(s);e.a=s.exports},nTZx:function(t,e,n){"use strict";var a=n("TPwW");n.n(a).a},oqyk:function(t,e,n){"use strict";var a=n("CCgx");n.n(a).a},sqhZ:function(t,e){}}]);
//# sourceMappingURL=Speakers.js.map
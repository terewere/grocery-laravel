(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{o4ao:function(s,t,r){"use strict";r.r(t);var a=r("e7F3"),e={name:"Register",components:{ValidationObserver:a.a,ValidationProvider:a.b},data:function(){return{processing:!1,form:{name:"",number:"",password:"",password_confirmation:""}}},mounted:function(){this.form.number=this.getNumber},methods:{login:function(){var s=this;this.processing=!0,this.$store.dispatch("REGISTER",this.form).then((function(){s.$router.push({path:s.$route.query.redirect||"/dashboard"})})).catch((function(){s.$refs.observer.setErrors(s.server_errors),s.$Progress.fail()})).finally((function(){s.$Progress.finish(),s.processing=!1}))}}},o=r("KHd+"),n=Object(o.a)(e,(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("body",{staticClass:"hold-transition login-page"},[r("div",{staticClass:"login-box"},[s._m(0),s._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body login-card-body"},[r("p",{staticClass:"login-box-msg"},[s._v("Sign in to start your session")]),s._v(" "),r("ValidationObserver",{ref:"observer",scopedSlots:s._u([{key:"default",fn:function(t){var a=t.invalid,e=t.passes;return[r("form",{on:{submit:function(t){return t.preventDefault(),e(s.login)}}},[s.server_errors.unauthorized?r("p",{staticClass:"alert alert-danger"},[s._v(s._s(s.server_errors.unauthorized[0]))]):s._e(),s._v(" "),r("validation-provider",{attrs:{name:"name",rules:"required"},scopedSlots:s._u([{key:"default",fn:function(t){var a=t.errors;return[r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Enter Name"},domProps:{value:s.form.name},on:{input:function(t){t.target.composing||s.$set(s.form,"name",t.target.value)}}}),s._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-text"},[r("span",{staticClass:"fas fa-user"})])])]),s._v(" "),r("span",{staticClass:"text-danger"},[s._v(s._s(a[0]))])]}}],null,!0)}),s._v(" "),r("validation-provider",{attrs:{name:"number",rules:"required|numeric|min:10"},scopedSlots:s._u([{key:"default",fn:function(t){var a=t.errors;return[r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.number,expression:"form.number"}],staticClass:"form-control",attrs:{name:"number",readonly:"",type:"text",placeholder:"Phone"},domProps:{value:s.form.number},on:{input:function(t){t.target.composing||s.$set(s.form,"number",t.target.value)}}}),s._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-text"},[r("span",{staticClass:"fas fa-phone"})])])]),s._v(" "),r("span",{staticClass:"text-danger"},[s._v(s._s(a[0]))])]}}],null,!0)}),s._v(" "),r("validation-provider",{attrs:{name:"password",rules:"required|min:8"},scopedSlots:s._u([{key:"default",fn:function(t){var a=t.errors;return[r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:s.form.password},on:{input:function(t){t.target.composing||s.$set(s.form,"password",t.target.value)}}}),s._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-text"},[r("span",{staticClass:"fas fa-lock"})])])]),s._v(" "),r("span",{staticClass:"text-danger"},[s._v(s._s(a[0]))])]}}],null,!0)}),s._v(" "),r("validation-provider",{attrs:{name:"password_confirmation",rules:"required|confirmed:password"},scopedSlots:s._u([{key:"default",fn:function(t){var a=t.errors;return[r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{name:"password_confirmation",type:"password",placeholder:"Confirm Password"},domProps:{value:s.form.password_confirmation},on:{input:function(t){t.target.composing||s.$set(s.form,"password_confirmation",t.target.value)}}}),s._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-text"},[r("span",{staticClass:"fas fa-lock"})])])]),s._v(" "),r("span",{staticClass:"text-danger"},[s._v(s._s(a[0]))])]}}],null,!0)}),s._v(" "),r("button",{staticClass:"btn btn-warning btn-block btn-flat",attrs:{disabled:a||s.processing||!s.isOnline,type:"submit"}},[s._v("\n            "+s._s(s.processing?"Processing...":"Create Account")+"\n            ")])],1)]}}])})],1)])])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"login-logo"},[t("b",[this._v("GH Islamic")]),this._v(" Radio\n  ")])}],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=register.js.map
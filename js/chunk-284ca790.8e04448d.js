(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-284ca790"],{"606f":function(a,t,s){},"971d":function(a,t,s){"use strict";s("606f")},f789:function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"applogin"},[s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"login-html"},[s("label",{staticClass:"tab",attrs:{for:"tab-2"}},[a._v("Sign Up")]),s("div",{staticClass:"login-form"},[s("form",{on:{submit:function(t){return t.preventDefault(),a.submitRegister(t)}}},[s("div",{staticClass:"sign-up-htm"},[s("div",{staticClass:"group"},[s("label",{staticClass:"label",attrs:{for:"user"}},[a._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"}],staticClass:"input",attrs:{id:"user",type:"text",name:"name"},domProps:{value:a.name},on:{input:function(t){t.target.composing||(a.name=t.target.value)}}})]),s("div",{staticClass:"group"},[s("label",{staticClass:"label",attrs:{for:"password"}},[a._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"input",attrs:{id:"password",type:"password",name:"password","data-type":"password"},domProps:{value:a.password},on:{input:function(t){t.target.composing||(a.password=t.target.value)}}})]),s("div",{staticClass:"group"},[s("label",{staticClass:"label",attrs:{for:"password_confirmation"}},[a._v("Repeat Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.password_confirmation,expression:"password_confirmation"}],staticClass:"input",attrs:{id:"pass",type:"password","data-type":"password",name:"password_confirmation"},domProps:{value:a.password_confirmation},on:{input:function(t){t.target.composing||(a.password_confirmation=t.target.value)}}})]),s("div",{staticClass:"group"},[s("label",{staticClass:"label",attrs:{for:"email"}},[a._v("Email Address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"}],staticClass:"input",attrs:{id:"email",name:"email",type:"text"},domProps:{value:a.email},on:{input:function(t){t.target.composing||(a.email=t.target.value)}}})]),s("div",{staticClass:"group"},[s("label",{staticClass:"label",attrs:{for:"phone"}},[a._v("phone")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.phone,expression:"phone"}],staticClass:"input",attrs:{id:"phone",name:"phone",type:"number"},domProps:{value:a.phone},on:{input:function(t){t.target.composing||(a.phone=t.target.value)}}})]),a._m(0),s("div",{staticClass:"hr"}),a._m(1)])])])])])])},i=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"group"},[s("input",{staticClass:"button",attrs:{type:"submit",value:"Sign Up"}})])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"foot-lnk"},[s("label",{attrs:{for:"tab-1"}},[a._v("Already Member?")])])}],o={name:"SiginUp",data:function(){return{isLoading:!1,name:"",email:"",phone:"",password:"",password_confirmation:""}},methods:{submitRegister:function(a){var t=this;this.isLoading=!0;var s=new FormData(a.target);this.axios.post("https://alpita.mtgofa.com/api/register?lang=ar",s).then((function(a){console.log(a.data),t.isLoading=!1})).catch((function(a){console.log(a)}))}}},n=o,r=(s("971d"),s("2877")),l=Object(r["a"])(n,e,i,!1,null,"5d49b5b7",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-284ca790.8e04448d.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d221a64"],{caf6:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-md row justify-center"},[a("div",[a("q-btn",{attrs:{label:"Show Form Dialog"},on:{click:function(e){t.dialog=!0}}}),a("e-dialog",{attrs:{maximized:t.$q.platform.is.mobile,formData:t.formData},on:{"child-update":t.updateForm},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1),a("div",[t._v(t._s(t.formData||""))]),a("dialog-test",{on:{"uploader-ref":t.dialogClosed}})],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md q-gutter-sm row justify-center"},[a("q-dialog",t._g(t._b({ref:"mDialog",on:{show:t.shown,hide:function(e){t.isShowing=!1}},model:{value:t.$attrs.value,callback:function(e){t.$set(t.$attrs,"value",e)},expression:"$attrs.value"}},"q-dialog",t.$attrs,!1),t.$listeners),[a("q-layout",{class:t.$q.dark.isActive?"bg-grey-9":"bg-white",attrs:{view:"Lhh lpR fFf",reveal:"",container:""}},[a("q-header",{staticClass:"bg-primary",attrs:{reveal:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawer=!t.drawer}}}),a("q-toolbar-title",[t._v("Header")]),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerR=!t.drawerR}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),a("q-footer",{staticClass:"text-white"},[a("q-toolbar",{attrs:{inset:""}},[a("q-toolbar-title",[t._v("Footer")])],1)],1),a("q-drawer",{attrs:{bordered:"",width:200,breakpoint:600,"content-class":"q-pa-sm"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},t._l(50,(function(e){return a("div",{key:e},[t._v("Drawer "+t._s(e)+" / 50")])})),0),a("q-drawer",{attrs:{side:"right",bordered:"",width:200,breakpoint:300,"content-class":"q-pa-sm"},model:{value:t.drawerR,callback:function(e){t.drawerR=e},expression:"drawerR"}},t._l(50,(function(e){return a("div",{key:e},[t._v("Drawer "+t._s(e)+" / 50")])})),0),a("q-page-container",[a("q-page",{attrs:{padding:""}},[a("keep-alive",[a("form-sample",{key:"daform",ref:"dForm",attrs:{formData:t.formData},on:{"form-update":function(e){t.$emit("child-update",e),t.$refs.mDialog.hide()}}})],1),t._l(t.contentSize,(function(e){return a("p",{key:e},[t._v(t._s(t.lorem))])}))],2)],1)],1)],1)],1)},i=[],s=a("bd37"),l={props:["formData"],components:{FormSample:s["default"]},inheritAttrs:!1,data:function(){return{layout:!1,moreContent:!0,drawer:!1,drawerR:!1,lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",isShowing:!1}},computed:{contentSize:function(){return this.moreContent?150:5}},methods:{shown:function(){this.isShowing=!0}},created:function(){},mounted:function(){}},d=l,c=a("2877"),u=Object(c["a"])(d,n,i,!1,null,null,null),m=u.exports,f=a("ed24"),p={components:{EDialog:m,DialogTest:f["default"]},name:"Samples",data:function(){return{dialog:!1,formData:{amount:null,account:"Default",description:"Default input",type:"Savings",uppercase:"",password:""}}},methods:{updateForm:function(t){this.formData=t},dialogClosed:function(t){console.log("parent",t)}}},w=p,g=Object(c["a"])(w,o,r,!1,null,null,null);e["default"]=g.exports}}]);
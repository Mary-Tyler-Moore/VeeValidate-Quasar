(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1d31abb4"],{9533:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row text-center"},[e._v("Quasar Components using Third Party Vue Components")]),a("vue-scroll-sample"),a("div",{attrs:{id:"q-app"}},[a("div",{staticClass:"q-pa-md"},[a("q-btn-dropdown",{attrs:{color:"primary",label:"Dropdown Button","content-class":"dd1"}},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[e._v("Photos")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[e._v("Videos")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[e._v("Articles")])],1)],1)],1)],1),a("q-stepper",{attrs:{vertical:"",color:"primary",animated:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[a("q-step",{attrs:{name:1,title:"Select campaign settings Select campaign settings Select campaign settings Select Select campaign settings Select campaign settings Select campaign settings Select Select campaign settings Select campaign settings Select campaign settings Select Select campaign settings Select campaign settings Select campaign settings Select Select campaign settings Select campaign settings Select campaign settings Select campaign settings",icon:"settings",done:e.step>1}},[e._v("\n          For each ad campaign that you create, you can control how much you're willing to\n          spend on clicks and conversions, which networks and geographical locations you want\n          your ads to show on, and more.\n          "),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(t){e.step=2}}})],1)],1),a("q-step",{attrs:{name:2,title:"Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group Create an ad group ",caption:"Optional",icon:"create_new_folder",done:e.step>2}},[e._v("An ad group contains one or more ads which target a shared set of keywords.\n          "),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:function(t){e.step=4}}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=1}}})],1)],1),a("q-step",{attrs:{name:3,title:"Ad template",icon:"assignment",disable:""}},[e._v("This step won't show up because it is disabled.")]),a("q-step",{attrs:{name:4,title:"Create an ad",icon:"add_comment"}},[e._v("\n          Try out different ad text to see what brings in the most customers, and learn how to\n          enhance your ads using features like ad extensions. If you run into any problems with\n          your ads, find out how to tell if they're running and how to resolve approval issues.\n          "),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"Finish"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=2}}})],1)],1)],1),a("div",{attrs:{id:"app1"}},[a("p",{staticClass:"text-h1"},[e._v("Static template:")]),a("Button",[e._v("Hello")]),a("Button",{attrs:{type:"primary"}},[e._v("Hello")]),a("p",{staticClass:"text-h2"},[e._v("Dynamically inserted:")]),a("div",{ref:"container"},[a("q-btn",{attrs:{label:"Click to insert"},on:{click:e.onClick}})],1)],1)],1)])],1)},o=[],r=a("2b0e"),s=a("213b"),i=a("5ad8"),c=function(e){return{1:"primary",2:"secondary",3:"negative"}[e]},l={components:{VueScrollSample:i["default"],Button:s["default"]},data:function(){return{dialog:!1,step:1}},methods:{onClick:function(){var e=r["a"].extend(s["default"]),t=c(Math.floor(3*Math.random())+1);console.log(t);var a=new e({propsData:{type:t+""}});a.$slots.default=["Click me!"],a.$mount(),this.$refs.container.appendChild(a.$el)}}},p=l,d=(a("e411"),a("2877")),u=Object(d["a"])(p,n,o,!1,null,null,null);t["default"]=u.exports},a287:function(e,t,a){},e411:function(e,t,a){"use strict";var n=a("a287"),o=a.n(n);o.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["596ac099"],{abea:function(e,t,n){"use strict";var o=n("bbf3"),a=n.n(o);a.a},bbf3:function(e,t,n){},cafb:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("div",{staticClass:"q-pa-md q-gutter-md row justify-center"},[n("div",{staticClass:"col-12 row justify-center q-gutter-md"},[n("q-btn",{attrs:{color:"primary",loading:e.visible},on:{click:e.showTextLoading}},[e._v("Show Skeleton Loader")]),n("q-field",{attrs:{filled:"",label:"Primary","stack-label":"",dense:""},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",{staticClass:"self-center full-width no-outline content-stretch",attrs:{tabindex:"0"}},[e._v(e._s(e.skeletonColor.primary||"Hex color"))])]},proxy:!0},{key:"append",fn:function(){return[n("q-btn",{style:e.skeletonColor.primary?"color: "+e.skeletonColor.primary:"",attrs:{flat:"",round:"",dense:"",icon:"mdi-palette"}},[n("q-menu",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[n("q-color",{attrs:{color:e.skeletonColor.primary},model:{value:e.skeletonColor.primary,callback:function(t){e.$set(e.skeletonColor,"primary",t)},expression:"skeletonColor.primary"}})],1)],1)]},proxy:!0}])}),n("q-field",{attrs:{filled:"",label:"Secondary","stack-label":"",dense:""},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[e._v(e._s(e.skeletonColor.secondary||"Hex color"))])]},proxy:!0},{key:"append",fn:function(){return[n("q-btn",{style:e.skeletonColor.secondary?"color: "+e.skeletonColor.secondary:"",attrs:{flat:"",round:"",dense:"",icon:"mdi-palette"}},[n("q-menu",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[n("q-color",{model:{value:e.skeletonColor.secondary,callback:function(t){e.$set(e.skeletonColor,"secondary",t)},expression:"skeletonColor.secondary"}})],1)],1)]},proxy:!0}])})],1),n("div",{staticClass:"col-12 row justify-center"},[n("q-card",{staticClass:"relative-position card-example"},[n("q-card-section",[e.showSimulatedReturnData?n("div",{staticClass:"text-h6"},[e._v("Lorem Ipsum")]):e._e()]),n("q-card-section",[n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",duration:{enter:200,leave:200}},on:{"after-leave":function(t){e.showSimulatedReturnData=!0}}},[e.visible?n("div",[n("dynamic-skeleton",{attrs:{primary:e.skeletonColor.primary,secondary:e.skeletonColor.secondary,rows:10,cols:4}})],1):e._e()]),n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",duration:{enter:500,leave:230}},on:{"after-leave":function(t){e.visible=!0}}},[e.showSimulatedReturnData?n("div",[e._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Praesent vel magna eu risus laoreet tristique. Nulla ut\n              fermentum elit, nec consequat augue. Morbi et dolor nec metus\n              tincidunt pellentesque. Nullam non semper ante. Fusce\n              pellentesque sagittis felis quis porta. Aenean condimentum neque\n              sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis\n              dictum interdum eros.\n            ")]):e._e()])],1)],1)],1)])])},a=[],s=n("f0a5"),r={components:{DynamicSkeleton:s["default"]},data:function(){return{visible:!1,showSimulatedReturnData:!0,skeletonColor:{primary:null,secondary:null}}},methods:{showTextLoading:function(){var e=this;this.showSimulatedReturnData=!1,setTimeout((function(){e.visible=!1}),3e3)},setColor:function(e,t){this.skeletonColor[e]=t}}},l=r,i=(n("abea"),n("2877")),c=Object(i["a"])(l,o,a,!1,null,"8a7a1fb4",null);t["default"]=c.exports}}]);
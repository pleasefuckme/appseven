webpackJsonp([31,33],{193:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{num:3,timeOut:{}}},computed:{sendMsg:function(){return"页面不存在,"+this.num+"S后回到首页"}},mounted:function(){var t=this;this.timeOut=setInterval(function(){t.num--,0===t.num&&(clearInterval(t.timeOut),t.$router.replace("/"))},1e3)},beforeDestroy:function(){clearInterval(this.timeOut)}}},374:function(t,e,n){var r=n(1)(n(193),n(388),null,null);t.exports=r.exports},388:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("topComponent",{attrs:{title:t.appName,showLeft:!1}}),t._v(" "),n("pageError",{staticClass:"error-page",attrs:{msg:t.sendMsg}})],1)},staticRenderFns:[]}}});
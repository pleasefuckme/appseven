webpackJsonp([4,33],{27:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{lists:[{tit:"",img:"https://cgtzimage.b0.upaiyun.com/191810/00/00/42/2016/10/27/250A55FF-89BC-AA19-5D4A-89C897F80FAF.png",isOn:!1,href:"https://cgtzfiles.b0.upaiyun.com/cgjr/jrwx/html/huodong/sjRename.html"},{tit:"",img:"https://cgtzimage.b0.upaiyun.com/191810/00/00/42/2016/10/21/AB697121-9758-072D-0C6F-28711778485A.jpg",isOn:!1,href:"https://cgtzfiles.b0.upaiyun.com/cgjr/jrwx/html/huodong/autoPay.html"}],hasTouch:"ontouchstart"in window,goTouchStart:"ontouchstart"in window?"touchstart":"mousedown",goTouchMove:"ontouchstart"in window?"touchmove":"mousemove",goTouchEnd:"ontouchstart"in window?"touchend":"mouseup",eachLeft:{},index:0,flag:!1,$width:0,$length:0,$start:0,$end:0}},methods:{tStart:function(t){t.preventDefault(),this.flag=!0,this.$start=this.hasTouch?t.changedTouches[0].screenX:t.screenX},tMove:function(t){this.flag&&(this.$end=this.hasTouch?t.changedTouches[0].screenX:t.screenX,(this.$end-this.$start>0&&0!==this.index||this.$end-this.$start<0&&this.index!==this.$length-1)&&(this.$refs.ul.style.marginLeft=this.eachLeft[this.index]+this.$end-this.$start+"px"))},tEnd:function(t){this.flag===!0&&(this.flag=!1,this.$end=this.hasTouch?t.changedTouches[0].screenX:t.screenX,this.$end-this.$start>20?(0!==this.index&&(this.lists[this.index].isOn=!1,this.index--,this.lists[this.index].isOn=!0),this.goAnimate(parseInt(this.$refs.ul.style.marginLeft),this.eachLeft[this.index])):this.$start-this.$end>20?(this.index!==this.$length-1&&(this.lists[this.index].isOn=!1,this.index++,this.lists[this.index].isOn=!0),this.goAnimate(parseInt(this.$refs.ul.style.marginLeft),this.eachLeft[this.index])):(console.log("效果测试用的新窗口打开，【实际需要router/本窗口打开其它链接】"),window.open(this.lists[this.index].href,"_blank"),this.goAnimate(parseInt(this.$refs.ul.style.marginLeft),this.eachLeft[this.index])))},goAnimate:function(t,e){var n=this,s=e-t,i=200,o=0,a=10,r=s/i*a,u=setInterval(function(){o+=a,o===i?(clearInterval(u),n.$refs.ul.style.marginLeft=e+"px"):(t+=r,n.$refs.ul.style.marginLeft=t+"px")},a)}},mounted:function(){this.$width=this.$refs.banner.clientWidth,this.$length=this.$refs.ul.childElementCount,this.lists[this.index].isOn=!0;for(var t=0;t<this.$length;t++)this.eachLeft[t]=-this.$width*t;this.$refs.banner.children[0].children[0].style.width=this.$width+"px";for(var e=this,n=document.getElementById("bannerTag").getElementsByTagName("span"),s=document.getElementById("banner"),i=0;i<n.length;i++)n[i].idx=i,n[i].addEventListener(this.goTouchStart,function(t){t.stopPropagation(),e.index!==this.idx&&(e.lists[e.index].isOn=!1,e.index=this.idx,e.lists[e.index].isOn=!0,e.goAnimate(parseInt(e.$refs.ul.style.marginLeft),e.eachLeft[e.index]))});s.addEventListener(this.goTouchStart,this.tStart),document.addEventListener(this.goTouchMove,this.tMove),document.addEventListener(this.goTouchEnd,this.tEnd)},beforeDestroy:function(){document.removeEventListener(this.goTouchMove,this.tMove),document.removeEventListener(this.goTouchEnd,this.tEnd)}}},32:function(t,e,n){var s=n(1)(n(27),n(33),null,null);t.exports=s.exports},33:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"banner",staticClass:"indexBanner",attrs:{id:"banner"}},[n("ul",{ref:"ul",staticStyle:{"margin-left":"0"}},t._l(t.lists,function(t){return n("li",[n("img",{attrs:{src:t.img,alert:t.tit}})])}),0),t._v(" "),n("div",{staticClass:"tag",attrs:{id:"bannerTag"}},[t._l(t.lists,function(e,s){return[n("span",{class:{on:e.isOn}},[t._v(t._s(s+1))])]})],2)])},staticRenderFns:[]}},185:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(32),o=(s(i),n(2)),a=s(o);e.default={data:function(){return{num1:"",num2:"",num3:"",num4:"",num5:"",state1:"",state2:"",state3:"",state4:"",state5:"",state:""}},created:function(){this.convert1(),this.convert2(),this.convert3(),this.convert4(),this.convert5()},methods:{convert1:function(){var t=this;a.default.post("/api/ospworkorder/opsworkorder/interface/workorder?state=1&id=").then(function(e){console.log(e.data),console.log(e.data.length),t.state1=e.data[0].state,t.num1=e.data.length})},convert2:function(){var t=this;a.default.post("/api/ospworkorder/opsworkorder/interface/workorder?state=2&id=").then(function(e){console.log(e.data),console.log(e.data.length),t.state2=e.data[0].state,t.num2=e.data.length})},convert3:function(){var t=this;a.default.post("/api/ospworkorder/opsworkorder/interface/workorder?state=3&id=").then(function(e){console.log(e.data),console.log(e.data.length),t.num3=e.data.length})},convert4:function(){var t=this;a.default.post("/api/ospworkorder/opsworkorder/interface/workorder?state=4&id=").then(function(e){console.log(e.data),console.log(e.data.length),t.num4=e.data.length})},convert5:function(){var t=this;a.default.post("/api/ospworkorder/opsworkorder/interface/workorder?state=5&id=").then(function(e){console.log(e.data),console.log(e.data.length),t.num5=e.data.length})}}}},366:function(t,e,n){var s=n(1)(n(185),n(397),null,null);t.exports=s.exports},397:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("topComponent",{attrs:{title:t.appName,showLeft:!1}},[n("span",{staticClass:"back",attrs:{slot:"left"},on:{click:function(e){return t.$router.push("/loan")}},slot:"left"},[t._v("返回")])]),t._v(" "),n("ul",{staticClass:"indexList mt20"},[n("li",{staticClass:"data.cls",on:{click:function(e){return t.$router.push("/loan/reportYet")}}},[n("b",[t._v("未派单")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num1,expression:"num1"}],staticStyle:{width:"15px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.num1},on:{input:function(e){e.target.composing||(t.num1=e.target.value)}}}),t._v("条")]),t._v(" "),n("li",{staticClass:"data.cls",on:{click:function(e){return t.$router.push("/loan/reportRea")}}},[n("b",[t._v("已派单")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num2,expression:"num2"}],staticStyle:{width:"15px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.num2},on:{input:function(e){e.target.composing||(t.num2=e.target.value)}}}),t._v("条")]),t._v(" "),n("li",{staticClass:"data.cls",on:{click:function(e){return t.$router.push("/loan/reportDoing")}}},[n("b",[t._v("处理中")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num3,expression:"num3"}],staticStyle:{width:"15px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.num3},on:{input:function(e){e.target.composing||(t.num3=e.target.value)}}}),t._v("条")]),t._v(" "),n("li",{staticClass:"data.cls",on:{click:function(e){return t.$router.push("/loan/reportToAudit")}}},[n("b",[t._v("处理完毕待审核")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num4,expression:"num4"}],staticStyle:{width:"15px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.num4},on:{input:function(e){e.target.composing||(t.num4=e.target.value)}}}),t._v("条")]),t._v(" "),n("li",{staticClass:"data.cls",on:{click:function(e){return t.$router.push("/loan/reportClosed")}}},[n("b",[t._v("已关闭")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num5,expression:"num5"}],staticStyle:{width:"15px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.num5},on:{input:function(e){e.target.composing||(t.num5=e.target.value)}}}),t._v("条")])])],1)},staticRenderFns:[]}}});
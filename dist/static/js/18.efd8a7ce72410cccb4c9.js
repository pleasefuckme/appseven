webpackJsonp([18,33],{16:function(t,e,a){t.exports=a.p+"static/img/loanBanner2.2bd63e8.jpg"},190:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),s=o(n);e.default={data:function(){return{title:"接单列表",content:"已接单",ossname:"",osffloorname:"",fbname:"",fbnum:"",contact:"",text:"",faultdes:"",fullname:"",osddepartment:"",position:"",id:""}},created:function(){this.convert(),this.getParams()},methods:{convert:function(){var t=this,e=this.$route.query.id;console.log(e);var a=e;s.default.post("/api/ospworkorder/opsworkorder/interface/appDetails?state=2&id="+a).then(function(e){console.log(e.data),t.ossname=e.data[0].ossname,t.fbname=e.data[0].fbname,t.fbnum=e.data[0].fbnum,t.osffloorname=e.data[0].osffloorname,t.contact=e.data[0].contact,t.text=e.data[0].text,t.faultdes=e.data[0].faultdes,t.osddepartment=e.data[0].osddepartment,t.fullname=e.data[0].fullname,t.position=e.data[0].position,t.id=e.data[0].id})},getParams:function(){var t=this.$route.query.id;console.log(t)},goFillData:function(){var t=this;event.preventDefault(),console.log(this.id);s.default.post("/api/ospworkorder/opsworkorder/interface/updata?id="+this.id+"&state=3").then(function(e){0!=e.data&&1==e.data.success&&(t.$dialog(["已开始处理","true"]),t.$router.push("/loan"))}).catch(function(t){console.log(t)})}},watch:{$route:"getParams"}}},371:function(t,e,a){var o=a(1)(a(190),a(410),null,null);t.exports=o.exports},410:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container no-top"},[o("loanBanner",{attrs:{tit:t.title,des:t.content}},[o("img",{attrs:{slot:"banner",src:a(16)},slot:"banner"})]),t._v(" "),o("div",{staticClass:"loanDetail"},[o("dl",[o("dd",[o("p",{staticStyle:{"font-weight":"bold"}},[t._v("区域："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.osffloorname,expression:"osffloorname"}],staticClass:"fr",staticStyle:{"font-size":"14.25px",margin:"2px 20px 0px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.osffloorname},on:{input:function(e){e.target.composing||(t.osffloorname=e.target.value)}}})]),t._v(" "),o("p",{staticStyle:{"font-weight":"bold"}},[t._v("单体："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.ossname,expression:"ossname"}],staticClass:"fr",staticStyle:{"font-size":"14.25px",margin:"2px 20px 0px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.ossname},on:{input:function(e){e.target.composing||(t.ossname=e.target.value)}}})]),t._v(" "),o("p",{staticStyle:{"font-weight":"bold"}},[t._v("设备名称："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fbname,expression:"fbname"}],staticClass:"fr",staticStyle:{"font-size":"14.25px",margin:"3px 20px 0px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.fbname},on:{input:function(e){e.target.composing||(t.fbname=e.target.value)}}})]),t._v(" "),o("p",{staticStyle:{"font-weight":"bold"}},[t._v("设备编号："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fbnum,expression:"fbnum"}],staticClass:"fr",staticStyle:{"font-size":"14.25px",margin:"3px 20px 0px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.fbnum},on:{input:function(e){e.target.composing||(t.fbnum=e.target.value)}}})]),t._v(" "),o("p",{staticStyle:{"font-weight":"bold"}},[t._v("报修部门："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.osddepartment,expression:"osddepartment"}],staticClass:"fr",staticStyle:{"font-size":"14.25px",margin:"3px 20px 0px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.osddepartment},on:{input:function(e){e.target.composing||(t.osddepartment=e.target.value)}}})]),t._v(" "),o("p",{staticStyle:{"font-weight":"bold"}},[t._v("报修人："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],staticClass:"fr",staticStyle:{"font-size":"14.25px",margin:"3px 20px 0px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.fullname},on:{input:function(e){e.target.composing||(t.fullname=e.target.value)}}})]),t._v(" "),o("p",{staticStyle:{"font-weight":"bold"}},[t._v("联系方式："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contact,expression:"contact"}],staticClass:"fr",staticStyle:{"font-size":"14.25px",margin:"2px 20px 0px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.contact},on:{input:function(e){e.target.composing||(t.contact=e.target.value)}}})]),t._v(" "),o("p",{staticStyle:{"font-weight":"bold"}},[t._v("报修内容："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"fr",staticStyle:{"font-size":"14.25px",margin:"3px 20px 0px"},attrs:{type:"text",value:"",readonly:""},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])])]),t._v(" "),o("button",{staticClass:"subBtn",staticStyle:{width:"43%",padding:"0",margin:"20px 22px 20px",float:"left","box-sizing":"border-box"},attrs:{slot:"apply"},on:{click:function(e){return t.$router.push("/loan/设备信息")}},slot:"apply"},[t._v("设备信息")]),t._v(" "),o("button",{staticClass:"subBtn",staticStyle:{width:"43%",padding:"0",margin:"-64px 22px 20px",float:"right","box-sizing":"border-box"},attrs:{slot:"apply"},on:{click:t.goFillData},slot:"apply"},[t._v("开始处理")])]),t._v(" "),o("footComponent",{attrs:{idx:0}})],1)},staticRenderFns:[]}}});
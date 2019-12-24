<template>
  <div class="container no-top">
<!--  <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
  </loanBanner> -->
<div class="loanBanner">
    <p><span class="tit">工单系统</span>工单详情</p>
    <slot name='banner'></slot>
    <img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
    <span class="back" @click="$router.push('/user/消息提醒')"></span>
  </div>




    <div class="loanDetail">
		<dl>
	      <!--      <dt>产品要点</dt>-->
	            <dd>
	              <p style="font-weight:bold">区域：<input style="font-size:14.25px;margin:2px 20px 0px;"type="text" value="" v-model="osffloorname"class="fr" readonly></input></p>
	              <p style="font-weight:bold">单体：<input style="font-size:14.25px;margin:2px 20px 0px;"type="text" value="" v-model="ossname"class="fr" readonly></input></p>
	              <p style="font-weight:bold">设备名称：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fbname"class="fr" readonly></input></p>
	              <p style="font-weight:bold">设备编号：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fbnum"class="fr" readonly></input></p>
	              <p style="font-weight:bold">报修部门：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="osddepartment" class="fr" readonly></input></p>
	              <p style="font-weight:bold">报修人：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fullname" class="fr" readonly></input></p>
	              <p style="font-weight:bold">联系方式：<input style="font-size:14.25px;margin:2px 20px 0px;"type="text" value="" v-model="contact"class="fr" readonly></input></p>
	              <p style="font-weight:bold">报修内容：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="text"class="fr" readonly></input></p>


	            <!-- </dd> -->
	      <!--  </dl>

	      <!--  <dl class="hasIcon">

	        	<p align="center"><img src="../../assets/img/1570689993(1).jpg" /></p>

	        </dl> -->
	        <!-- <dl class="hasIcon hot"> -->
<!--
	            <dd> -->
	                <!--<p>报修情况<span class="fr"></span></p>-->
	                <!-- <p>报修内容<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="text"class="fr" readonly></input></p> -->
	                <!-- <p>故障描述<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="faultdes" class="fr" readonly></input></p> -->
	                <!-- <p>位置<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="position" class="fr" readonly></input></p> -->
	                <!--<p>要求时长<span class="fr"></span></p>
	                <p>单位<span class="fr"></span></p>
	                <p>备注<span class="fr"></span></p>
	                <p>派送建议<span class="fr"></span></p>-->
	                <!--<p>维修人员反馈<span class="fr"></span></p>-->
	            </dd>
	        </dl>
	      <span class="subBtn" style="width:90%;padding:0;margin:20px 17px 20px;float:left;box-sizing:border-box;"slot="apply" @click="goFillData">接单</span>
	      <footComponent :idx='0'></footComponent>
 </div>
  </div>
</template>
<script src="/js/vue-resource.min.js"></script>
<script src="/js/vue.min.js"></script>
<script src="../../api/ajax.js"></script>
<script src="../../main.js"></script>
<script>
 import axios from 'axios'
  export default {
    data() {
      return {
        title: "工单系统",
        content: "工单详情",
        ossname:"",
        osffloorname:"",
        fbname:"",
        fbnum:"",
        contact:"",
        text:"",
        faultdes:"",
        fullname:"",
        osddepartment:"",
        position:"",
        id:""
      }
    },

    created(){
      this.convert();
			this.getParams();

    },
    methods: {
     convert: function () {
           	const routerParams = this.$route.query.id
             console.log(routerParams);
           	var id=routerParams;
             axios.post('/api/ospworkorder/opsworkorder/interface/appDetails?state=1&id='+id).then(response => {
             	console.log(response.data);
             	//this.title = response.data;
               this.ossname = response.data[0].ossname;
               this.fbname = response.data[0].fbname;
               this.fbnum = response.data[0].fbnum;
               this.osffloorname = response.data[0].osffloorname;
               this.contact = response.data[0].contact;
               this.text = response.data[0].text;
               this.faultdes = response.data[0].faultdes;
               this.osddepartment = response.data[0].osddepartment;
               this.fullname = response.data[0].fullname;
               this.position = response.data[0].position;
               this.id=response.data[0].id;
     //console.log(this.eqname );
           		})
      			}
           //****获取前一页的text
           ,
        getParams(){
             // 取到路由带过来的参数
             const routerParams = this.$route.query.id;
             console.log(routerParams);
           }
           ,goFillData() {
           	event.preventDefault();
            console.log(this.id);
            let config = {
                   headers: {
                     'Content-Type': 'multipart/form-data'
                   }
                 }
              const routerParams = this.$route.query.id;
             let  id=routerParams
             axios.post('/api/ospworkorder/opsworkorder/interface/updata?id='+id+'&state=2').then(response=> {
     			        	if(response.data!=0&&response.data.success==true){
     			        	//console.log(response.data.success)	;
     //			        	console.log(response.data)
     //			        	 	console.log(response);
     			        	this.$dialog(['接单成功', 'true']);
     			        	this.$router.push('/loan');
     			        	}
            }).catch(error=>{
                     console.log(error)
                 })



           }

     },
       watch: {
           '$route': 'getParams'
         }
      }

</script>

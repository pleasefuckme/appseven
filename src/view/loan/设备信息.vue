<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
    </loanBanner>
     <span class="back" @click="$router.back(-1)"></span>

    <div class="loanDetail">
		<!-- 	<div>{{dateBegin | formatDate}}</div> -->
			<dl>
	      <!--      <dt>产品要点</dt>-->
	            <dd>
	                <p style="font-weight:bold">设备名称：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fbname"class="fr" readonly></input></p>
	                <p style="font-weight:bold">设备类型：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="equipmenttype"class="fr" readonly></input></p>
	                <p style="font-weight:bold">设备编号：<input style="font-size:14.25px;margin:2px 20px 0px;"type="text" value="" v-model="fbnum"class="fr" readonly></input></p>
	                <p style="font-weight:bold">生产厂家：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fbsupplier"class="fr" readonly></input></p>
	                <p style="font-weight:bold">联系方式：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fbphone"class="fr" readonly></input></p>


	            </dd>
	        </dl>
	        <dl>
	            <!--<dt>需要资料</dt>-->
	            <dd>
	                <p style="font-weight:bold">更新时间：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="update_date"class="fr" readonly></input></p>
	                <p style="font-weight:bold">运营日期：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="create_date"class="fr" readonly></input></p>
	                <p style="font-weight:bold">采购价格：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fbbuyprice"class="fr" readonly></input></p>
	                <!-- <p style="font-weight:bold">目前状态：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fbstate"class="fr" readonly></input></p>	        -->
	                <p style="font-weight:bold">所在单体：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="ossname"class="fr" readonly></input></p>


	            </dd>
	        </dl>

	        <dl class="hasIcon">

	        	<p align="center"><img src="../../assets/img/1570689993(1).jpg" /></p>

	        </dl>
	        <!--<dl class="hasIcon hot">

	            <dd>
	                <p>维修记录<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="position"class="fr" readonly></input></p>
	                <p>日常维护记录<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="position"class="fr" readonly></input></p>

	                <!--<p>维修记录<span class="fr"></span></p>
	                <p>日常维护记录<span class="fr"></span></p>-->

	            <!--</dd>
	        </dl>-->
	      <!-- <span class="subBtn" style="width:90%;padding:0;margin:30px 32px 20px;float:left;box-sizing:border-box;"slot="apply" @click="goFillData">报修</span> -->
	      <!-- <footComponent :idx='0'></footComponent> -->
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
        content: "设备信息",
       	fbname:"",
        fbnum:"",
        equipmenttype:"",
        fbsupplier:"",
        fbphone:"",
        update_date:"",
        ossname:"",
        fbbuyprice:"",
        fbstate:"",
        create_date:"",
        id:"",
        eqid:""
      }
    },
    created(){
      this.convert();
      this.getParams();
    },
    methods: {
    	convert: function () {
        const routerParams = this.$route.query.id
        // console.log("设备id ***设备信息="+routerParams);
        var id=routerParams;
				var date = new Date;
        axios.post('/api/ospworkorder/opsworkorder/interface/eqinfo?id='+id).then(response => {
        	console.log(response.data);
        	//this.title = response.data;
        	this.fbname = response.data[0].fbname;
          this.fbnum = response.data[0].fbnum;
          this.equipmenttype = response.data[0].equipmenttype;
          this.fbsupplier = response.data[0].fbsupplier;
          this.fbphone = response.data[0].fbphone;
          this.update_date = response.data[0].update_date;
          this.create_date = response.data[0].create_date;
          this.fbstate = response.data[0].fbstate;
          this.fbbimid = response.data[0].fbbimid;
					this.fbbuyprice = response.data[0].fbbuyprice;
					this.ossname = response.data[0].ossname;
          this.id = response.data[0].id;

//console.log(this.eqname );
      		})
 			},
   getParams(){
        // 取到路由带过来的参数
        const routerParams = this.$route.query.id
        // console.log("获eqid"+routerParams);
      }
      }

  }
</script>

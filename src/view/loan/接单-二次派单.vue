<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner2.jpg" slot='banner'/>
    </loanBanner>
   
     
    <div class="loanDetail">
			<dl>
	      <!--      <dt>产品要点</dt>-->
	            <dd>
	                
	               <p>设备名称<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="eqname"class="fr" readonly></input></p>	        	                
	                <p>设备编号<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="eqnum"class="fr" readonly></input></p>	        
	                <p>报修部门<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="department" class="fr" readonly></input></p>
	                <p>报修人<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="reporter" class="fr" readonly></input></p>
	                <!--<p>报修时间<span class="fr"></span></p>-->
	                <p>联系方式<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="contact"class="fr" readonly></input></p>

	            </dd>
	        </dl>

	        <dl class="hasIcon">

	        	<p align="center"><img src="../../assets/img/1570689993(1).jpg" /></p>

	        </dl>
	        <dl class="hasIcon hot">

	            <dd>
	               <!--<p>报修情况<span class="fr"></span></p>-->
	                <p>报修内容<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="text"class="fr" readonly></input></p>
	                <p>故障描述<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="faultdes" class="fr" readonly></input></p>
	                <p>位置<input style="font-size:24px;margin:10px 45px 0px;"type="text" value="" v-model="position" class="fr" readonly></input></p>
	                <!--<p>要求时长<span class="fr"></span></p>
	                <p>单位<span class="fr"></span></p>
	                <p>备注<span class="fr"></span></p>
	                <p>派送建议<span class="fr"></span></p>-->
					<!--<p>维修人员反馈<span class="fr"></span></p>
	               
					<p>二次派单备注<span class="fr"></span></p>
					<p>维修人员二次反馈<span class="fr"></span></p>-->
	            </dd>
	        </dl>

  </div>
   <button class="subBtn" style="width:45%;padding:0;margin:-80px 16px 0px;float:left;box-sizing:border-box;"slot="apply" @click="$router.push('/loan/设备信息')">设备信息</button>
      <button class="subBtn" style="width:45%;padding:0;margin:-80px 16px 0px;float:right;box-sizing:border-box;"slot="apply" @click="$router.push('/loan');$dialog(['提交成功', 'true'])">处理完毕</button>
    <footComponent :idx='0'></footComponent>
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
        title: "接单列表",
        content: "二次派单",
        eqname:"",
        eqnum:"",
        contact:"",
        text:"",
        faultdes:"",
        reporter:"",
        department:"",
        position:""
      }
    },
    created(){
      this.convert();
    },
    methods: {
      convert: function () {
      	const routerParams = this.$route.query.id
        console.log(routerParams);
      	var id=routerParams;
        axios.post('/api/ospworkorder/opsworkorder/interface/workorder?state=3&id='+id).then(response => {
        	console.log(response.data);
        	//this.title = response.data;
          this.eqname = response.data[0].eqname;
          this.eqnum = response.data[0].eqnum;
          this.contact = response.data[0].contact;
          this.text = response.data[0].text;
          this.faultdes = response.data[0].faultdes;
          this.department = response.data[0].department;
          this.reporter = response.data[0].reporter;
          this.position = response.data[0].position;
//console.log(this.eqname );
      		})
 			}
    }
  }
</script>

<template>
  <div class="container">
    <topComponent :title='appName' :showLeft='false'><span class="back" @click="$router.push('/loan/接单列表')" slot="left">返回</span></topComponent>
    <!--<loanBanner></loanBanner>-->  
     
    <ul class="indexList mt20">
  
  
    </ul>
    <ul class="listCom list-arrow" @click="$router.push('/loan/接单-二次派单')">
			<li><p>设备名称：<input style="font-size:24px;margin:25px 105px 0px;"type="text" value="" v-model="eqname"class="fr" readonly></input> </p>      	                
	                                 设备编号：<input style="font-size:24px;margin:25px 105px 0px;"type="text" value="" v-model="eqnum"class="fr" readonly></input>	 </li></ul>
		
    <footComponent :idx='0'></footComponent>
  </div>
</template>
<script src="/js/vue-resource.min.js"></script>
<script src="/js/vue.min.js"></script>
<script src="../../api/ajax.js"></script>
<script src="../../main.js"></script>
<script>
  // 引入banner组件
//import loanBanner from '../../components/loan/banner'
  import axios from 'axios'
  export default {
    data() {
      return {
       title: "接单列表",
       content: "二次派单",
			 eqname:"",
       eqnum:""
      }
    },
    created(){
      this.convert();
    },
    methods: {
      convert: function () {
        axios.post('/api/ospworkorder/opsworkorder/interface/workorder?state=3').then(response => {
        	console.log(response.data);
        	//this.title = response.data;
        	for(var i=0; i<=response.data.length;i++){
        		
        		this.eqname = response.data[i].eqname;
        		this.eqnum = response.data[i].eqnum;
        	}
          

      		})
 			}
 		} 
//  components: {
//    loanBanner
//  }
  }
</script>

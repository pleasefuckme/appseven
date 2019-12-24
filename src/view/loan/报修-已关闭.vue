<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner1.jpg" slot='banner'/>
    </loanBanner>
        <div class="loanDetail"><dl>
	            <dd>	  
	            <p style="font-weight:bold">区域：<input style="font-size:14.25px;margin:2px 20px 0px;"type="text" value="" v-model="osffloorname"class="fr" readonly></input></p>
	            <p style="font-weight:bold">单体：<input style="font-size:14.25px;margin:2px 20px 0px;"type="text" value="" v-model="ossname"class="fr" readonly></input></p>
	            <p style="font-weight:bold">设备名称：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fbname"class="fr" readonly></input></p>	        	                
	            <p style="font-weight:bold">设备编号：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fbnum"class="fr" readonly></input></p>	        
	            <p style="font-weight:bold">报修部门：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="osddepartment" class="fr" readonly></input></p>
	            <p style="font-weight:bold">报修人：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="fullname" class="fr" readonly></input></p>
	            <p style="font-weight:bold">联系方式：<input style="font-size:14.25px;margin:2px 20px 0px;"type="text" value="" v-model="contact"class="fr" readonly></input></p>
	            <p style="font-weight:bold">报修内容：<input style="font-size:14.25px;margin:3px 20px 0px;"type="text" value="" v-model="text"class="fr" readonly></input></p>
	            	     
	            </dd>
	        </dl>
	        
	        <!--<dl class="hasIcon">
	        	
	        	<p align="center"><img src="" /></p>
	       
	        </dl>-->
	        <!--<dl class="hasIcon hot">
	            
	            
	        </dl>-->

 <button class="subBtn" style="width:90%;padding:0;margin:30px 15px 0px 15px;float:none;box-sizing:border-box;"slot="apply" @click="getAppinfo(this.eqid)">设备信息</button>
 <!-- <button class="subBtn" style="width:43%;padding:0;margin:-96px 32px 20px;float:right;box-sizing:border-box;"slot="apply" @click="goFillData">处理完毕</button> -->

</div>

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
        title: "报修列表",
        content: "已关闭",
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
				eqid:"",

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
        axios.post('/api/ospworkorder/opsworkorder/interface/appDetails?state=5&id='+id).then(response => {
        	console.log(response.data);
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
					this.eqid=response.data[0].eqid;
          console.log("设备id"+this.eqid);
//console.log(this.eqname );
      		})
 			}
      //****获取前一页的text
      ,
   getParams(){
        // 取到路由带过来的参数
        const routerParams = this.$route.query.id
        console.log(routerParams);
      }  
      ,
  getAppinfo: function(){
            console.log("this.eqid"+this.eqid);
         	 //console.log('当前被点击的id2=' + id);
          this.$router.push({
            path: '/loan/设备信息',
            query: {
            	 id:this.eqid

            }
          })
        }
},
  watch: {
      '$route': 'getParams'
    }  
 }
</script>
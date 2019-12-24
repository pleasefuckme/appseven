<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
    </loanBanner>
    <div class="loanDetail"><dl> <dd>
    
            
<p><label for="eqname">设备名称<input type="text" style="text-align:right;font-size:24px;float:right;" class="className.eqname" v-model="eqname" 
                        :disabled='edit'> </label></p>
<p><label for="eqnum">设备编号<input type="text" style="text-align:right;font-size:24px;float:right;" class="className.eqnum" v-model="eqnum" 
                        :disabled='edit'> </label></p>
									
									<p><li class="icon-arrow">
	                <label for="Opsspacedepartment department">报修部门
	                <select  class="fr" style="font-size: 0.75rem;">
	                	<option value="1" selected="selected">1111111111111</option>
	                	<option value="2">2222222222222</option>
	                	<option value="3">3333333333333</option>
	                </select>
	                </label>
	                </li></p>
                <p><li class="icon-arrow">
	                <label for="Userinfor reporter">报修人
	                  <select  class="fr" style="font-size: 0.75rem;">
	                	<option value="1" selected="selected">1111111111111</option>
	                	<option value="2">2222222222222</option>
	                	<option value="3">3333333333333</option>
	                </select>
	                 </label>
	               </li>	</p> 
	              
<p><label for="contact">联系电话<input type="text" style="text-align:right;font-size:24px;float:right;" class="className.contact" v-model="contact" 
                        :disabled='edit'> </label></p>
<p><label for="text">报修内容<input type="text" style="text-align:right;font-size:24px;float:right;" class="className.text" v-model="text" 
                        :disabled='edit'> </label>   </p> 
<p><label for="faultdes">故障描述<input type="text" style="text-align:right;font-size:24px;float:right;" class="className.faultdes" v-model="faultdes" 
                        :disabled='edit'> </label> </p>
<p><label for="position">位置<input type="text" style="text-align:right;font-size:24px;float:right;" class="className.position" v-model="position" 
                        :disabled='edit'> </label> </p>
<p>报修时间<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  ></span></p>
<p>要求时长<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control" ></span></p>
<p>单位<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  ></span></p>
<p>备注<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control" ></span></p>
<p>维修人员反馈<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  ></span></p>
<p>派送建议<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  ></span></p>
<p>二次派单备注<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  ></span></p>
<p>维修人员二次反馈<textarea name="" rows="" cols=""style="text-align:right;font-size:24px;margin:10px 170px 0px; border-style: solid; border-width: 0.5px;"></textarea></p>
<button class="subBtn" style="width:90%;padding:0;margin:30px 32px 20px;float:left;box-sizing:border-box;"  @keyup="sendJsonP(1)" >提交工单</button>
    
  </dd></dl>

</div>
  <footComponent :idx='1'></footComponent>
  </div>
</template>
 
<script>

export default {
    data() {
      return {
        title: "工单系统",
        content: "工单提交"
      }
    },
    methods:{
    sendJsonP(keyword)  {
 	 this.$dialog('sendJsonP');
         this.axios.get('/vue-demo/api/getdata').then((response)=>{
                console.log(response.data)
            }).catch((response)=>{
                console.log(response)
            })
    }
}
//  methods:{
//  submit: function(event) {
// 
//        var formData = new FormData(event.target);
//      
//      //vue-resource
//        this.$http.post('http://192.168.1.113:8080/bcbimsanya/a/ospworkorder/opsworkorder/interface/singlename?', formData).then(res => {
//            // success callback
//        }, err => {
//            // error callback
//      });
//      
//      //axios
//      axios.post('/user',obj).then(res => {
//          // success callback
//      }).catch(err => {
//          // error callback
//      });
//  }
//}
//  methods: {
//    submitFrom()  {
// 						this.$http({
//          url: 'http://192.168.1.113:8080/bcbimsanya/a/ospworkorder/opsworkorder/interface/singlename?',
//          method: 'POST',
//          // 请求体重发送的数据
//          data: {
//            
//          },
//          // 设置请求头
//          headers: {
//              'Content-Type': 'x-www-from-urlencoded'
//          }
//      }).then(function () {
//      	 this.$dialog(['提交成功', 'true']);
//          // 请求成功回调
//      }, function () {
//      	 this.$dialog(['提交失败', 'false']);
//          // 请求失败回调
//      });
//      
//      
//      
//    }
//  },
  }
</script>
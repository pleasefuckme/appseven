<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
    </loanBanner>
    <div class="loanDetail"><dl> <dd>
    	<form @submit.prevent="submitFrom">
<p>设备名称<span class="fr"><input type="text" style="text-align:right;font-size:24px;" class="form-control" ></span></p>
<p>设备编号<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  ></span></p>
<li class="icon-arrow">
	                <span>报修部门</span>
	                <select  class="fr" style="font-size: 0.75rem;">
	                	<option value="1" selected="selected">1111111111111</option>
	                	<option value="2">2222222222222</option>
	                	<option value="3">3333333333333</option>
	                </select>
	                </li>
                <li class="icon-arrow">
	                <span>报修人</span>
	                  <select  class="fr" style="font-size: 0.75rem;">
	                	<option value="1" selected="selected">1111111111111</option>
	                	<option value="2">2222222222222</option>
	                	<option value="3">3333333333333</option>
	                </select>
	               </li>
	                          <!--<div  style="margin-top:20px">报修人</div>
           <select v-model="selectedAutoSign">
                <option v-for="option in options" v-bind:value="option.value" :key="option.value">{{ option.text }}</option>
              </select>
           <span>Selected: {{ selectedAutoSign }}</span>-->

<p>报修时间<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  ></span></p>
<p>联系电话<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  ></span></p>
<p>报修情况<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  ></span></p>
<p>报修内容<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  ></span></p>
<p>故障描述<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control" ></span></p>
<p>位置<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  ></span></p>
<p>要求时长<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control" ></span></p>
<p>单位<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  ></span></p>
<p>备注<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control" ></span></p>
<p>维修人员反馈<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  ></span></p>
<p>派送建议<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  ></span></p>
<p>二次派单备注<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  ></span></p>
<p>维修人员二次反馈<textarea name="" rows="" cols=""style="color:cornflowerblue;text-align:right;font-size:24px;margin:10px 170px 0px; border-style: solid; border-width: 0.5px;"></textarea></p>
</form>
  </dd></dl>
<button class="subBtn" style="width:90%;padding:0;margin:30px 32px 20px;float:left;box-sizing:border-box;" type="submit" >提交工单11</button>
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
    methods: {
      submitFrom()  {
      	this.$dialog(['提交成功', 'true']);
//    	{
//       // this.$dialog(['提交成功', 'true']);
//        // 正常是ajax提交内容--...此处省略
//        setTimeout(() => {
//          this.$router.push('/loan');
//        }, 1800)
//      // 填资料时，根据情况，跳到普通的资料汇总页面或分步骤的资料页面
//      // this.$router.push('/loan/dataComm')
//      this.$router.push('/loan')}
//    	{
//   
//      
//      }


      
        // POST请求
        this.$http({
            url: 'api/ospworkorder/opsworkorder/interface/save?state=1',
            method: 'POST',
            // 请求体重发送的数据
            data: {
              
            },
            // 设置请求头
            headers: {
                'Content-Type': 'x-www-from-urlencoded'
            }
        }).then(function () {
        	 this.$dialog(['提交成功', 'true']);
            // 请求成功回调
        }, function () {
        	 this.$dialog(['提交失败', 'true']);
            // 请求失败回调
        });
   			
        
      
      
      }
    }
  }
  
</script>
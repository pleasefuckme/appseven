<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
    </loanBanner>
    <div class="loanDetail"><dl> <dd>
<p>设备名称<span class="fr"><input type="text" style="text-align:right;font-size:24px;" class="form-control"  name="username"></span></p>
<p>设备编号<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>报修部门<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>报修人<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>报修时间<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>联系电话<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>报修情况<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  name="username"></span></p>
<p>报修内容<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>故障描述<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>位置<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  name="username"></span></p>
<p>要求时长<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  name="username"></span></p>
<p>单位<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>备注<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>维修人员反馈<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  name="username"></span></p>
<p>派送建议<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  name="username"></span></p>
<p>二次派单备注<span class="fr"><input type="text" style="text-align:right ;font-size:24px;"class="form-control"  name="username"></span></p>
<p>维修人员二次反馈<span class="fr"><input type="text" style="text-align:right;font-size:24px; "class="form-control"  name="username"></span></p>
  </dd></dl>
<span class="subBtn" style="width:90%;padding:0;margin:30px 32px 20px;float:left;box-sizing:border-box;"slot="apply" @click="goFillData">提交工单</span>
</div>
  <footComponent :idx='1'></footComponent>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: "工单系统",
        content: "submit"
      }
    },
    methods: {
      goFillData() {
      	{
          this.$dialog(['提交成功', 'true']);
          // 正常是ajax提交内容--...此处省略
          setTimeout(() => {
            this.$router.push('/loan');
          }, 1800)
        // 填资料时，根据情况，跳到普通的资料汇总页面或分步骤的资料页面
        // this.$router.push('/loan/dataComm')
        this.$router.push('/loan')
        }
      }
    }
  }
</script>

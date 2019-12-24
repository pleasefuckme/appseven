<template>
  <div class="container">
  	
    <topComponent :title='appName' :showLeft='false'>
			<span class="save" @click="$router.push('/credit/scan')" slot="right"> 扫码</span>
			<span class="back" @click="$router.push('/login')" slot="left">退出</span>
			</topComponent>
    <ul class="indexList mt20">
      <li v-for='data in list' :class='data.cls' @click='$router.push(data.push)'><b>{{data.tit}}</b>{{data.con}}</li>
    </ul>

    <footComponent :idx='0'></footComponent>
  </div>
</template>
<script>
  // 引入banner组件
  import loanBanner from '../../components/loan/banner'

  export default {
    data() {
      return {
        list: [{
          cls: 'icon01',
          tit: '报修工单',
          con: '',
          push: '/loan/报修列表'
        },
          {
            cls: 'icon03',
            tit: '接单列表',
            con: '',
            push: '/loan/接单列表'
          }

        ]
      }
    },
    methods: {
      goSave() {
        // 点击提交时进行两层判断
        
          // 正常是ajax提交内容--...此处省略
          setTimeout(() => {
            this.$router.push('/二维码扫描');
          }, 1800)
        }
      
      }
    }
    components: {
      loanBanner
    
  }
</script>

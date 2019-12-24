<template>
  <div class="container">
    <topComponent :title='appName' :showLeft='false'><span class="back" @click="$router.push('/loan')" slot="left">返回</span></topComponent>
    <!--<loanBanner></loanBanner>-->
    <ul class="indexList mt20">
     <li class='data.cls' @click="$router.push('/loan/orderDoing')"><b>处理中</b><input type="text" value="" v-model="num3"style="width:15px;"readonly>条</input></li>
     <li class='data.cls' @click="$router.push('/loan/orderToAudit')"><b>处理完毕待审核</b><input type="text" value="" v-model="num4"style="width:15px;"readonly>条</input></li>
     <li class='data.cls' @click="$router.push('/loan/orderClosed')"><b>已关闭</b><input type="text" value="" v-model="num5"style="width:15px;"readonly>条</input></li>
    </ul>
    <!-- <footComponent :idx='0'></footComponent> -->
  </div>
</template>
<script src="/js/vue-resource.min.js"></script>
<script src="/js/vue.min.js"></script>
<script src="../../api/ajax.js"></script>
<script src="../../main.js"></script>
<script>
  // 引入banner组件
  import loanBanner from '../../components/loan/banner'
 import axios from 'axios'
  export default {
    data() {
      return {
				num3:'',
				num4:'',
				num5:'',
				state3:'',
				state4:'',
				state5:'',
				state:''
//         list: [
//           {
//             cls: 'icon01',
//             tit: '处理中',
//             con: '',
//             push: '/loan/orderDoing'
//           },
//           {
//           cls: 'icon03',
//           tit: '处理完毕待审核',
//           con: '',
//           push: '/loan/orderToAudit'
//         },
// //      {
// //          cls: 'icon0',
// //          tit: '二次派单',
// //          con: '',
// //          push: '/loan/orderTwice'
// //        },
//           {
//             cls: 'icon0',
//             tit: '已关闭',
//             con: '',
//             push: '/loan/orderClosed'
//           }
//         ]
      }
    },
		 created(){
		  this.convert3();
		  this.convert4();
		  this.convert5();
					
		},
		methods: {
			convert3: function () {
			// 		       	const routerParams = this.$route.query.id
			// 		         console.log(routerParams);
			// 		       	var id=routerParams;
					         axios.post('/api/ospworkorder/opsworkorder/interface/workorder?state=3&id=').then(response => {
					         	console.log(response.data);
										console.log(response.data.length);
			
					         	//this.title = response.data;
					           // this.state3 = response.data[0].state; 
										 // this.worknum = response.data[0].worknum; 
										 this.num3 = response.data.length; 
					 //console.log(this.eqname );
					       		})
										
					  			},
					       //****获取前一页的text	
				 convert4: function () {
				// 		       	const routerParams = this.$route.query.id
				// 		         console.log(routerParams);
				// 		       	var id=routerParams;
						         axios.post('/api/ospworkorder/opsworkorder/interface/workorder?state=4&id=').then(response => {
						         	console.log(response.data);
											console.log(response.data.length);
						         	//this.title = response.data;
						           // this.state4 = response.data[0].state; 
											 // this.worknum = response.data[0].worknum; 
											 this.num4 = response.data.length; 
						 //console.log(this.eqname );
						       		})
											
						  			},
						       //****获取前一页的text
				 convert5: function () {
				// 		       	const routerParams = this.$route.query.id
				// 		         console.log(routerParams);
				// 		       	var id=routerParams;
						         axios.post('/api/ospworkorder/opsworkorder/interface/workorder?state=5&id=').then(response => {
						         	console.log(response.data);
											console.log(response.data.length);
				
						         	//this.title = response.data;
						           // this.state5 = response.data[0].state; 
											 // this.worknum = response.data[0].worknum; 
											 this.num5 = response.data.length; 
						 //console.log(this.eqname );
						       		})
											
						  			},
//     components: {
//       loanBanner
    }
  }
</script>

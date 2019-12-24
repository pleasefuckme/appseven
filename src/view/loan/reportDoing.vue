<template>
  <div class="container">
    <topComponent :title='appName' :showLeft='false'>
    	<span class="back" @click="$router.push('/loan/报修列表')" slot="left">返回
    	</span>
    </topComponent>
   
   
   <table border="1">
				  <thead>
				    <tr style="font-size:20px;">
				    	<th>工单编号</th>
				      <th>设备名</th>
				      <th>设备编号</th>
				      <th>查看详情</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr v-for="(item,key,index) in eqss" :value='item.id' style="font-size:18px;margin:15px 25px 1px;"   @click="getDataId(item.id)">
				      <td>{{index}}{{item.worknum}} </td>
				      <td>{{index}}{{item.fbname}}  </td>
				      <td>{{index}}{{item.fbnum}}   </td>
				      <td style="color: darkgray;"><span @click="getAppinfo(item.id)">点击此处查看详情</span ></td>
				    </tr>
  </tbody>
</table>
    <!-- <footComponent :idx='0'></footComponent> -->

  </div>
</template>
<script src="/js/vue-resource.min.js"></script>
<script src="/js/vue.min.js"></script>
<script src="../../api/ajax.js"></script>
<script src="../../main.js"></script>
<style type="text/css">
        table
        {
            border-collapse: collapse;
            margin: 0 auto;
            text-align: center;
        }
        table td
        {
            border: 1px solid #fff;
            color: #666;
            height: 30px;
        }
				table th
				{
				    border: 1px solid #008080;
				    color: #fff;
				    height: 30px;
				}
        table thead th
        {
            background-color: #008080;
            width: 100px;
        }
        table tr:nth-child(odd)
        {
            background: #fff;
        }
        table tr:nth-child(even)
        {
            background: #F5FAFA;
        }
    </style>

<script>
		// 引入banner组件
		//import loanBanner from '../../components/loan/banner'
  import axios from 'axios'
  export default {
    data() {
      return {
       title: "报修列表",
       content: "处理中",
       id:'',
			 eqss:[]
    
       
      }
    },
   mounted:function(){
      this.getDp();
    },
    methods: {
      getDp: function () {
      	var id="";
        axios.post('/api/ospworkorder/opsworkorder/interface/workorder?state=3&id='+id).then(response => {
        	console.log(response.data);
        	//this.title = response.data;
        	if(response.data!=0){
        		this.eqss=response.data;
        		console.log(this.eqss);
        		// console.log("****==="+this.id+"===****"+this.content);
        	}
        	})
 			},
 			//**获取当前标签id
 			getDataId:function(id) {
     // console.log('当前被点击的id=' + id);
      return id;
    },
       getAppinfo: function(id){
       	 //console.log('当前被点击的id2=' + id);
        this.$router.push({
          path: '/loan/报修-处理中',
          query: {
          	 id:id
          
          }
        })
      }
      //***
 		} 

  }
</script>

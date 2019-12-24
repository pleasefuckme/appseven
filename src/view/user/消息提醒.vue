<template>
  <div class="container">
    <!--<topComponent title='消息提醒'> <span class="back" @click="$router.push('/loan')" slot="left"></span></topComponent>-->
    	<div class="top"><span class="back"@click="$router.push('/loan')" slot="left">返回</span> <h1>消息提醒</h1> </div>
<div class="loanDetail">



	        	<!-- 	<input type="text" style="font-size:24px;margin:10px 335px 0px;"value="" v-model="reporter" class="fr" readonly>向您派单 , 工单编号为:</input>
	        		<input type="text" style="font-size:16px;margin:7px 47px 0px;"value="" v-model="worknum" class="fr" readonly></input>
	        		 -->
<!--
                 <ul id="example-1">
                 <li  v-for="(item,key,index) in eqss" :value="item.id" >
                  {{item.reporter}} 向您派单，工单编号 {{item.worknum}}  ，设备名称为 ：{{item.fbname}}
                 </li>
               </ul> -->

<table border="0">
				  <thead>
				    <tr style="color:#000000;font-size:20px">
				    	<th>派单人</th>
				      <th>工单编号</th>
				      <th>设备名</th>
				      <th>查看详情</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr v-for="(item,key,index) in eqss" :value='item.id' style="font-size:18px;margin:15px 25px 1px;"  @click="getDataId(item.id)"  >
				      <td>{{index}}{{item.fullname}} </td>
				      <td>{{index}}{{item.worknum}}  </td>
				      <td>{{index}}{{item.fbname}}   </td>
				      <td style="color: darkgray;"><span @click="getAppinfo(item.id)">点击此处查看详情</span ></td>
				    </tr>
  </tbody>
</table>


 <!-- <button class="subBtn" style="width:90%;padding:0;margin:30px 15px 0px 15px;float:none;box-sizing:border-box;"slot="apply" @click="$router.push('/loan/工单详情')">查看详情</button> -->

    <footComponent :idx='2'></footComponent>
    </div>
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
            background-color: #9CA0A9;
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
  import axios from 'axios'

  export default {
    data() {
      return {
        eqss:[],
      	fullname:"",
      	worknum:"",
        fbname:""
      }
    },
    created(){
      this.convert();
    },
    methods: {
    	convert: function () {
        axios.post('/api/ospworkorder/opsworkorder/interface/workorder?state=1&id=').then(response => {
        	console.log(response.data);
        	//this.title = response.data;
           this.eqss = response.data;
            console.log("++++===="+response.data)

//console.log(this.eqname );
      		})
 			},
      getAppinfo() {
              axios.post('/api/ospworkorder/opsworkorder/interface/workorder?state=1&id=').then(response => {
              	console.log(response.data);
              	//this.title = response.data;
                this.reporter = response.data;
                this.$router.push('/loan');
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
          path: '/loan/工单详情',
          query: {
          	 id:id

          }
        })
      }

    },
}
</script>

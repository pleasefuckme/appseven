<template>

  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
      <!--<div class="top"><span class="back" @click="$router.push('/loan')" slot="left"></span></div>-->

    </loanBanner>

    <div class="loanDetail">
    	<form>
    <dl> <dd>
    				<p style="margin:0px 0px 0px;">
	                <label for="osffloorname">所在区域
	                <select  value="" v-model="osffloorname"class="fr" required="required" style="font-size: 0.75rem;margin:3px 10px 0px;text-align: right; text-align-last: right;" >
	                <option disabled value=""class="fr" >请选择区域</option>
	                	<option v-for="(item,key,index) in floss" :value='item.id' >
	                		<!--<p v-model='id' v-show="false">{{item.id}}</p>-->
	                		{{index}}{{item.osffloorname}}
	                	</option>
	                </select>
	                </label>
	          </p>
	          <p style="margin:10px 0px 0px;">
	                <label for="ossroom">所在单体
	                <select  value="" @click="getFbr" v-model="ossroom" required="required" class="fr"style="font-size: 0.75rem;margin:3px 10px 0px;text-align: right; text-align-last: right;">
	                <option disabled value=""class="fr" >请选择单体</option>
	                   <option v-for="(item,key,index) in fbrss" :value='item.id' >
	                		<!--<p v-model='id' v-show="false">{{index}}{{item.id}}</p>-->
	                		{{index}}{{item.ossroom}}
	                	</option>
	                </select>
	                </label>
	          </p>
  					<p style="margin:9px 0px 0px;">
	                <label for="fbname">设备名称
	                <select  @click="getEqn" value="" v-model="fbname" required="required" class="fr"style="font-size: 0.75rem;margin:3px 10px 0px;text-align: right; text-align-last: right;">
	                <option disabled value=""class="fr" >请选择设备</option>
	                	<option v-for="(item,key,index) in eqnss" :value='item.id' >
	                		<!--<p v-model='id' v-show="false">{{index}}{{item.id}}</p>-->
	                		{{index}}{{item.fbname}}
	                	</option>
	                </select>
	                </label>
	           </p>


					<p style="margin:10px 0px 0px;">
	                <label for="osddepartment">报修部门
	                <select   value="" required="required" v-model="osddepartment"class="fr"style="font-size: 0.75rem;margin:3px 10px 0px;text-align: right; text-align-last: right;">
	                <option disabled value=""class="fr" >请选择部门</option>
	                	<option v-for="(item,key,index) in depss" :value='item.id'  >
	                		<!--<p v-model='id' v-show="false">{{index}}{{item.id}}</p>-->
	                		{{index}}{{item.osddepartment}}
	                	</option>
	                </select>
	                </label>
	                </p>
      	            <p style="margin:10px 0px 0px;">
	                <label for="fullname" >报修人
	                  <select  @click="getPeo" required="required" value="" v-model="fullname" class="fr"  style="font-size: 0.75rem;margin:3px 10px 0px;text-align: right; text-align-last: right;">
	                	<option disabled value=""class="fr" >请选择报修人</option>
	                	<option v-for="(item,key,index) in peoss" :value='item.id'  >
	                		<!--<p v-model='id' v-show="false">{{index}}{{item.id}}</p>-->
	                		{{index}}{{item.fullname}}
	                	</option>
	                </select>
	                </label>
	                </p>
	     <p style="margin:10px 0px 0px;">联系方式
        <input type="text" required="required" style="text-align:right;font-size:16px;margin:-1px 10px 0px;" maxlength="11" value=""  v-model="contact"  class="fr" placeholder="请输入11位移动电话"></input>

	     </p>
        <p style="margin:10px 0px 0px;">报修内容
        <textarea type="text" required="required" style="text-align:right;font-size:16px;margin:2px 10px 0px;" maxlength="70" value="" v-model="text" class="fr" placeholder="请输入报修内容"></textarea>
        </p>

		<p style="margin:10px 0px 0px;">拍照上传
			<input type="file"  @click="uploadserpRecords"  accept=""  multiple="multiple"
      style="text-align:right;font-size:2px;margin:0px 0px 0px 0px;float:none;"value="" class="fr" >
    </p>


  </dd></dl>

<button @click="submitForm($event);$router.push('/credit/submit')"  class="subBtn" type='primary' style="width:90%;padding:0;margin:10px 17px 20px ;float:left;box-sizing:border-box;">提交工单</button>
    </form>
</div>
<footComponent :idx='1'></footComponent>
  </div>

</template>
<script src="js/vue.min.js"></script>
<script src="../../api/ajax.js"></script>
<script src="../../main.js"></script>
<script>
import axios from 'axios'
export default {
		name:'PostForm',
    data() {
      return {
        title: "工单系统",
        content: "工单提交",
        floss:[],
        osffloorname:"",
        fbrss:[],
        ossroom:"",
        eqnss:[],
        fbname:"",
        depss:[],
        osddepartment:"",
        peoss:[],
        fullname:"",
        contact:"",
        text:"",
        file:""

      }
    },
    mounted:function(){
    	this.getDep();
    	this.getFlo();

    },
    methods:{
	      // post文件上传
        getFile(event){
            //this.file = event.target.file[0];
            console.log("file////*****="+this.$refs.file);
        },

        submitForm(event){

	        	var reg=/^1[3456789]\d{9}$/;

	        	console.log(this.contact)
           if(!reg.test(this.contact)){
             this.$dialog('输入有效的号码');
            }
          else
           {
           //***获取当前时间
            var d = new Date();
           //**********

            event.preventDefault();
            let formData = new FormData();
            formData.append('region', this.osffloorname);
            formData.append('rooms', this.ossroom);
            formData.append('eqname', this.fbname);
            formData.append('department', this.osddepartment);
            formData.append('reporter', this.fullname);
            formData.append('contact', this.contact);
            formData.append('text', this.text);
            formData.append('photo', this.file);
            formData.append('state', 1); //工单状态
            formData.append("create_date",d);//创建时间
            formData.append('urgent',1);//优先级
            console.log("当000"+this.file)

            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            axios.post('/api/ospworkorder/opsworkorder/interface/appsave', formData, config)
            .then(response=>{
                console.log(response)
                console.log(config)
                console.log(this.ossroom+"===++++===***111****="+this.fbname)
                this.$dialog(['提交成功', 'true']);
            }).catch(error=>{
                console.log(error)
            })
        	}
     	  //****
        },



        getFlo:function(){
       	let data={};
//     	this.$axios.post('api/opsspacespaceinfor/opsspacespaceinfor/interface/eqfloor?buildingid=&id='+this.id+'',data).then(res=>{
       	this.$axios.post('api/opsspacespaceinfor/opsspacespaceinfor/interface/eqfloor?buildingid=',data).then(res=>{

       		if(res.data!=0){
              this.floss=res.data;
       		console.log(this.floss);
       		}else{
       			console.log(1);
       		}
       	}).catch(function(error){
       		that.$message.ERROR('系统错误！');
       	}
       	)
     },
       getFbr:function(){
       console.log("floorid"+this.fbfloor)
        let data={};
       	this.$axios.post('api/opsspacespaceinfor/opsspacespaceinfor/interface/eqroom?buildingid=&floorid='+this.osffloorname+'',data).then(res=>{
       		if(res.data!=0){
              this.fbrss=res.data;
       		console.log(this.fbrss);
       		}else{
       			console.log(1);
       		}
       	}).catch(function(error){
       		that.$message.ERROR('系统错误！');
       	}
       	)
  },
        getEqn:function(){
		// console.log(this.id );

       	let data={};
       	this.$axios.post('api/ospworkorder/opsworkorder/interface/eqdevice?floorid='+this.osffloorname+'&roomid='+this.ossroom+'',data).then(res=>{
       		if(res.data!=0){
              this.eqnss=res.data;
       		console.log(this.eqnss);
       		 console.log("eqid"+this.fbname)
       		}else{
       			console.log(1);

       		}
       	}).catch(function(error){
       		that.$message.ERROR('系统错误！');
       	}
       	)
       },
         //*************下拉框部门
       getDep:function(){
		console.log(this.id);

       	let data={};
       	this.$axios.post('api/ospworkorder/opsworkorder/interface/departapp?department=',data).then(res=>{
       		if(res.data!=0){
              this.depss=res.data;
       		console.log(this.depss);
       		}else{
       			console.log(1);
       		}
       	}).catch(function(error){
       		that.$message.ERROR('系统错误！');
       	}
       	)
       },
       //****下拉框人员***
       getPeo:function(){


       	let data={};
       	this.$axios.post('api/ospworkorder/opsworkorder/interface/peoapp?id='+this.osddepartment+'',data).then(res=>{
       		if(res.data!=0){
              this.peoss=res.data;
       		console.log(this.peoss);
       		}else{
       			console.log(1);
       		}
       	}).catch(function(error){
       		that.$message.ERROR('系统错误！');
       	}
       	)
       },
       //******图片上传*****
     uploadserpRecords (e) {
     let file = e.target.files[0]
     console.log(e)
      console.log(e.target.files[0])
      console.log(e.target.files)
       console.log(file )
     if (file === undefined) {
       return
        }
  if (file.size / 1024 > 1025) { // 文件大于1M（根据需求更改），进行压缩上传
    that.photoCompress(file, { // 调用压缩图片方法
      quality: 0.2
    }, function (base64Codes) {
      // console.log("压缩后：" + base.length / 1024 + " " + base);
      let bl = that.base64UrlToBlob(base64Codes)
      // file.append('file', bl, 'file_' + Date.parse(new Date()) + '.jpg') // 文件对象
      that.uploadLice(bl) // 请求图片上传接口
    })
  } else { // 小于等于1M 原图上传
    this.uploadLice(file)
  }
},
/**
 * base64 转 Blob 格式 和file格式
 */
base64UrlToBlob (urlData) {
  let arr = urlData.split(','),
    mime = arr[0].match(/:(.*?);/)[1], // 去掉url的头，并转化为byte
    bstr = atob(arr[1]), // 处理异常,将ascii码小于0的转换为大于0
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  // 转blob
  // return new Blob([u8arr], {type: mime})
  let filename = Date.parse(new Date())  + '.jpg'
  // 转file
  return new File([u8arr], filename, {type: mime})
},
    /*
    压缩图片
    file：文件(类型是图片格式)，
    obj：文件压缩后对象width， height， quality(0-1)
    callback：容器或者回调函数
*/
photoCompress (file, obj, callback) {
  let that = this
  let ready = new FileReader()
  /* 开始读取指定File对象中的内容. 读取操作完成时,返回一个URL格式的字符串. */
  ready.readAsDataURL(file)
  ready.onload = function () {
    let re = this.result
    that.canvasDataURL(re, obj, callback) // 开始压缩
  }
},
/* 利用canvas数据化图片进行压缩 */
/* 图片转base64 */
canvasDataURL (path, obj, callback) {
  let img = new Image()
  img.src = path
  img.onload = function () {
    let that = this // 指到img
    // 默认按比例压缩
    let w = that.width,
      h = that.height,
      scale = w / h
    w = obj.width || w
    h = obj.height || (w / scale)
    let quality = 0.2 // 默认图片质量为0.7
    // 生成canvas
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    // 创建属性节点
    let anw = document.createAttribute('width')
    anw.nodeValue = w
    let anh = document.createAttribute('height')
    anh.nodeValue = h
    canvas.setAttributeNode(anw)
    canvas.setAttributeNode(anh)
    ctx.drawImage(that, 0, 0, w, h)
    // 图像质量
    if (obj.quality && obj.quality >= 1 && obj.quality < 0) {
      quality = obj.quality
    }
    // quality值越小，所绘制出的图像越模糊
    let base64 = canvas.toDataURL('image/jpg', quality)
    // 回调函数返回base64的值
    callback(base64)
  }
},
//  返回file文件，调用接口执行上传
uploadLice (file) {


		console.log(this.id);

       	let data={};
       	this.$axios.post('api/tag/fileUpload?file=',data).then(res=>{
       		if(res.data!=0){
              this.depss=res.data;
       		console.log(this.depss);
       		}else{
       			console.log(1);
       		}
       	}).catch(function(error){
       		that.$message.ERROR('系统错误！');
       	}
       	)


},

       //****
    }

}

</script>
<style>

    input::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: #aab2bd;
       /* placeholder字体大小  */
       font-size: 12px;
    }
    textarea::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: #aab2bd;
       /* placeholder字体大小  */
       font-size: 12px;
    }
</style>

<template>

  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
      <div class="top"><span class="back" @click="$router.push('/loan')" slot="left"></span></div>

    </loanBanner>

    <div class="loanDetail">
    	<form>
    <dl> <dd>
    <p style="margin:10px 0px 0px;">完成时间
   <input type="date" required="required" style="text-align:right;font-size:14.25px;margin:2px 10px 0px;" maxlength="70" value="" v-model="successdate" class="fr" placeholder="请输入完成时间"></input>
   </p>
        <p style="margin:10px 0px 0px;">维修记录
        <textarea type="text" required="required" style="text-align:right;font-size:14.25px;margin:2px 10px 0px;" maxlength="70" value="" v-model="repaircontent" class="fr" placeholder="请输入维修记录"></textarea>
        </p>
				
		
		<p style="margin:35px 0px 0px;">
			维修图片
			<!--<input type="file"  accept=".jpg,.png,.jpeg"@change="getFile($event)"  style="text-align:right;font-size:2px;margin:5px -15px 0px 10px;float:right;"value="" class="fr"  >-->
		 <input type="file"  @click="uploadserpRecords"  accept=".jpg,.png,.jpeg"  multiple="multiple"  style="text-align:right;font-size:2px;margin:5px 45px 0px 30px;float:none;"value="" class="fr" >
   
  	</p>


  </dd></dl>

<button @click="submitForm($event)"  class="subBtn" type='primary' style="width:90%;padding:0;margin:10px 17px 20px ;float:left;box-sizing:border-box;">提交反馈</button>
    </form>
</div>
<!-- <footComponent :idx='1'></footComponent> -->
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
        content: "维修反馈",
        update_by:"",
        successdate:"",
        repaircontent:"",
        file:""

      }
    },created(){
      
      this.getParams();
    },
    methods:{
	      // post文件上传
        getFile(event){
            //this.file = event.target.file[0];
            console.log("file////*****="+this.$refs.file);
        },
        
        submitForm(event){
        	
// 	        	var reg=/^1[3456789]\d{9}$/;
// 	        	
// 	        	console.log(this.contact)
//            if(!reg.test(this.contact)){
//              this.$dialog('输入有效的号码');
//             }
          // else
           {
           //***获取当前时间
            var d = new Date();
           //**********
           
            event.preventDefault();
            let formData = new FormData();
            formData.append('successdate', this.successdate);
            formData.append('update_by', d);
            formData.append('repaircontent', this.repaircontent);
            formData.append('photo', this.file);
            console.log("当000"+this.successdate);
            
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
						const routerParams = this.$route.query.id
						console.log(routerParams);
						var id=routerParams;
            axios.post('/api/opsrepairorder/opsrepairorder/interface/appsave?eqid='+id, formData, config)
            .then(response=>{
                console.log(response)
                console.log(config)
                this.$dialog(['反馈成功', 'true']);
								this.$router.push('/loan')
            }).catch(error=>{
                console.log(error)
            })
        	}
     	  //****
        }, getParams(){
        // 取到路由带过来的参数
        const routerParams = this.$route.query.id
        console.log(routerParams);
      } ,
       //******图片上传*****
     uploadserpRecords (e) {
     let file = e.target.files[0].target.
     console.log("文件="+e)
      console.log("文件2="+e.target.files[0])
      console.log("文件3="+e.target.files)
       console.log("文件4="+file )
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
    let base64 = canvas.toDataURL('image/jpeg', quality)
    // 回调函数返回base64的值
    callback(base64)
  }
},
//  返回file文件，调用接口执行上传
uploadLice (file) {
  console.log("file357行="+file)
  uploadLog(file, (data) => {
    this.form.operatingLicense = data
    console.log("360行="+data)
  })
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

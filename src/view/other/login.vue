<template>
  <div class="container bgF">
    <topComponent title='工单系统登录' :showLeft='false'>
      <!--<span class="back" @click='goCancel' slot="left">取消</span>-->
    </topComponent>
    <h2 class="logoIcon">{{appName}}</h2>
    <ul class="formCom form-login form-mini">
      <li class="icon-clear">
        <label>
          <span>*账号</span>
          <input type="text" placeholder="请输入账号" v-model.text='name'>
          <i @click='name = ""'></i>
        </label>
      </li>
      <li :class='[{"icon-eye1":showPwd},{"icon-eye2":!showPwd}]'>
        <label>
          <span>*密码</span>
          <input :type="showPwd?'password':'text'" placeholder="请输入密码" v-model.trim='pwd'>
          <i @click='showPwd = !showPwd'></i>
        </label>
      </li>
     <!-- <li>
         验证码
        <canvasCode @codeHasChange='sendCode'></canvasCode>
      </li> -->
    </ul>

    <div class="btnWarp">

      <el-checkbox v-model="checked">是否记住密码</el-checkbox>
      <span class="subBtn" @click='logIn'>登录</span>
    </div>
    <div class="forgetWarp">
      <span class="fr col6" @click="$router.push('/reg')">马上注册</span>
      <span class="col6" @click="$router.push('/forget')">忘记密码？</span>
    </div>
  </div>
</template>
<!-- <script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.13.0/lib/index.js"></script> -->
<script type="text/ecmascript-6">

	import axios from 'axios'
  const Base64 = require('js-base64').Base64
  export default {
    data() {
      return {
        name: '',
        pwd: '',
        code: '',
        checked: true,
        showPwd: true,  //开关--密码可见
        canvas: {}      //存放canvas DOM节点
      }
    },
    mounted() {
         this.getCookie();
        },
    methods: {
      logIn() {
        if (this.checked == true) {
            console.log("checked == true");
            //传入账号名，密码，和保存天数3个参数
            this.setCookie(this.name, this.pwd, 7);
        }else {
          console.log("清空Cookie");
          //清空Cookie

          this.clearCookie();
        }
      	//***
      	  if (/^[\d\D]{5,12}$/.test(this.name) === false) this.$dialog('账号不正确');
        else if (/^[\d\D]{5,12}$/.test(this.pwd) === false) this.$dialog('密码不正确');
        // else if (this.code.toUpperCase() !== this.canvasCode.codeNums.toUpperCase()) this.$dialog('验证码不正确');
        else {
        let formData = new FormData();
      	formData.append('username', this.name);
        formData.append('password', this.pwd);
        let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
      	axios.post('api/login', formData, config)
            .then(response=>{
             console.log(response)
            }).catch(error=>{
                console.log(error)
            })
        this.$router.push('/loan')
       }

      },
      //设置cookie
      setCookie(c_name, c_pwd, exdays) {
          var exdate = new Date(); //获取时间
          exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
          //字符串拼接cookie
          window.document.cookie = "name" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
          window.document.cookie = "pwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
          console.log("测试登录记住密码"+document.cookie)
      },
      //读取cookie
      getCookie() {
          if (document.cookie.length > 0) {
              var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
              for (var i = 0; i < arr.length; i++) {
                  var arr2 = arr[i].split('='); //再次切割
                  //判断查找相对应的值
                  if (arr2[0] == 'name') {
                      this.name = arr2[1]; //保存到保存数据的地方
                  } else if (arr2[0] == 'pwd') {
                      this.pwd = arr2[1];
                  }
              }
          }
      },
      //清除cookie
      clearCookie() {
          this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
      },
      sendCode(val) {
        this.code = val
      }
    }
  }
</script>

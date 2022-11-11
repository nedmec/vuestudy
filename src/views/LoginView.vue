<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <div style=" justify-content: center;align-content: center;flex-direction: column;display: flex" class="login-wrap" v-show="showLog">
    <h3>登录</h3>
    <p v-show="showTips">{{Tips}}</p>
    <el-form
        ref="loginForm"
        label-width="41vw"
        style="max-width:55vw;"
        :rules="rules"
        :model="user"

    >
      <el-form-item
          label="用户名"
          prop="name"
      >
        <el-input v-model="user.name"  placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item
          label="密码"
          prop="password"
           >
        <el-input type="password" autocomplete="off" v-model="user.password" placeholder="请输入密码"/><!--v-model双向绑定-->
      </el-form-item>

    </el-form>
    <el-row class="mb-4" style="align-content: center;flex-direction: column;"  >
      <el-button v-on:click="loginForm" plain>登录</el-button>
      <el-button v-on:click="RegisterForm" plain>注册</el-button><!--v-on事件监听登录或者注册-->

    </el-row>
  </div>
  <div class="register-wrap" v-show="showReg">
  <h3>注册</h3>
    <p v-show="showTips">{{Tips}}</p>
    <el-form
        label-width="41vw"
        style="max-width:55vw;"
        :model="user"
        :rules="rules">
      <el-form-item
          label="用户名"
          prop="name">
        <el-input type="text" placeholder="请输入用户名" v-model="user.name" />
      </el-form-item>
    <el-form-item
      label="密码"
      prop="password">
    <el-input type="password" placeholder="请输入密码" v-model="user.password"/>
    </el-form-item>
      <el-form-item
        label="年龄"
        prop="age">
    <el-input type="number" placeholder="请输入年龄" v-model="user.age"/></el-form-item>
    </el-form>
    <input type="radio" id="first" value="true" v-model="user.sex">
    <label for="first">男</label>
    <input type="radio" id="second" value="false" v-model="user.sex">
    <label for="second">女</label>
    <el-button v-on:click="RegisterForm" plain>确定</el-button>
    <el-button v-on:click="back" plain>返回</el-button>

  </div>
</template>

<script>



export default {
  name: "LoginView",
  data: function () {
    return {

      showTips:true,
      showLog:true,
      showReg:false,
      Tips:"",
      user: {
        age:"",
        id:"",
        name:"",
        password:"",
        sex: true
      },
      rules:{
        name: [{required:true,}],
        password: [{required:true,}]
      }
    };
  },
  methods:{
    back(){
      this.showLog=true;
      this.showReg=false;
    },
    RegisterForm(){
        if(this.showLog)
        {
          this.showLog=false;
          this.showReg=true;
        }
        else {
          if(this.user.name===""){
            alert("请输入用户名")
          }else {
            if (this.user.password===""){
              alert("请输入密码")
            }else {
                this.$axios.post("http://localhost:8080/service/student/register",this.user)
                    .then((res)=>{
                      if(res.data !== "") {
                        alert("注册成功");
                        this.$router.push({name: "Main",query:{username:res.data.name}});

                      }
                    })
            }
          }
        }
    },
    loginForm(){
      if(this.user.name === "") {
        alert("请输入用户名")
        }else if (this.user.password === "") {
          alert("请输入密码")
        }else
      this.$refs.loginForm.validate( async (valid) =>{
        if(valid){
          this.$axios.post("http://localhost:8080/service/student/login",this.$qs.stringify(this.user))
                  .then((res)=>{
                    if(res.data !== "") {
                       this.$router.push({name: "Main",query:{username:res.data.name,userid:res.data.id}});
                       // this.Tips=res.data ;
                    }else {
                      alert("用户名或密码错误")
                    }
                  })
        }
      })
    }
  }
}
</script>

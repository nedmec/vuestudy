<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <div style=" justify-content: center;align-content: center;flex-direction: column;display: flex">

    <el-form
        ref="LoginForm resetForm"
        label-width="41vw"
        style="max-width:55vw;"

    >
      <el-form-item
          label="用户名"
          prop="name"

          :rules="  [
              {required: true, message: '请输入用户名', trigger: 'blur'},
            ]">
        <el-input v-model="name" aria-placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item
          label="密码"

          prop="password"
          :rules="[
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {min: 6, max: 10, message: '密码长度为6到10位', trigger: 'blur'},
        ]" >
        <el-input type="password" autocomplete="off" v-model="password" aria-placeholder="请输入密码"/>
      </el-form-item>

    </el-form>
    <el-row class="mb-4" style="align-content: center;flex-direction: column;"  >
      <el-button  plain>登录</el-button>
      <el-button  plain>重置</el-button>

    </el-row>
  </div>
</template>

<script>


export default {
  name: "LoginView",
  data() {
    return {
      name: '',
      password: '',
    }
  },
  methods:{
    resetForm() {
      this.user.name='';
      this.user.password='';
    },
    loginForm(){
      this.$refs.loginForm.validate(async (valid)=>{
        if(valid){
          this.$axios.post("studetnt/login",this.user).then(response=>{
            let userInf =response.data;
            if(userInf==null) {
              alert("用户名或密码错误");
            }else {
              this.$setSessionStorage('user',userInf);
              this.$router.push()
            }
          })
        }
        else {

        }
      })
    }
  }
}
</script>

<style scoped>

</style>
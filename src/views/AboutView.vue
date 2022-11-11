<template>
  <div class="about" v-show="showLog">
    <h2>你好，{{user.name}}</h2>
    <el-row class="mb-4" style="align-content: center;flex-direction: column;"  >
      <el-button v-on:click="deleteForm" plain>注销账号</el-button>
      <el-button v-on:click="updateForm" plain>修改信息</el-button><!--v-on事件监听登录或者注册-->
      <el-button v-on:click="showusers" plain>查看用户</el-button>
    </el-row>
  </div>
  <div class="update" v-show="showReg">
    <h2>修改</h2>
    <el-form
        label-width="41vw"
        style="max-width:55vw;"
        :model="user"
        :rules="rules">
      <el-form-item
          label="新用户名"
          prop="name">
        <el-input type="text" placeholder="请输入新用户名" v-model="user.name" />
      </el-form-item>
      <el-form-item
          label="新密码"
          prop="password">
        <el-input type="text" placeholder="请输入新密码" v-model="user.password" />
      </el-form-item>
      <el-form-item
          label="新年龄"
          prop="age">
        <el-input type="text" placeholder="请输入新年龄" v-model="user.age" />
      </el-form-item>
    </el-form>
    <el-button v-on:click="updateForm" plain>确定</el-button>
    <el-button v-on:click="backA" plain>返回</el-button>
  </div>
</template>
<script>
export default {
  data:function () {
    return{
      showReg:false,
      showLog:true,
      user: {
        age:"",
        id:this.$route.query.userid,
        name:this.$route.query.username,
        password:"",
        sex: true,

      },
      rules:{
        name: [{required:true,}],
        password: [{required:true,}]
      }

    }

  },
  methods:{
    deleteForm(){
        this.$axios.delete("http://localhost:8080/service/student/delete",{params:{name:this.user.name}})
            .then((res)=>{
              if(res.status === 200) {
                alert("注销成功");
                this.$router.push({name:'home'});
              }else {
                alert("注销失败请联系管理员！");
              }

            })
    },
    updateForm(){
      if(this.showLog) {
        this.showLog=false;
        this.showReg=true;
      }else {
          this.$axios.put("http://localhost:8080/service/student/update",this.user)
              .then((res)=>{
                if (res.status === 200){
                  alert("修改成功");
                  this.showLog=true;
                  this.showReg=false;
                }else {
                  alert("修改失败请联系管理员！");
                }
              })
      }

    },
    showusers(){
      this.$axios.post("http://localhost:8080/service/student/getAll")
          .then((res)=>{
            if (res.status === 200) {
              this.$router.push({name:"User",query:{user:res.data}});
              // this.user.name=res.data;
            }else {
              alert("查看失败");
            }
          })
    },
    backA(){
      this.showLog=true;
      this.showReg=false;

    }
  }
}
</script>
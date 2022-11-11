<template>
  <div class="common-layout">
    <el-container class="wrapper">
      <el-header class="header" height="5vh">


        <nav>
          <router-link to="/">登录</router-link> |
          <router-link to="/about">用户</router-link>
        </nav>

      </el-header>

      <el-main class="main">
        <router-view/>

      </el-main>
      <el-footer class="Footer" height=4vh >  @ 版权所有 2022 YDH</el-footer>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: aliceblue;
}

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  position: fixed;
  top: 0px;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #42b983;
}
.Footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  background: cornflowerblue;
  align-items: center;
  justify-content: center;
}
.el-row{
  height: 5vh;
}

</style>

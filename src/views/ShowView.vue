<template>
<h2>{{user}}</h2>
</template>

<script>
export default {
  name: "ShowView",
  data(){
    return{
      user:this.$route.query.user,
    }
  }

}
</script>

<style scoped>

</style>
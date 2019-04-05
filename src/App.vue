<template>
  <div id="app">
      <router-view></router-view>
       <foottab></foottab>
  </div>
</template>

<script>
	
import Foottab from "common/foottab.vue"
export default {
  name: 'App',
  components:{
  Foottab
  }
}
</script>

<style lang="less">
@import "~style/index.less";

</style>

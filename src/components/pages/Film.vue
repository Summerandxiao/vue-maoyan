<template>
	<div class="film">
	    <Head></Head>
		<Tab></Tab>
		<router-view></router-view>
		
	</div>
</template>

<script>
	import Tab from "common/tab.vue"
	import Head from "common/head.vue"
	export default{
		name:"Film",
		components:{
			Tab,
			Head
		}
	}
</script>

<style lang="less" scoped>
@import "~style/index.less";
.film{
	.w(375);
	position:fixed;
	.top(0);
	.bottom(44);
	overflow:hidden;
}
</style>
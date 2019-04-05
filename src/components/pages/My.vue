<template>
	<div>
	    <Head></Head>
		<myontab></myontab>
		<router-view></router-view>
		
	</div>
	
</template>

<script>
	import Head from "common/head.vue"
	import myontab from "pages/myTab.vue"
		export default{
			name:"My",
			components:{
				myontab,
				Head
			}
			
		}
</script>

<style lang="less">
	
</style>
<template>
	<div class="tab">
		<router-link tag="div" to="film/address" active-class="selected">
		<span class="item">北京</span>
	</router-link>
	<router-link tag="div" to="film/search" active-class="selected">
		<div class="search"><span>搜影院</span></div>
		
	</router-link>
	
	</div>
</template>

<script>
export default{
	name:'Tab'
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
	.tab{
		background:@bg-color-tab;
		display:flex;
		justify-content:space-around;
		align-items:center;
		.h(58);
		
		color:#b2b2b2;
		font-size:15px;
		
		.search{
			background: #fff;
			
			.w(270);
			
			.h(30);
			
			.l_h(30);
			font-size:@f-s-xs;
			border:none;
			border-radius:5px;
			
			text-align: center;
		}
	}
   
   	
   	
   
</style>
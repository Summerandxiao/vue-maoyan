<template>
	<div class="tab">
		  
		<router-link
			v-for="(item,index) in list"
			:key="index"
			:to="item.path"
			tag="div"
			active-class="selected"
			>
			<span class="items">{{item.name}}</span>
		</router-link>  
		 
	</div>
</template>

<script>
	export default{
		name:"Tab",
		data(){
			return{
				list:[
				{path:"address",name:"北京"},
				{path:"hot",name:"正在热映"},
				{path:"coming",name:"即将上映"},
				{path:"search",name:"搜索"}
				
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "~style/index.less";
	.tab{
		.w(375);
		.h(44);
		.l_h(43);
		background:white;
		z-index:20;
		display:flex;
		font-size:@f-s-m;
		color:@font-color-c;
		justify-content:space-around;
		.border-bottom(#e6e6e6);
		.items{
			font-weight:700;
		}
		.selected{
			color:@font-color-h;
			border-bottom:3px solid @font-color-h;
			
		}
	}
	
</style>
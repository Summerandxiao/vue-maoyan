<template>
	<div class="footTab">
		 <router-link
		 	v-for="(item,index) in footList"
		 	:key="index"
		 	:to="item.path"
		 	active-class="selected"
		 	tag="div"
		 >
		 <span class="items">{{item.name}}</span>
		 </router-link>
	</div>
</template>

<script>
	
	export default{
		name:"Foottab",
		
		data(){
			return{
				footList:[
				{path:"/film",name:"电影"},
				{path:"/cinema",name:"影院"},
				{path:"/my",name:"我的"}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
@import "~style/index.less";
	.footTab{
		.w(375);
		.h(44);
		.l_h(44);
		display:flex;
		position:absolute;
		.bottom(0);
		background:white;
		
		font-size:@f-s-m;
		color:@font-color-c;
		justify-content:space-around;
		border-top:1px solid @border-color;
		.items{
			font-weight:700;
		}
		.selected{
			color:@font-color-h;
			border-bottom:@font-color-h;
		}
	}
</style>
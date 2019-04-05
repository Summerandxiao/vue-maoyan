<template>
	<div class="mytab">
		<router-link
			v-for="(item,index) in zho"
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
		name:"MyTab",
		data(){
			return{
				zho:[
						{path:"mtzh",name:"美团账号登录"},
						{path:"phone",name:"手机验证登录"}
					]
			}
		}
	}
</script>

<style lang="less">
@import "~style/index.less";
	.mytab{
		.w(375);
		.h(44);
		.l_h(44);
		display:flex;
		position:absolute;
		.top(50);
		border-bottom:3px solid #d6d6d6;
		font-size:@f-s-m;
		color:@font-color-c;
		justify-content:space-around;
		border-top:1px solid @border-color;
		.items{
			font-weight:700;
		}
		.selected{
			color:@font-color-h;
			border-bottom:3px solid @font-color-h;
		}
	}
</style>
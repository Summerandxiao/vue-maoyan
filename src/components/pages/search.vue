<template>
	<div class="search">
	<div class="sousuo">
	<input class="sea-c" type="search" placeholder="搜影院" />
	<a @click="back()">取消</a>
	
	
	</div>	
	<div class="repair">页面修复中...无法进行搜索操作！</div>	
			
	</div>
</template>

<script>
	
	export default{
		name:'Search',
		
		methods:{
			back(){
				this.$router.back();
			}
		}
		
	}
</script>

<style lang="less"scope>
@import '~style/index.less';
.search{
	height:667px;
	background:#f5f5f5;
	

.sousuo{
	display:flex;
	-webkit-box-align:center;
	justify-content:space-around;
	align-items:center;
	.padding(8,0,8,10);
	border-bottom:1px solid #e5e5e5;
	z-index:1;
	
	
	.sea-c{
			font-size:@f-s-s;
			border-radius:3px;
			text-align: center;	
			background: #fff;
			border:none;
			.w(310);
			.h(30);
			line-height:25px;
			.margin(8,0,10,5);
			}
			a{
				font-size:@f-s-m;
				color:@bg-color;
				.padding(0,0,10,10);
			}
					
}
	
	.repair{
		font-size:@f-s-l;
		margin-top: 150px;
		text-align: center;
	}
}
</style>
<template>
	<div class="s-header">
		<span class="back" @click='back'> < </span>
		猫眼电影
	</div>
</template>

<script>
export default{
	name:'SHeader',
	methods:{
			back(){
				this.$router.back();
			}
		},
	
	
}
</script>

<style lang="less">
@import '~style/index.less';
   .s-header{
   	background:#e54847;
   	color: #fff;
   	text-align: center;
   	font-size:18px;
   	.h(118);
   	.l_h(118);
 position:relative;
   	.back{
   		
   		position: absolute;
   		left:35px;
   		
   	}
   	
   }
</style>
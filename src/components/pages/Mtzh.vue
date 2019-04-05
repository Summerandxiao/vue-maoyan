<template>
	<div class="mtzh">
		<div class="input">
			<el-input
			  placeholder="账户名/手机号/Email"
			  v-model="input10"
			  clearable>
			</el-input>
			<el-input class="pass" placeholder="请输入密码" v-model="input11" show-password></el-input>
		</div>
		
		
		<el-button class="login"  type="text" @click="open">登录</el-button>
		<p>
			<el-button class="register"  type="text" @click="open">立即注册</el-button>
			<el-button class="find"  type="text" @click="open">找回密码</el-button>
		</p>
		 <b class="ban">&copy;猫眼电影   客服电话 :  <span>400-670-5335</span></b>
	</div>
	
</template>

<script>
	export default{
		 data() {
			      return {
			        input11: '',
			        input10:''
			      }
			   },
		 methods: {
		      open() {
		        this.$alert('此功能尚未开通', '提示', {
		          confirmButtonText: '确定',
		          callback: action => {
		            this.$message({
		              type: 'info',
		              message: `action: ${ action }`
		            });
		          }
		        });
		      }
		    }
	}
</script>

<style lang="less" scope>
@import "~style/index.less";
.mtzh{
	.w(375);
	position:absolute;
	.top(94);
	.bottom(44);
	
	background:#f8f8f8;
	.input{
		background:white;
	}
	.login{
		.h(50);
		.w(350);
		background:@font-color-h;
		margin-left:12.5px;
		color:white;
		font-size:@f-s-xl;
	}
	
	p{
		.w(375);
		.h(30);
		.l_h(30);
		display:flex;
		justify-content:space-around;
		.register{
				margin-left:-95px;
				color:@font-color-h;
			}
			.find{
				margin-right:-95px;
				color:@font-color-h;
			}
			
	}
	.ban{
		.w(375);
		.h(30);
		.l_h(30);
		text-align:center;
		font-size:@f-s-s;
		font-weight:normal;
		display:block;
		margin-top:10px;
		span{
			color:@font-color-h;
		}
	}
	
}
</style>
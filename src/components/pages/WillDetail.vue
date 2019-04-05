<template>
	<div class="wrapper">
		<div class="content">
			<div class="hes">
				<span @click="back"><</span>
				<span>{{params.nm}}</span>
				<span></span>
			</div>
			<div class="bg">
				<img class="mg" :src="params.imgUrl" width="375" height="180" alt="" />
			</div>
			<div class="filmd">
				<img :src="params.imgUrl" alt="" width="110" height="150" />
				<ul class="singldetail">
					<li><h4>{{params.nm}}</h4></li>
					<li>{{willdetail[0].enm}}</li>
					<li>{{params.wish}}人想看</li>
					<li>{{willdetail[0].cat}} </li>
					<li>{{willdetail[0].country}}/{{willdetail[0].time}}</li>
					<li>{{willdetail[0].play}}</li>
				</ul>
			</div>
			<el-button class="buy" type="text" @click="open">特惠购票</el-button>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				willdetail: []
			}
		},
		
			methods: {
				normalSongList(list){
				
				let snum =(list.snum/10000).toFixed(1);
				this.willdetail.push ({
							snum:snum,
							nm:list.nm,
							enm:list.enm,
							sc:list.sc,
							cat:list.cat,
							ver:list.ver,
						    time:list.dur,
						    country:list.src,
						    play:list.pubDesc
							})
				
					/*this.detail=arr*/
					console.log(this.willdetail)
				},
				
			
				back() {
					this.$router.back({path:"/film/coming"})
				},
			 	open() {
				        this.$alert('此功能尚未开通', '提示', {
				          confirmButtonText: '确定',
				          callback: action => {
				            this.$message({
				              type: 'info',
				              message: `action: ${ action }`
				            })
				          }
				        })
				      }

			},
		computed: {
			params() {
				return this.$route.params
			}
		},
		created() {
			 if(!this.$route.params.nm) {
				this.back()
			}
			 let url = `/my/ajax/detailmovie?movieId=${this.$route.params.id}`
			 this.$axios.get(url)
			     .then((data)=>{
			     	let detail = data.detailMovie
			     	console.log(data.detailMovie)
			     	this.normalSongList(data.detailMovie)
			     	
			     })
			     }
	}
</script>

<style lang="less" scoped>
	@import "~style/index.less";
	.wrapper {
		background: white;
		z-index: 20;
		.w(375);
		position: fixed;
		top: 0;
		bottom: 0;
	
		.hes {
			.w(375);
			.h(50);
			.l_h(50);
			color: white;
			font-size: @f-s-l;
			background: @bg-color;
			display: flex;
			justify-content: space-around;
			span:nth-child(1) {
				margin-left: -20px;
			}
		}
		.bg {
			
			.w(375);
			.h(180);
			position: absolute;
			.top(50);
			z-index: -9;
			
			background:rgba(0,0,0,0.7);
			.mg {
				opacity: 0.5;
				filter: blur(15px);
			}
		}
		.buy{
				.w(350);
				.h(35);
				margin-left:12.5px;
				text-align:center;
				background:@font-color-h;
				color:white;
				position:absolute;
			    .top(250);
			}
		.filmd{
			.w(375);
			.h(180);
			position: absolute;
			.top(50);
			display:flex;
			align-items:center;
			font-size:@f-s-xs; 
			color:@font-color;
			
			img{
				.padding(0,20,0,20)
			}
			.singldetail{
				.w(220);
				float:right;
				.h(150);
				li{
					.padding(0,0,7,0);
				}
				h4{
					font-size:@f-s-xl;
				    color:white;
				    .w(220);
				    white-space:nowrap;
				    overflow:hidden;
				    text-overflow:ellipsis;
				}
				li:nth-child(2){
					.w(220);
					white-space:nowrap;
					overflow:hidden;
					text-overflow:ellipsis;
				}
				li:nth-child(3){
					    color:@font-color-zhe;
						font-size:@f-s-m;
						font-weight:700;
				}
			}
		}
		
	}
</style>
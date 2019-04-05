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
					<li>{{detail[0].enm}}</li>
					<li><span>{{detail[0].sc}}</span>  ({{detail[0].snum}}万人评)</li>
					<li>{{detail[0].cat}}   {{detail[0].ver}}</li>
					<li>{{detail[0].country}}/{{detail[0].time}}</li>
					<li>{{detail[0].play}}</li>
				</ul>
				<el-button type="text" @click="open">购票</el-button>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				detail: []
			}
		},
		
			methods: {
				normalSongList(list){
				
				let snum =(list.snum/10000).toFixed(1);
				this.detail.push ({
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
					console.log(this.detail)
				},
				
			
				back() {
					this.$router.back({path:"/film/hot"})
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
		top:0;
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
		.filmd{
			.w(375);
			.h(180);
			position: absolute;
			.top(50);
			display:flex;
			justify-content:space-around;
			align-items:center;
			font-size:@f-s-xs; 
			color:@font-color;
			.singldetail{
				.h(150);
				li{
					.padding(0,0,7,0);
				}
				h4{
					font-size:@f-s-xl;
				    color:white;
				    .w(145);
				    white-space:nowrap;
				    overflow:hidden;
				    text-overflow:ellipsis;
				}
				li:nth-child(2){
					.w(145);
					white-space:nowrap;
					overflow:hidden;
					text-overflow:ellipsis;
				}
				li:nth-child(3){
					span{
						color:@font-color-zhe;
						font-size:@f-s-m;
						font-weight:700;
					}
				}
				li:nth-child(4){
					.w(138);
					overflow:hidden;
					white-space:nowrap;
				}
			}
		}
		
	}
</style>
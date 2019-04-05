<template>
	<div>
		<!--<Head></Head>-->

	<div class="wrapper">
		<div class="content">
			<ul>
			<li v-for="(item,index) in hotList"
				:key="index"
				class="list-hot"
				@click="goMovieDetail(item)"
				>
				<img :src="item.imgUrl" width="64" height="90"  alt="" />
				<div class="hotDetail">
					<ol >
						<li>
							<h3>{{item.nm}}</h3>
						    <p>
						    	<span>{{item.vers}}</span>
						    	       {{item.max}}
						    </p>
						</li>
						<li>观众评<span>{{item.sc}}</span></li>
						<li>主演：{{item.star}}</li>
						<li>{{item.showInfo}}</li>
						
					</ol>
				    <a href="javarscript:;">购票</a>
				</div>
				
				
			</li>   
		</ul>
		<ul>
			<li v-for="(item,index) in willList"
				:key="index"
				class="list-hot"
				@click="goMovieDetail(item)"
				>
				<img :src="item.imgUrl" width="64" height="90"  alt="" />
				<div class="hotDetail">
					<ol >
						<li style="width:300px">
							<h3>{{item.nm}}</h3>
						    <p>
						    	
						    </p>
						</li>
						<li><span>{{item.wish}}</span>人想看</li>
						<li>主演：{{item.star}}</li>
						<li>{{item.showInfo}}</li>
						
					</ol>
				    <a href="javarscript:;" style="background-color:#3c9fe6;position:absolute;right:0;">预售</a>
				</div>
				
				
			</li>   
		</ul>		
		
		</div>
		
	<router-view></router-view>	
   </div>
	</div>
   
</template>

<script>
	import Head from "common/head.vue"
	import BScroll from "better-scroll"
	import imgUrl from "common/extendUrl"
	export default{
		name:"Hot",
		components:{
			Head
		},
		data(){
			return{
				hotList:[],
				willList:[]
				
			}
		},
		methods:{
			goMovieDetail(item){
				console.log(item)
				this.$router.push({name:"movieDetail",params:item})
			}
		},
		created(){
			let url = "/my/ajax/movieOnInfoList?token="
			this.$axios.get(url)
			.then((data)=>{
				console.log(data.movieList)
			
				 this.hotList = data.movieList.slice(0,6)
			
				 this.willList = data.movieList.slice(7,12)
				 
                  console.log(this.hotList)
                  console.log(this.willList)
				imgUrl.extendUrl(this.hotList)
				imgUrl.extendUrl(this.willList)
			})
		},
		mounted(){
			const bscroll = new BScroll(".wrapper",{probeType:2,click:true})
		}
	}
</script>

<style lang="less" scoped>
	@import "~style/index.less";
	.wrapper{
		.w(375);
		position:fixed;
		.top(94);
		.bottom(44);
		overflow:hidden;
		/*z-index:-9;*/
	} 
	.list-hot{
		.w(375);
		.h(90);
		.padding(12,14,12,0);
	   img{
	   	float:left;
	   	margin-left:10px;
	   }
	   .hotDetail{  
	            	float:right;
	   	            .border-bottom(#e6e6e6);
	   	            color:@font-color-c;
					font-size:@f-s-xs;
					.margin(0,0,0,-100);
					.w(290);
					.h(90);
					display:flex;
					justify-content:space-between;
					align-items:center;
					ol{
						li{
							.padding(0,0,3,0);
						}
						li:nth-child(1){
							display:flex;
							.w(200);
							.h(18);
							.l_h(18);
							p{
								.w(40);
								.h(16);
								.l_h(16);
								margin-left:10px;
								font-size:8px;
								color:@font-color-b;
								display:flex;
							 span{
									padding-right:3px;
								}
								
							}
						}
					}
					a{
						color:white;
						display:block;
						background:@font-color-h;
						text-align:center;
						.w(48);
						.h(28);
						.l_h(28);
						float:right;
						margin-right:20px;
					}
					li:nth-child(1){
						 .w(200);
					    overflow:hidden;
					    white-space:nowrap;
					    text-overflow:ellipsis;
					}
					h3{
						font-size: @f-s-m;
					    color: #333;
					   
					  }
					li:nth-child(2){
						span{
							color:@font-color-zhe;
							font-size:@f-s-m;
							padding-left:3px;
						}
					}
					li:nth-child(3){
						.w(200);
						white-space:nowrap;
						overflow:hidden;
						text-overflow:ellipsis;
					}
	   }
		
	}
</style>
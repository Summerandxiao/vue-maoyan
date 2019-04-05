<template>
	<div class="wrapper">
		<div class="content">
			<div class="qidai">
				<h4>近期最受期待</h4>
				<div class="swiper-container">
                         <div class="swiper-wrapper">
						<div class="swiper-slide"
							v-for="(item,index) in mostExpect"
							:key="index"
							@click="goWillDetail(item)"
							>
						 <img :src="item.imgUrl" width="85" height="115" alt="" />
						 <span class="wish">{{item.wish}}想看</span>
						 <p class="filname">{{item.nm}}</p>
						 <p class="time">{{item.comingTitle}}</p>
						</div>
						
					</div>
					 
				</div>
			</div>
			<div class="filmList">
				<ul>
						<h5>3月14日    周四</h5>
						
					<li class="filmDetail"  v-for="(item,index) in coming"
						:key="index"
						@click="goWillDetail(item)"
						>
						<img :src="item.imgUrl" alt="" />
						<ol class="detail" >
							<li><h3>{{item.nm}}</h3></li>
							<li><span>{{item.wish}}</span>人想看</li>
							<li>主演：{{item.star}}</li>
							<li>{{item.rt}}上映</li>
						</ol>
						<a href="javarscript:;">预售</a>
					</li>
				</ul>
			</div>

		</div>
   <router-view></router-view>
	</div>
</template>

<script>
	import Swiper from "swiper"
	import BScroll from 'better-scroll'
	import imgUrl from "common/extendUrl"
	export default {
		data() {
			return {
				mostExpect: [],
				coming:[]
			}

		},
		methods: {
			goWillDetail(item){
				console.log(item)
				this.$router.push({name:"willDetail",params:item})
			},
			initBanner() {
				var swiper = new Swiper('.swiper-container', {
					slidesPerView: 4,
					spaceBetween: 30,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
				})
			}
		},
		created() {
			
		  //最受期待
		  
		 // http://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=10&token=
		  let url1 = "/my/ajax/mostExpected?ci=1&limit=10&offset=0&token="
			this.$axios.get(url1)
				.then((data) => {
                   this.mostExpect = data.coming
					//console.log(this.mostExpect)
					imgUrl.extendUrl(this.mostExpect)
					//console.log(this.coming)
					  this.$nextTick(()=>{
						      	this.initBanner()
						      })
				})
			//列表
			let url2="/my/ajax/comingList?ci=1&token=&limit=10"
		    this.$axios.get(url2)
		    .then((data)=>{
		    	console.log(data.coming)
		    	this.coming = data.coming
		    	imgUrl.extendUrl(this.coming)
		    })
	    
		},
		mounted() {
			const scroll = new BScroll('.wrapper',{probeType:2,click:true})
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../node_modules/swiper/dist/css/swiper.min.css");
	@import "~style/index.less";
	.wrapper{
		.w(375);
		position:fixed;
		.top(94);
		.bottom(44);
		overflow:hidden;
		
		.qidai{
			.h(215);
			border-bottom:7px solid #e6e6e6;
			h4{
				font-size:@f-s-m;
				.padding(5,0,10,20);
				font-weight:normal;
			}
			.swiper-wrapper{
				.padding(0,0,0,20)
			}
			.swiper-slide{
				
				.w(85);
				.h(180);
				.wish{
					color:@font-color-zhe;
					font-size:@f-s-xs;
					position:absolute;
					.top(100);
					.left(0);
				}
				.filname{
					font-size:@f-s-m;
					.margin(-3,0,3,0);
					.w(85);
					white-space:nowrap;
					overflow:hidden;
					text-overflow:ellipsis;
				}
				.time{
					.w(40);
					.h(14);
					overflow:hidden;
					font-size:@f-s-xs;
			        color:@font-color-f;	
				}
				
			}
		}
		.filmList{
			h5{
				   font-weight:normal;
				   
				    .padding(12,0,12,15);
				    margin: 0;
				    font-size: 14px;
				    color: #333;
                }
			}
			.filmDetail{
				display:flex;
				justify-content:space-around;
				.border-bottom(#e6e6e6);
				.h(114);
				align-items:center;
				img{
					.w(64);
					.h(90);
				}
				a{
					font-size:@f-s-xs;
					color:white;
					display:block;
					background:#3c9fe6;
					text-align:center;
					.w(48);
					.h(28);
					.l_h(28);
					
				}
				.detail{
					color:@font-color-c;
					font-size:@f-s-s;
					.margin(0,0,0,-20);
					.w(200);
					li{
						.padding(0,0,3,0);
					}
					h3{
						font-size: @f-s-m;
					    color: #333;
					  }
					li:nth-child(2){
						font-size:@f-s-xs;
						
						span{
							color:@font-color-zhe;
							font-size:@f-s-m;
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
		  
	}
	
</style>
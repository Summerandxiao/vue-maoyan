<template>
	
	<div class="wrapper" ref="abc">
		<div class="content">
                    <div class="headder">
					<span class="back" @click='back()'> < </span>
					<p class="cname">{{params.nm}}</p>

				</div>

				<div class="addr">
					<span class="name">{{params.nm}}</span>
					<p class="add">{{params.addr}}</p>
					<span class="ico"><img src="@/assets/potion.png" width="30"height="28"></span>

				</div>

				<div class="swiper-container">

					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="(item,index) in movies">
							<img @click="open" width="80" height="113" :src="item.imgUrl">
						</div>

					</div>
					<!-- Add Pagination -->
					<div class="swiper-pagination"></div>
				</div>
				<!--电影名称-->
				<div class="cinname">
					<div v-for="(item,index) in movies">
						<div class="cn">
							<span></span>
							<span></span>
						</div>
						<div class="desc">

						</div>
					</div>
				</div>
				<!--电影日期	-->

				<div class="cut"></div>
				<!--套餐-->
				<div class="title">影院超值套餐</div>
				<div class="f-content" v-for="(item,index) in list">

					<div class="f-img">
						<img :src="Img">
						<!--:src="item.imageUrl"-->
					</div>
					<ul class=f-title>
						<li class="icon"> {{item.title}}</li>
						<li><span class="sell">{{item.curNumberDesc}}</span></li>
						<li>
							<span class="price">￥{{item.price}}</span>
							<p>
								<el-button class="btn" type="text" @click="open">去购买</el-button>
							</p>
						</li>

					</ul>

				</div>
				<!--{{list}}-->
			</div>
		</div>
	</div>

	</div>
	
</template>

<script>
	import BScroll from "better-scroll"
	import imgUrl from "common/extendUrl"
	
	import Swiper from "swiper"
	export default {
		methods: {
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
			},
			back() {
				this.$router.back();
			},
			initBanner() {
				var mySwiper = new Swiper('.swiper-container', {
					effect: 'coverflow',
					slidesPerView: 5,
					spaceBetween: 30,
					centeredSlides: true,
					coverflowEffect: {
						rotate: 0,
						slideShadows: false,
					},
					pagination: {
						// el: '.swiper-pagination',
						clickable: true,

					}
				})
			}
		},

		data() {
			return {
				list: [],
				movies: [],

				Img: require('@/assets/9ff918f761ce4a866348e6cb7180718c1173731.png')
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
			console.log(this.$route)
			let url = `/my/ajax/cinemaDetail?cinemaId=${ this.$route.params.id}`;
			this.$axios.get(url)
				.then((res) => {

					console.log(res)
					this.list = res.dealList.dealList
					console.log(this.list);
					this.movies = res.showData.movies
					imgUrl.extendUrl(this.movies)

					this.$nextTick(() => {
						this.initBanner()
					})

				})

		},
		mounted() {

			const scroll = new BScroll(this.$refs.abc, {
				probeType: 2,
				click: true
			})

		}
	}
</script>

<style lang="less" scoped >
	@import '~style/index.less';
	@import url("../../../node_modules/swiper/dist/css/swiper.min.css");
	
		.wrapper {
			background: white;
			z-index: 20;
			.w(375);
			position: fixed;
			top:0;
			bottom: 0;
			overflow: hidden;
		.headder {
			background: #e54847;
			color: #fff;
			font-size: @f-s-m;
			.h(50);
			.l_h(50);
			.cname {
				.w(375);
				text-align: center;
			}
			.back {
				position: absolute;
				left: 35px;
			}
		}
		.addr {
			.padding(0,
			0,
			15,
			15);
			.w(375);
			position: relative;
			.name {
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				width: 260px;
				font-size: 17px;
				line-height: 24px;
				font-weight: 700;
				color: #333;
			}
			.add {
				width: 260px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				display: block;
				margin-top: 2px;
				font-size: @f-s-xs;
				line-height: 18.5px;
				color: #999;
			}
			.ico {
				float: right;
				position: absolute;
				right: 0;
				top: 30px;
				width: 70px;
				height: 31px;
				border-left: 1px solid #d8d8d8;
				text-align: center;
				transform: translateY(-50%);
			}
		}
		.swiper-container {
			height: 135px;
			background: rgba(64, 69, 77, .55);
			z-index: -1;
			.swiper-slide img {
				margin-top: 15px;
				transform: scale(1);
				z-index: 10;
			}
		}
		.cut {
			height: 10px;
			background: #f0f0f0;
		}
		.title {
			height: 45px;
			font-size: 15px;
			color: #666;
			line-height: 45px;
			border-bottom: 0.03px solid #ddd;
			margin-left: 12.5px;
			.padding(17,
			0,
			17,
			0);
		}
		.f-content {
			.padding(20,
			0,
			0,
			0);
			display: flex;
			justify-content: space-between;
			overflow: hidden;
			item-align: center;
			width: 350px;
			.h(115);
			position: relative;
			margin-left: 13px;
			.border-bottom(#e6e6e6);
			img {
				width: 92px;
				height: 92px;
			}
			.f-title {
				.w(250);
				.h(90);
				.icon {
					overflow: hidden;
					text-overflow: ellipsis;
					.w(240);
					font-size: @f-s-m;
					white-space: nowrap;
					padding-bottom: 25px;
				}
				li:nth-child(2) {
					.w(243);
					.h(20);
					.sell {
						font-size: @f-s-xs;
						color: @font-color-f;
						float: right;
					}
				}
				li:nth-child(3) {
					margin-top: 3px;
					.w(243);
					.h(30);
					.l_h(30);
					position: relative;
					display: flex;
					justify-content: space-between;
					.price {
						font-size: @f-s-m;
						color: @font-color-h;
					}
					.btn {
						color: white;
						background: @font-color-h;
						font-size: 13px;
						.w(50);
						.h(20);
						.l_h(3);
						position: absolute;
						.top(2);
						.right(0);
					}
				}
			}
		}
	}

</style>
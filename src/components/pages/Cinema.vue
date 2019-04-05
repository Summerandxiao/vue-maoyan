<template>
	<div>

		<Head></Head>
		<cinema-tab></cinema-tab>
		<div class="wrapper" ref='wrapper'>
			<ul class="adrList">
				<li :key='index' v-for="(item,index) in list" @click="goCinemaDetail(item)">

					<div class="one">
						<span class="name">{{item.nm}}</span>
						<p>
							<span class="price">{{item.sellPrice}}</span>
							<span class="prit">元起</span>
						</p>
					</div>
					<div class="two">
						<span class="beijing">{{item.addr}}</span>
						<span class="distance">{{item.distance}}</span>
					</div>
					<div class="three">
						<span class="snack">小吃</span>
						<span class="disp">{{item.tag.vipTag}}</span>
					</div>
					<div class="ka">
						<div class="ad">
							<!--<img src="../../../assets/card.png" width="11" height="11" >-->{{item.promotion.cardPromotionTag}}</div>
					</div>
				</li>
			</ul>

		</div>
		<router-view></router-view>

	</div>

</template>

<script>
	import Head from "common/head.vue"
	import BScroll from 'better-scroll'
	import CinemaTab from "pages/cinematab.vue"
	export default {
		name: "Cinema",
		components: {
			Head,
			CinemaTab
		},
		data() {
			return {
				list: [],
			}
		}

		,
		methods: {
			goCinemaDetail(item) {
				console.log(item)
				this.$router.push({name:'cinemadetail',params: item})
			}
		},
		created() {
			let url = '/my/ajax/cinemaList?day=2019-03-12&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1552390370058&cityId=1'
			this.$axios.get(url)
				.then((res) => {
					this.list = res.cinemas
					console.log(res)
					console.log(this.list)
				})
		}

		,
		mounted() {
			console.log(this.$refs.wrapper)
			let elobj = this.$refs.wrapper //new BScroll(elobj)
			const scroll = new BScroll(elobj, {
				probeType: 2,
				click: true
			})
		}
	}
</script>
<style lang="less" scoped>
	@import '~style/index.less';
	.wrapper {
		overflow: hidden;
		position: fixed;
		.top(120);
		.left(0);
		.bottom(0);
		.right(0);
	}
	
	.adrList {
		li {
			padding: 13px 15px 13px 20px;
			margin-left: 10px;
			margin-right: 10px;
			background: #fff;
			overflow: hidden;
			position: relative;
			background-size: 1px 1px;
			border-bottom: 0.02px solid #ddd;
			background: 0 bottom repeat-x;
			.one {
				height: 23px;
				line-height: 23px;
				.w(270);
				
				display:flex;
				justify-content:space-between;
				.p{
					.l_h(23);
					.h(23);
				}
				.name {
					font-size: @f-s-m;
					color: #000;
					.w(190);
					overflow:hidden;
					white-space:nowrap;
					text-overflow:ellipsis;
				
				}
				.price {
					font-size: @f-s-l;
					color:@font-color-h;
				}
				.prit {
					font-size: 11px;
					color: @font-color-h;
				}
			}
			.two {
				margin-top: 6px;
				font-size: @f-s-xs;
				color: #666;
				display: flex;
				.w(270);
				justify-content:space-between;
				.beijing {
					display:block;
					.w(180);
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
				.distance {
					margin-left: 5px;
				}
			}
			.three {
				height: 17px;
				line-height: 17px;
				
				margin-bottom: 4px;
				overflow: hidden;
				font-size: 0;
				position: relative;
				display: inline-block;
				padding: 0 3px;
				
				border-radius: 2px;
				font-size: 12px;
				color: #f90;
				border: 1px solid #f90;
				.disp {
					margin-left: 5px;
				}
			}
			.ka {
				margin-left: 0;
				font-size: 11px;
				color: #999;
			}
		}
	}
</style>
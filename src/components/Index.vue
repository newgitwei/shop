<template>
	<div class="index">
		<div class="header">	
			<div class="header-wrapper">
			  <div class="wrapper-left">
			  	<div class="logo-image">		
				  	<img class="auto-img" src="http://127.0.0.1:8082/images/products/mi_logo.png"/>
			  	</div>
			  </div>
			  <div class="wrapper-middle">
				<!-- 搜索 -->
				<van-search ref="search" class="search" placeholder="搜索商品名称" @click="goState({name: 'Search'})"/>
			  </div>
			  <div class="wrapper-right">
			  	<div class="app-item"> 		
				  	<van-icon name="contact" size="0.8333rem"/>
			  	</div>
			  </div>
			</div>
		</div>
			<!-- 商品类型标签 -->
		
		<van-tabs ref="vtabs" class="vtabs" v-model="active" title-active-color="#e4393c" color="#1989FA" :line-height="2" :swipeable="true" :animated="true" background="#f2f2f2">
			<van-tab title="家电">
			<!-- 轮播 -->
				<van-swipe :autoplay="2500">
					<van-swipe-item v-for="(item, index) in banners" :key="index">
						<img class="auto-img" :src="item.url" />
					</van-swipe-item>
				</van-swipe>
				<van-row>
				  	<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['jiadian']">
				  		<div><img class="auto-img" :src="item.images.small" /></div>
				  		<div class="product-info">
				  			<p class="title">{{item.name}}</p>
				  			<p class="price">{{item.price}}元</p>
				  		</div>
				  	</van-col>
				</van-row>
			</van-tab>
			<van-tab title="智能" v-for="(value, index) in types">
			  	<van-row>
			  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['zhineng']">
			  			<div><img class="auto-img" :src="item.images.small" /></div>
			  			<div class="product-info">
			  				<p class="title">{{item.name}}</p>
			  				<p class="price">{{item.price}}元</p>
			  			</div>
			  		</van-col>
				</van-row>
			</van-tab>
			<van-tab title="耳机" v-for="(value, index) in types">
			  	<van-row>
			  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['erji']">
			  			<div><img class="auto-img" :src="item.images.small" /></div>
			  			<div class="product-info">
			  				<p class="title">{{item.name}}</p>
			  				<p class="price">{{item.price}}元</p>
			  			</div>
			  		</van-col>
			  	</van-row>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>

	import { Search, Swipe, SwipeItem, Tab, Tabs, Card } from 'vant'
	import products from '../data/data.js'

	import types from '../data/types.js'

	export default {
		name: 'Index',

		data() {
			return {

				active: 0,

				//商品所有类型
				types: [],

				//所有类型商品 { 类型: [{当前类型商品1}, {当前类型商品2}])
				products: {
					
				},

				banners: [

					{url: 'http://127.0.0.1:8082/images/waterPurifier1.jpg'},
					{url: 'http://127.0.0.1:8082/images/airConditioning1.webp'},
					{url: 'http://127.0.0.1:8082/images/airConditioning2.webp'}

				]
			};
		},

		components: {
			[Search.name]: Search,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Card.name]: Card
		},

		//初始化数据
		created() {
			this.addProducts()
			this.addTypes()
			//获取本地存储商品类型
			this.types = JSON.parse(localStorage.getItem('types'));

			//获取本地存储商品信息
			var products = JSON.parse(localStorage.getItem('products'));

			//通过类型查找商品
			//遍历类型
			this.types.types.forEach(v1 => {

				this.products[v1.type] = [];

				//遍历商品
				products.products.forEach(v2 => {
					//如果类型一致, 则将该类型添加到当前类型数组中
					if (v1.type == v2.type) {
						this.products[v1.type].push(v2);
					}

				})

			})

		},

		//节点渲染完成后
		mounted() {

			var search = this.$refs.search;
			var searchHeight = getComputedStyle(search).height;

			this.offsetTop = parseFloat(searchHeight)
			
			var vtabs = this.$refs.vtabs.$el.firstChild;
			vtabs.style.position = 'sticky';
			vtabs.style.top = searchHeight;
		},


		methods: {

			goState(path) {
				console.log('aaa');
				this.$router.push(path);
			},
			
			addProducts() {
     
		      localStorage.setItem('products', JSON.stringify(products));
		
		    },
		
		    addTypes() {
		      localStorage.setItem('types', JSON.stringify(types));
		    }

		}

	}
</script>

<style lang="less" scoped>
	.van-search__content{
		background-color: #fff;
	}
	.header{
		position: sticky;
		top: 0;
		z-index: 99;
		box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
		background-color: #f2f2f2;
		.header-wrapper{
			position: sticky;
			top: 0;
			height: 1.1665rem;
			display: flex;
			justify-content: center;
			align-items: center;
			.wrapper-left{
				width: 1.3883rem;
				height: 0.4917rem;
				.logo-image{
					margin: 0 0.2777rem;
					width: 0.8333rem;
					height: 0.4917rem;
				}
			}
			.wrapper-middle{
				width: 7.2233rem;
				height: 0.8867rem;
				.van-search{
					padding: 0;
				}
				.search{
					position: sticky;
					top: 0;
					z-index: 100;
				}
			}
			.wrapper-right{
				width: 1.3883rem;
				height: 0.8333rem;
				.app-item{
					margin: 0 0.2778rem;
					width: 0.8333rem;
					height: 0.8333rem;
				}
			}
		}
	}

	.vtabs{
		padding-top: 0;
	}

	.col-box{
		padding: 0.04rem;

		.product-info{
			text-align: center;
			.title{
				color: #888;
				margin-top: 0.2666rem;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.price{
				color: #e4393c;
				margin-top: 0.2666rem;
			}
		}
	}
</style>
<template>
	<div class="search">
		<form>
			<div class="header">	
				<div class="header-wrapper">
				  <div class="wrapper-left" @click="back">
				  	<div class="logo-image">		
					  	<van-icon name="arrow-left
" size="0.8333rem"/>
				  	</div>
				  </div>
				  <div class="wrapper-middle">
					<!-- 搜索 -->
					<van-search ref="search" v-model="keyWord" placeholder="输入商品关键字" show-action background="#f2f2f2" @focus="focusFn">
						<div slot="action" @click="search">搜索</div>
					</van-search>
				  </div>
				  <div class="wrapper-right" @click="goState({name: 'My'})">
				  	<div class="app-item"> 		
					  	<van-icon name="contact" size="0.8333rem"/>
				  	</div>
				  </div>
				</div>
			</div>	
		</form>
		<div class="tags" v-show="isFocus">
			<p>最近搜索</p>
			<ul class="tag-row clearfix">
				<li class="tag-col fl" v-for="(item, index) in searchHistory[userId]" :key="index" @click="searchForTag(item)">{{item}}</li>
			</ul>
		</div>
		<div class="product-data">
			<van-row>
		  	<van-col :ref="'van' + index" @click.native="goState({name: 'Detail', params: {pid: item.id}, query: {active: 1}})" span="12" class="col-box" v-for="(item, index) in searchProducts" :key="index">
		  		<div><img class="auto-img" :src="item.images.small" /></div>
		  		<div class="product-info">
		  			<p class="title">{{item.name}}</p>
		  			<p class="price">{{item.price}}元</p>
		  		</div>
		  	</van-col>
		  </van-row>
		</div>
	</div>
</template>

<script>
	import { Search } from 'vant'
	export default {
		name: 'Search',

		data() {
			return {
				keyWord: '无人机',

				//搜索商品数据
				searchProducts: [],

				//当前用户的搜索历史记录
				searchHistory: {},

				userId: '',

				//获取焦点
				isFocus: true
			};
		},

		created() {

			//获取用户id
			this.userId = JSON.parse(localStorage.getItem('userLogin')).userId;

			//获取当前用户的本地存储搜索历史记录
			var searchHistoryData = localStorage.getItem('searchHistory');

			this.searchHistory = searchHistoryData == undefined ? {} : JSON.parse(searchHistoryData);

		},

		mounted() {
			var search = this.$refs.search.querySelector('input');

			search.focus();
		},

		components: {
			[Search.name]: Search
		},

		methods: {

			goState(path) {
				this.$router.push(path);
			},
			
			search() {
				this.isFocus = false;

				if (this.keyWord == '' || this.keyWord == undefined) {
					this.$toast('搜索关键不能为空');
					return;
				}

				this.searchProducts = [];

				var match = new RegExp('(' + this.keyWord + ')', 'img');
				// new RegExp('(水)?(井)?')   (水井) | ((水)?(井)?)

				var productDatas = JSON.parse(localStorage.getItem('products')).products;

				productDatas.forEach(v => {
					if (match.test(v.name)) {
						this.searchProducts.push(v);
					}
				})


				if (!this.searchHistory[this.userId]) {

					this.searchHistory[this.userId] = [];

				} else if (this.searchHistory[this.userId].length >= 10) {

					this.searchHistory[this.userId].shift();

				}

				if (this.searchHistory[this.userId].indexOf(this.keyWord) === -1) {
					this.searchHistory[this.userId].push(this.keyWord);
					localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
				}
				

				

			},

			focusFn() {
				this.isFocus = true;
			},

			searchForTag(keyWord) {
				this.keyWord = keyWord;
				this.search();
			},
			
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less" scoped>
	.van-search__content{
		background-color: #fff;
	}

	.van-search__action{
		color: #323232;
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
				height: 1rem;
				.logo-image{
					margin: 0 0.2777rem;
					width: 0.8333rem;
					height: 1rem;
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
	.tag-row{
		text-align: center;
	}

	.tags{
		/*margin-top: 0.8rem;*/
		padding: 0.4rem;
		p{
			font-size: 17PX;
		}

		.tag-col{
			margin-right: 0.4rem;
			background-color: #f2f2f2;
			min-width: 100px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin-top: 0.2rem;
			padding: 0.1rem;
			float: left;
			height: 1.0666rem;
			line-height: 1.0666rem;
			border-radius: 0.2rem;
		}
	}


	.col-box{
		padding: 0.2133rem;
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
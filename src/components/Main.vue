<template>
	<div class="main">
		
		<div>

			<!-- 二级路由 -->
			<router-view></router-view>
			
		</div>

		<!-- 标签导航 -->
		<van-tabbar v-model="active" active-color="#e4393c">
		  <van-tabbar-item :icon="item.icon" v-for="(item, index) in tabs" :key="index" @click="goState(item.path)">{{item.title}}</van-tabbar-item>
		</van-tabbar>

	</div>
</template>

<script>

	//导入组件
	import { Tabbar, TabbarItem } from 'vant'

	export default {
		name: 'Main',

		data() {
			return {
				active: 0,

				tabs: [
					{title: '首页', icon: 'home-o', path: {name: 'Index'}, flage: 'index'},
					{title: '分类', icon: 'description', path: {name: 'NewProducts'}, flage: 'classify'},
					{title: '购物车', icon: 'shopping-cart-o', path:{name: 'Shopcart'}, flage: 'shopcart'},
					{title: '我的', icon: 'manager-o', path: {name: 'My'}, flage: 'my'}
				]
			};
		},

		components: {

			[Tabbar.name]: Tabbar,

			[TabbarItem.name]: TabbarItem

		},

		methods: {
			goState(path) {
				this.$router.push(path);
			}
		},
		
		created() {
			var active = this.$route.query.active
			
			this.active = active == undefined ? 0 : Numer(active)
			var hash = location.hash
			for(var i = 0; i < this.tabs.length; i++){
				if(hash.indexOf(this.tabs[i].flage) > -1){
					this.active = i
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.main{
		padding-bottom: 1.33333rem;
		.van-tabbar{
			max-width: 640PX;
			margin: 0 auto;
			right: 0;
		}
	}
</style>
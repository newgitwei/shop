<template>
	<div class="classify">
		<top-nav :is-has-back="isHasBack" :title="title" :is-has-icon="isHasIcon"></top-nav>
		<div class="app-shell">		
			<div class="list-navbar">
				<ul>
					<li :class="{active: item.flage}" v-for="(item, index) in classNames" @click="changActive(item, index)" :key="index">{{item.name}}</li>
				</ul>
			</div>
			<div class="list-wrap">				
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import TopNav from '../components/TopNav'
	
	export default {
		name: 'Classify',
		
		data() {
			return {
				idx: 0,
				activeKey: 0,
				title: '分类',
				icon: 'search',
				isHasIcon: false,
				isHasBack: true,
				classNames: [
					{name: '新品', flage: true, path: {name: 'NewProducts'}},
					{name: '手机', flage: false, path: {name: 'Phone'}},
					{name: '家电', flage: false, path: {name: 'HomeAppliance'}}
				]
			};
		},
		
		components: {
			'top-nav': TopNav
		},
		
		methods: {	
			changActive(item, index){
				if(this.idx == index){
					return;
				}
				item.flage = true;
				this.classNames[this.idx].flage = false;
				this.idx = index;
				this.$router.push(item.path)	
			}
		}
	}
</script>

<style scoped lang="less">
	
	ul li{
		list-style: none;
	}
	.app-shell{
		background: #fff;
		color: #3c3c3c;
		position: relative;
		height: 14.6666rem;
		overflow-y: auto;
		.list-navbar{
			position: fixed;
			top: 1.3333rem;
			bottom: 1.3866rem;
			width: 2.0842rem;
			border-right: 1px solid #efefef;
			ul{
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: -0.3rem;
				padding: 0.2rem 0.3rem 0.2rem 0;
				background-color: #fefefe;
				overflow-y: auto;
			}
			li{
				font-size: 0.45rem;
				height: 1.25rem;
				line-height: 1.25rem;
				overflow: hidden;
				text-align: center;
				color: #666;
				transform: scale(0.75);
			}
			.active{
				color: #fb7d34;
				transform: scale(1);
			}
		}
		.list-wrap{
			float: right;
			margin-right: 0.6666rem;
		}
	}
</style>
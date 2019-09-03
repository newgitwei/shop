<template>
	<div class="home-appliance">
		<div class="list-item">
			<div class="component-list-main">
				<div class="cells_auto_fill">
					<img src="http://127.0.0.1:8082/images/cells3.jpg" class="auto-img"/>		
				</div>
				<div class="category_title">
					<span>家电</span>				
				</div>
				<div class="category_group">
					<div class="product"  v-for="(item, index) in appliance" :key="index">
						<a href="">	
							<div class="img">
								<img class="auto-img" :src="item.url"/>
							</div>
							<div class="name">
								{{item.name}}
							</div>
						</a>
					</div>	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'HomeAppliance',
		
		data() {
			return {
				appliance: [
						{name: 'Redmi波轮洗衣机', url: 'http://127.0.0.1:8082/images/appliance1.jpg'},
						{name: '米家洗烘一体机', url: 'http://127.0.0.1:8082/images/appliance2.jpg'},
						{name: '米家互联网空调', url: 'http://127.0.0.1:8082/images/appliance3.jpeg'},
						{name: '58英寸 电视4A', url: 'http://127.0.0.1:8082/images/appliance4.jpg'},
						{name: '40英寸电视4C', url: 'http://127.0.0.1:8082/images/appliance5.jpg'},
						{name: '43英寸电视4X', url: 'http://127.0.0.1:8082/images/appliance6.jpg'},
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	img,a{
		padding: 0;
		margin: 0;
		display: block;
	}	
	.list-item{
		width: 7rem;
		height: 25.6rem;
		.cells_auto_fill{
			width: 7rem;
			height: 2.7774rem;
		}
		.category_title{
			background: #fff;
			font-size: 0.40rem;
			text-align: center;
			font-weight: 400;
			margin-top: 0.2rem;
			height: 1.7775rem;
			line-height: 1.7775rem;
			overflow: hidden;
		}
		.category_group{
			background: #fff;
			margin: -0.16rem 0 0;
			overflow: hidden;
			.product{
				float: left;
				width: 33.33%;
				text-align: center;
				margin-top: 0.2rem;
				margin-bottom: 0.3rem;
				overflow: hidden;
				height: 2.1241rem;
				.img{
					padding: 0 0.4722rem;
					background: #fff;
					overflow: hidden;
					width: 1.3887rem;
					height: 1.3887rem;
				}
				.name{
					margin-top: 0.28rem;
					white-space: nowrap;
					font-size: 0.23rem;
					color: rgba(0, 0, 0, 0.54);
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}
	}
</style>
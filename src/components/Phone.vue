<template>
	<div class="phone">
		<div class="list-item">
			<div class="component-list-main">
				<div class="cells_auto_fill">
					<img src="http://127.0.0.1:8082/images/cells2.webp" class="auto-img"/>		
				</div>
				<div class="category_title">
					<span>手机</span>	
					
				</div>
				<div class="category_group">
					<div class="product"  v-for="(item, index) in phone" :key="index">
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
	export default {
		name: 'Phone',
		
		data() {
			return{
				
				phone: [
							{name: '小米9', url: 'http://127.0.0.1:8082/images/small-phone1.png'},
							{name: '小米9王源定制版', url: 'http://127.0.0.1:8082/images/small-phone2.png'},
							{name: '小米9SE', url: 'http://127.0.0.1:8082/images/small-phone3.png'},
							{name: '小米9 SE布朗熊定制版', url: 'http://127.0.0.1:8082/images/small-phone4.png'},
							{name: 'Redmi Note 7 定制版', url: 'http://127.0.0.1:8082/images/small-phone5.png'},
							{name: '小米MIX 3', url: 'http://127.0.0.1:8082/images/small-phone6.png'},
					]
			};
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
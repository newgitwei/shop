<template>
	
	<div class="nav">
		<div v-if="isHasBack" class="back-text text" @click="back">
			<van-icon name="arrow-left" />
		</div>
		<div class="p-detail">{{title}}</div>
		<div v-if="isHasIcon" class="edit text">
			<van-icon :name="icon" />
		</div>
	</div>

</template>

<script>
	export default {
		name: 'TopNav',
		props: {
			//导航标题
			title: {
				type: String
			},

			//导航右边的图标
			icon: {
				type: String,
				default: 'edit'
			},

			//是否含有右边图标
			isHasIcon: {
				type:Boolean,
				default: false
			},

			//是否含有返回按钮
			isHasBack: {
				type: Boolean,
				default: true
			}
		},

		methods: {
			back() {
				//返回上一级
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav{
		height: 1.3333rem;
		/*background-image: linear-gradient(to right, #f2f2f2 0%, #666 100%);*/
		background-color: #f2f2f2;
		position: relative;
		.text{
			font-size: 20PX;
			color: #666;
			margin-top: calc(1.3333rem / 2 - 9PX);
			position: relative;
			z-index: 2;
		}

		.back-text{
			float: left;
			margin-left: 0.5333rem;
		}

		.p-detail{
			color: #666;
			text-align: center;
			font-size: 16PX;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			z-index: 1;
			line-height: 1.3333rem;
		}

		.edit{
			float: right;
			margin-right: 0.5333rem;
		}
	}
</style>
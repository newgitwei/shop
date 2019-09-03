<template>
	<div class="my">
		<div class="hd">
			<div class="user">
				<div class="img">
					<img src="http://127.0.0.1:8082/images/user.png"/>
				</div>
				<div class="name" @click="goState({name: 'Login'})">
					{{showInform}}
				</div>
			</div>
		</div>
		<div class="bl" v-for="(item, index) in children" :key="index">
			<div class="cite">
				{{item.title}}
			</div>
			<div class="span">
				<a @click="goState(item.path)" >{{item.name}}</a>
				<van-icon name="arrow" size="24PX"/>
			</div>
		</div>
		
		
	</div>
</template>
<script>
	export default {
		name: 'My',
		
		data() {
			return {
				children: [
					{name: '全部订单',path: {name: 'Order'},title: '我的订单'},
					{name: '贪吃蛇',path: {name: 'Snake'},title: '我的游戏'},
					{name: '地址管理',path: {name: 'Address'},title: '我的地址'}
				],
				
				showInform: '登录/注册',
			};
		},
		
		created() {
			var userLogin = localStorage.getItem('userLogin')
			userLogin = userLogin == [] ? false : JSON.parse(userLogin)  
			if(userLogin){
				this.showInform = '欢迎你' + userLogin.userId;
			}
		},
		
		methods: {
			goState(path){	
				this.$router.push(path)
			}
		}
	}
</script>

<style lang="less" scoped>
	*{
		background-repeat: no-repeat;
		padding: 0;
		box-sizing: inherit;
	}
	.my{
		padding-bottom: 1.3866rem;
		.hd{			
			background: url('http://127.0.0.1:8082/images/header.png') center 0 #f37d0f;
			background-size: auto 100%;
			padding: 0.49rem 0;
			.user{
				align-items: center;
				display: flex;
				height: 1.3333rem;
				.img{
					width: 1.1733rem;
					height: 1.1733rem;
					margin: 0 0.16rem 0 0.32rem;
					overflow: hidden;
					box-sizing: border-box;
					border-radius: 100%;
					border: 3px solid hsla(0,0%,100%,.4);
					text-align: center;
					img{
						width: auto;
						height: 100%;
						margin: 0 auto;
						border-style: none;
					}
				}
				.name{
					color: #fff;
					font-size: 0.24rem;
					text-align: left;
				}
			}
		}
		.bl{
			height: 1.2rem;
			border-bottom: 1px solid rgba(0,0,0,.15);
			color: rgba(0,0,0,0.87);
			position: relative;
			padding-right: 0.56rem;
			line-height: 1.2rem;
			.cite{
				float: left;
				font-size: 0.4rem;
				padding-left: 0.49rem;
			}
			.span{
				float: right;
				font-size: 0.32rem;
				.van-icon::before{
					position: relative;
					left: 0.2rem;
					top: 0.2rem;
				}
			}
		}
	}
</style>
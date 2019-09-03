<template>
	<div class="snake">
		<div class="box">
			<canvas ref="cvs"></canvas>
			<span id="span">0分</span>
			<div @click="startGame" id="startGame">{{innerHtml}}</div>
		</div>
		<div class="">
			
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name: 'Snake',
		
		data() {
			return {
				x: 30,
				y: 10,//初始移动位置
				f: {}, //食物
				speed: 500, //定时器速度  移动速度
				a: 10, //每次移动的距离
				//		蛇身
				arr: [
					{
						x: 10,
						y: 10
					},
					{
						x: 20,
						y: 10
					},
					{
						x: 30,
						y: 10
					}
				],
				
				innerHtml: '开始游戏',
				cvs: null,
				ctx: null
			};
		},
		
		mounted() {
			this.cvs = this.$refs.cvs;
			this.ctx = this.cvs.getContext('2d');	
			this.maps();
			this.food();
			this.initial();
			this.timeX = 0
			console.log('BScroll',BScroll)
		},
		
		methods: {
			timeX() {
				setInterval(this.moveX, this.speed)
			},
			timeY() {
				setInterval(this.moveY, this.speed)
			},
			
			//网格
			maps() {
				for(var i = 10; i <= this.cvs.width; i += 10) {
					this.ctx.beginPath()
					this.ctx.lineWidth = 0.2
					this.ctx.strokeStyle = '#800080'
					this.ctx.moveTo(i, 0)
					this.ctx.lineTo(i, this.cvs.height)
					this.ctx.closePath()
					this.ctx.stroke()
				}
				for(var i = 10; i <= this.cvs.height; i += 10) {
					this.ctx.beginPath()
					this.ctx.lineWidth = 0.2
					this.ctx.strokeStyle = '#800080'
					this.ctx.moveTo(0, i)
					this.ctx.lineTo(this.cvs.width, i)
					this.ctx.closePath()
					this.ctx.stroke()
				}
				
			},
			fillRects(x, y){
				this.ctx.fillStyle = '#e4393c'
				this.ctx.fillRect(x, y, 10, 10)
				this.ctx.stroke()
			},
			//	食物
			food() {
				var a = (Math.floor(Math.random() * 24 + 1)) * 10;
				var b = (Math.floor(Math.random() * 11 + 1)) * 10;
				this.f = {
					x: a,
					y: b
				}
				
				this.fillRects(this.f.x, this.f.y)

			},

			//绘制蛇身位置
			initial() {
				for(var i = 0; i < this.arr.length; i++) {
					
					this.fillRects(this.arr[i].x, this.arr[i].y)
				}
			},
			cler() {
				this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
			},
			//移动
			moveX() {
				this.x += this.a;
				
				this.fillRects(this.x, this.y)
				this.cler();
				this.maps();
				
				this.fillRects(this.f.x, this.f.y)
				this.arr.push({
					x: this.x,
					y: this.y
				})
				this.arr = this.arr.slice(1);
				
				this.initial();
		
				//游戏规则
				this.gameOver();
				this.Decide();
		
				if(this.x == this.f.x && this.y == this.f.y) {
					this.arr.push({
						x: this.f.x,
						y: this.f.y
					})
					this.food();

				}
				span.innerHTML = this.arr.length - 3 + '分';
			},
			moveY() {
				this.y += this.a;
				
				this.fillRects(this.x, this.y)
				this.cler()
				this.maps();
			
				this.fillRects(this.f.x, this.f.y)
				this.arr.push({
					x: this.x,
					y: this.y
				})
				this.arr = this.arr.slice(1);
				this.initial();
				this.gameOver();
				this.Decide();
	
				if(this.x == this.f.x && this.y == this.f.y) {
					this.arr.push({
						x: this.f.x,
						y: this.f.y
					})
					this.food();

	
				}
			},
			//游戏结束规则
			gameOver() {
				if(this.x > this.cvs.width - 10) {
					this.jiesu();
				}
				if(this.x < 0) {
					this.jiesu();
				}
				if(this.y > this.cvs.height - 10) {
					this.jiesu();
				}
				if(this.y < 0) {
					this.jiesu();
				}
			},
			//判断是否撞到自己了		
			Decide() {
				for(var i = 0; i < this.arr.length - 1; i++) {
					if(this.arr[i].x == this.arr[this.arr.length - 1].x && this.arr[i].y == this.arr[this.arr.length - 1].y) {
						this.jiesu();
					}
				}
	
			},
		
			//	结束规则
			jiesu() {
				clearInterval(this.timeX);
				clearInterval(this.timeY);
				this.timeY = 0;
				this.timeX = 0;
				alert('撞墙了');
				this.cler();
				this.maps();
				this.arr = [{
						x: 10,
						y: 10
					},
					{
						x: 20,
						y: 10
					},
					{
						x: 30,
						y: 10
					}
				]
				this.x = 30;
				this.y = 10;
				this.initial();
				this.innerHTML = '开始游戏';
			},
			changeDirection(event){
				
				if(this.timeX == false) {
						if(event.clientX > this.arr[this.arr.length - 1].x) {
							clearInterval(this.timeY)
							this.timeY = 0
							clearInterval(this.timeX)
							this.timeX = 0
							this.a = 10
							this.timeX = setInterval(this.moveX, this.speed)
						}
						//			左
						else if(event.clientX < this.arr[this.arr.length - 1].x) {
							clearInterval(this.timeY)
							this.timeY = 0
							clearInterval(this.timeX)
							this.timeX = 0
							this.a = -10
							this.timeX = setInterval(this.moveX, this.speed)
						}
					} else if(this.timeY == false) {

						//			上
						if(event.clientY < this.arr[this.arr.length - 1].y) {
							clearInterval(this.timeX)
							this.timeX = 0
							this.a = -10
							this.timeY = setInterval(this.moveY, this.speed)
						}
						//			下
						else if(event.clientY > this.arr[this.arr.length - 1].y) {
							clearInterval(this.timeY)
							this.timeY = 0
							clearInterval(this.timeX)
							this.timeX = 0
							this.a = 10
							this.timeY = setInterval(this.moveY, this.speed)

						}
					}
			},
			//	开始游戏
			startGame() {

				if(this.innerHtml == '开始游戏'){
					this.innerHtml = '游戏暂停'
					this.timeX = setInterval(this.moveX, this.speed)
					this.timeY = 0
					var fn = this.changeDirection
					this.cvs.addEventListener('click',function(event){
						fn(event)
					})
				}else{
					this.innerHtml = '开始游戏'
					clearInterval(this.timeX)
					clearInterval(this.timeY)
					this.timeX = 0
					this.timeY = 0
				
				}
			}
			
			
			
		}
	}
</script>

<style lang="less" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.snake{
		.box{		
			width: calc(100% - 1.0666rem);
			margin: 0.5333rem auto;
			canvas {
				width: 250PX;
				border: 1px solid #000;
				height: 120PX;
			}
			#startGame {
				width: 3.2rem;
				height: 2.1333rem;
				text-align: center;
				line-height: 2.1333rem;
				font-size: 0.64rem;
				color: #0000FF;
				background-color: #FFC0CB;
				margin: 2.1333rem 40%;
			}		
			span {
				display: inline-block;
				color: red;
			}
		}
	}
</style>
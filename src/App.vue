<template>
  <div id="app" class="app">
    
    <!-- 一级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
.app{
	max-width: 640PX;
	margin: 0 auto;
}	

.auto-img{
	width: 100%;
	display: block;
}

p{
	margin: 0;
}
.clearfix{
		overflow: hidden;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
</style>

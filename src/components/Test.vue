 <template>
  <div class="test">
    <van-row class="tabs" type="flex" justify="center" align="center">
      <van-col span="8">
      	<van-icon name="arrow-left" />上一首
      </van-col>
      <van-col span="8">
      	<van-icon name="play-circle-o" />
      </van-col>
      <van-col span="8">
      	下一首<van-icon name="arrow" />
      </van-col>
    </van-row>
	<button @click="getMusic">获取音乐</button>
  </div>
</template>

<script>

// import { Field } from 'vant';

import qs from 'qs'

import products from '../data/data.js'

import types from '../data/types.js'

export default {
  name: 'Test',
  data() {
  	return {
  		checked: true,
  		value: 1
  	}
  },

  components: {
  	//局部组件使用vant组件
  	// [Field.name]: Field
  },

  methods: {

    getMusic() {

      var params =  {
        "TransCode": "020112",
        "OpenId": "123456789",
        "Body": {
            "SongListId": "141998290"
        }
      };

      var paramsStr = qs.stringify(params);
      console.log('paramsStr ==> ', paramsStr);

      //请求音乐数据
      this.axios({
        method: 'POST',
        url: 'https://api.hibai.cn/api/index/index',
        data: paramsStr
      }).then(result => {
        console.log('result ==> ', result);
      })

    },

    addProducts() {
     
      localStorage.setItem('products', JSON.stringify(products));

    },

    addTypes() {
      localStorage.setItem('types', JSON.stringify(types));
    }

  },
  
  created() {
  	
  }
}
</script>

<style lang="less" scoped>

	@c: #e4393c;

	.test{

		.title{
			color: @c;
		}
	}

	.box{
		width: 5.333rem;
		height: 5.333rem;
		border: 1PX solid @c;
		letter-spacing: 10px;
		margin: 90px;
		margin-left: 20px;
	}

  .tabs{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.3866rem;
    background-color: #fafafa;
    text-align: center;
  }
  
  
  .van-icon{
  	font-size: 20PX;
  }

</style>

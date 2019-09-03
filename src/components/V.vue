<template>
  <div>
    <!-- 基础用法 -->
      <div class="sku-container">
        <van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :hide-stock="skuData.sku.hide_stock"
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :show-add-cart-btn="false"
          :close-on-click-overlay="closeOnClickOverlay"
          @buy-clicked="onBuyClicked"
        >
        <!-- 自定义 sku actions -->
        <template slot="sku-actions" slot-scope="props">
          <div class="van-sku-actions">
            <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
            <van-button type="primary" bottom-action @click="props.skuEventBus.$emit('sku:buy')">{{text == 0 ? '加入购物车' : '立即购买'}}</van-button>
          </div>
        </template>
      </van-sku>
        <van-button
          block
          type="primary"
          @click="showBase=true"
        >
          显示sku面板
        </van-button>
      </div>
  </div>
</template>

<script>
  import {Button, Sku} from 'vant'
import skuData from '../data/vdata.js'
export default {
  data() {
    this.skuData = skuData;
    return {
      //0: 加入购物车, 1: 购买
      text: 1,
      showBase: false,
      closeOnClickOverlay: true,
    };
  },
  methods: {
    onBuyClicked(data) {
      console.log('data ==> ', data);
      //逻辑...

      this.showBase = false;
    }
  },

  components: {
    [Button.name]: Button,
    [Sku.name]: Sku
  }
};
</script>

<style lang="less">
.demo-sku {
  .sku-container {
    padding: 0 15px;
  }
}
</style>
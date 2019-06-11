<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-show="isShow">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props:{
      swiperList: Array,
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay: true,
        }
      }
    },
    computed: {
      isShow() {
        return this.swiperList.length > 0;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  // >>> 穿透 在当前组件文件中控制插件里面的样式
  // 前面的选择器与后面的选择器为后代关系，一个为当前组件的选择器 一个为插件里面的选择器
  .swiper >>> .swiper-pagination-bullet-active
    background-color #ddd
  .swiper
    height 0
    padding-bottom 2.19rem
    img
      width 100%
</style>

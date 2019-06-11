<template>
  <div class="gallery" @click="handleGallery">
    <div class="gal">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for='(item,index) in galleryImgs' :key='index'>
          <img class='swiper-img' :src="item" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Gallery",
    props: {
      galleryImgs: Array,
    },
    data(){
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type:'fraction'
          },
          // 轮播元素及其父元素变化时初始化轮播
          observeParents:true,
          observer:true
        },
      }
    },
    methods: {
      handleGallery() {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .gallery >>> .swiper-container
    overflow:visible
  .gallery
    position: fixed
    top: 0
    bottom: 0
    right: 0
    left: 0
    z-index: 10
    background-color: #000
    .swiper-pagination
      bottom -1rem
      color #fff
    .gal
      position absolute
      top 0
      bottom 0
      height 0
      margin auto
      padding-bottom 66.5%
      width 100%
      background-color #fff
    .swiper-img
      width: 100%
</style>

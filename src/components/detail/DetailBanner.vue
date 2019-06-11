<template>
  <div>
    <div class='banner' @click="openGallery">
      <img class='banner-img' :src="bannerImg">
      <div class="banner-info">
        <span class='banner-title'>{{ sightName }}</span>
        <p class='banner-number'>
          <i class="iconfont icon-tupian"></i>
          <span>{{ galleryImgs.length }}</span>
        </p>
      </div>
    </div>
    <transition name="cxy">
      <common-gallery
        :galleryImgs="galleryImgs"
        v-if="isShow"
        @close="closeGallery"
      ></common-gallery>
    </transition>

  </div>


</template>

<script>
  import CommonGallery from '@/common/Gallery'
  export default {
    name: "DetailBanner",
    props: {
      bannerImg: String,
      sightName: String,
      galleryImgs: Array,
    },
    data(){
      return {
        isShow: false,
      }
    },
    methods: {
      openGallery() {
        this.isShow = true
      },
      closeGallery() {
        this.isShow = false
      },
    },
    components: {
      CommonGallery,
    }
  }
</script>

<style lang="stylus" scoped>
  .cxy-enter,.cxy-leave-to
    opacity 0
  .cxy-enter-active,.cxy-leave-active
    transition opacity .5s
  .banner
    position:relative
    height:0
    padding-bottom:55%
    .banner-img
      width:100%
    .banner-info
      position:absolute
      left:0
      right:0
      bottom:0
      color:#fff
      background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))
      line-height:.6rem
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        position:absolute
        right:0
        top:0
        line-height: .36rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
</style>

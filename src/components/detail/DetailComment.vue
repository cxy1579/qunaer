<template>
  <div class="comment" id="com">
    <h3 class="com-title">用户评论</h3>
    <div
      class="loop-div"
      v-for="(comment,index) in commentInfo"
      :key="index"
    >
      <p class="com-content">{{ comment.desc }}</p>
      <div class="com-img" @click="handleClick(comment)">
        <div v-for="(img,index) in comment.imgs" v-if="index<6">
          <img :src="img" :key="index">
        </div>
      </div>
      <span class="all" v-if="comment.imgs.length>=6">
        共{{ comment.imgs.length }}张
      </span>
      <fade-animation>
        <template v-slot:fade>
          <common-gallery
            v-show="comment.isShow"
            :galleryImgs="comment.imgs"
            @close="closeGallery(comment)"
          ></common-gallery>
        </template>
      </fade-animation>

    </div>
  </div>
</template>

<script>
  import FadeAnimation from '@/common/FadeAnimation'
  import CommonGallery from '@/common/Gallery'
  export default {
    name: "DetailComment",
    props: {
      commentInfo:Array,
    },
    components: {
      CommonGallery,
      FadeAnimation,
    },
    methods: {
      handleClick(comment) {
        comment.isShow = true
      },
      closeGallery(comment) {
        comment.isShow = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
#com >>> .gal
  padding-bottom 73%
.comment
  .loop-div
    position relative
    padding 0 .2rem .3rem
    .all
      position absolute
      bottom .6rem
      right .5rem
      width 1rem
      line-height .5rem
      text-align center
      background-color rgba(0, 0, 0, .6)
      color #fff
      border-radius .1rem
  .com-title
    font-size .3rem
    line-height .8rem
    text-indent .3rem
  .com-content
    line-height .4rem
    padding:.2rem 0
    color: #616161
  .com-img
    display flex
    flex-wrap wrap
    div
      width 32%
      margin-bottom .1rem
      margin-right .1rem
      img
        width 100%
</style>

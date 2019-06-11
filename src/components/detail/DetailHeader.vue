<template>
  <div class="header">
    <div class="yuan" v-show="isShow">
      <router-link
        class="header-goback iconfont icon-fanhui"
        tag="i"
        to="/"
      ></router-link>
    </div>
    <div class="fang" v-show="!isShow" :style="objStyle">
      <h2 class="title">景点详情</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data() {
      return {
        isShow: true,
        objStyle: {},
      }
    },
    methods: {
      scrollHidden() {
        let scrollHeight = document.documentElement.scrollTop
        if (scrollHeight > 40) {
          this.isShow = false
          this.objStyle = {
            opacity: (scrollHeight - 40) / 100
          }
        } else {
          this.isShow = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.scrollHidden)
    },
    deactivated() {
      window.removeEventListener('scroll', this.scrollHidden)
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    position fixed
    top 0
    right 0
    left 0
    height .8rem
    z-index 5
    .yuan
      position absolute
      left 0
      top 0
      width .8rem
      line-height .8rem
      border-radius 50%
      background-color rgba(0, 0, 0, .6)
      color #fff
      text-indent .22rem
    .fang
      position absolute
      top 0
      left 0
      width 100%
      line-height .8rem
      background-color #00bcd4
      .title
        width 50%
        text-align center
        margin auto
        font-size .32rem
</style>

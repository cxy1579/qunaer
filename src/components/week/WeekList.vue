<template>
  <div class="weeklist" ref="wrap">
    <ul>
      <li
        v-for="(item,index) in weekInfo"
        :key="index"
        class="week-li"
      >
        <img :src="item.imgUrl" class="week-img">
        <div class="week-con">
          <h3 class="week-title">{{ item.title }}</h3>
          <p class="week-content">{{ item.desc}}</p>
          <span class="week-price">￥{{ item.price }}起</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "WeekList",
    props: {
      weekInfo: Array,
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrap)
    }
  }
</script>

<style lang="stylus" scoped>
  .weeklist
    position fixed
    top .8rem
    left 0
    bottom 0
    right 0
    overflow hidden
    .week-li
      margin-bottom .2rem
      .week-img
        width 100%
      .week-title
        font-size .3rem
        line-height .8rem
      .week-content
        font-size
      .week-price
        position absolute
        top 0
        bottom 0
        right .3rem
        margin auto
        line-height 1.3rem
        font-size:.4rem
        color:#ff8300
      .week-con
        position relative
        padding 0 .2rem
</style>

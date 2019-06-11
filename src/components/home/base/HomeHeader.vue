<template>
  <div class="header">
    <i class="iconfont icon-fanhui back"></i>
    <div class="h-input">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city" tag='div' class="right">
      <span>{{ $store.state.currentCity }}</span>
      <i class="iconfont icon-jiantou"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style lang="stylus" scoped>
  .header
    display flex
    line-height .88rem
    background-color #00BCD4
    color #fff
    .h-input
      flex 1
      width 5.5rem
      height .6rem
      margin-top .15rem
      margin-right .2rem
      background-color #fff
      border-radius .1rem
      line-height .6rem
      input
        vertical-align baseline
      input::-webkit-input-placeholder
        color #ccc
      .icon-sousuo
        margin-left .2rem
        color #ccc
    .back
      width .88rem
      text-align center
    .right
      padding 0 .15rem
</style>

<template>
    <div class="city-header">
      <router-link tag="i" to="/" class="iconfont icon-fanhui city-back"></router-link>
      <h2>城市选择</h2>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
  .city-header
    position relative
    line-height .86rem
    background-color #00bcd4
    color #fff
    text-align center
    font-size .35rem
    .city-back
      position absolute
      top 0
      bottom 0
      left 0
      text-indent .2rem
</style>

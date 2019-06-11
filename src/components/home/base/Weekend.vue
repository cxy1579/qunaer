<template>
  <div class="weekend">
    <h3 class="h-title">周末去哪儿</h3>
    <ul>
      <router-link
        tag="li"
        :to="{name:'WeekLink',params:{id:item.id}}"
        class="con-list"
        v-for="item in weekendList"
        :key="item.id"
      >
        <img :src="item.imgUrl" class='con-img' alt="">
        <h4 class="con-title">{{ item.title }}</h4>
        <p class="con-desc">{{ item.desc }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend",
    props: {
      weekendList: Array,
    }
  }
</script>

<style lang="stylus" scoped>
  .h-title
    margin-top: .2rem
    line-height: .8rem
    background: #ddd
    text-indent: .2rem
    font-size: .32rem
  .con-img
    width: 100%
  .con-title
    line-height: .5rem
    font-size: .3rem
    text-indent: .2rem
  .con-desc
    line-height: .4rem
    font-size: .25rem
    padding 0 .2rem
  .con-list
    padding-bottom: .3rem
</style>

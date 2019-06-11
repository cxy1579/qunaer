<template>
    <div class="nav">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(items, index) in filterList" :key="index">
          <ul class="page1">
            <li class="item" v-for="item in items" :key="item.id">
              <img :src="item.imgUrl" alt="">
              <p>{{ item.desc }}</p>
            </li>
          </ul>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeNav",
        props: {
          iconList: Array,
        },
        data() {
          return {
            swiperOption: {
              pagination: {
                el: '.swiper-pagination'
              }
            },
          }
        },
        computed: {
          filterList() {
            let arr = []
            this.iconList.filter((value, index) => {
              let page = ~~(index / 8)
              if (!arr[page]) {
                arr[page] = []
              }
              arr[page].push(value)
            })
            return arr
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .nav
    height 3.7rem
    margin-top .2rem
    text-align center
    img
      width 1.1rem
    .page1
      display flex
      flex-wrap wrap
      align-content flex-start
      height 3.7rem
      .item
        width 2.05rem
        margin-bottom .2rem
</style>

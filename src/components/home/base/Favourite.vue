<template>
  <div class="fav">
    <h3 class="like">
      <img
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        class='icon-xin'>
      <span>猜你喜欢</span>
    </h3>
    <ul>
      <router-link
        :to="{name:'DetailLink',params:{id:item.id}}"
        tag="li"
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img
          class='item-img'
          :src='item.imgUrl'
        >
        <div class="item-info">
          <h4>{{ item.title}}</h4>
          <div class='item-fav-info clearfix'>
            <p class='item-fav-text'>
              <i
                v-for='i in 5'
                class='iconfont icon-star'
              ></i>
              <span
                class='item-fav-star'
                :style='item.score|scoreFilter'>
                <i
                  v-for='i in 5'
                  class='iconfont icon-star'
                ></i>
              </span>
            </p>
            <p class='item-text-right'>
              <span>{{ item.comment }}条评论</span>
            </p>
          </div>
          <p class='item-price'>{{ item.price | priceFilter}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Favourite",
    props: {
      recommendList: Array,
    },
    data() {
      return {

      }
    },
    filters: {
      priceFilter(price) {
        return '￥' + price + '起'
      },
      scoreFilter(score) {
        return {
          width: score / 5 * 100 + '%'
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .like
    padding .2rem .3rem
    font-size .32rem
    .icon-xin
      width .3rem

  .border-bottom::before
    border-color: #777

  .item
    display: flex
    height: 2.2rem
    padding: .2rem
    .item-img
      width: 2rem
      height: 2rem
    .item-info
      flex: 1
      padding: .1rem
      margin-left: .1rem
      min-width: 0rem;
      h4
        line-height: .6rem
        font-size: .3rem
      .item-price
        color: #ff8300
        font-size: .3rem
        line-height: .4rem
      .item-fav-info
        line-height: .6rem
        .item-fav-text
          position: relative
          display: inline-block
          float: left
          color: #ccc
          margin-right: .5rem
          .item-fav-star
            overflow: hidden
            position: absolute
            left: 0
            top: 0
            color: #ffb436
        .item-text-right
          float: left
</style>

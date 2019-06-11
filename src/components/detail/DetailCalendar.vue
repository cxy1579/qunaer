<template>
  <div class="calendar">
    <div class="title">
      <h4 class="border-bottom" @click="handleTicket">门票</h4>
      <h4 class="border-bottom" @click="handleTourist">一日游</h4>
    </div>
    <ul>
      <li v-for="(item,index) in calendarInfo" :key="index" class="item-li">
        <h3 class="border-bottom" ref="ticket">{{ item.calendarInfo.title}}</h3>
        <div
          v-for="(result,index) in item.calendarInfo.result"
          :key="index"
          class="result-box border-bottom clearfix"
          @click="handleClick(result)"
        >
          <div class="result-left border-bottom">{{ result.subtitle }}</div>
          <div class="result-right border-bottom">
            <span class="span">￥{{ result.price }}</span>
            <i class='iconfont icon-jiantouxiangxia' :style="result.styleObj"></i>
          </div>

          <detail-recommend
            v-show="result.isShow"
            :recommendInfo="result.recommendInfo"
          ></detail-recommend>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import DetailRecommend from './DetailRecommend'
  export default {
    name: "DetailCalendar",
    props: {
      calendarInfo: Array,
    },
    components: {
      DetailRecommend,
    },
    methods: {
      handleClick(result) {
        result.isShow = !result.isShow
        result.styleObj.transform = 'rotate('+result.isShow*180+'deg)'
      },
      handleTicket() {
        let top = this.$refs.ticket[0].offsetTop
        document.documentElement.scrollTop = top - 85
      },
      handleTourist() {
        let top = this.$refs.ticket[2].offsetTop
        document.documentElement.scrollTop = top - 43
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .calendar >>> .recommend
    float left
  .title
    display flex
    font-size .3rem
    h4
      width 50%
      line-height 1rem
      text-align center
    h4::before
      background-color #000
  .item-li
    padding .1rem .2rem
    border-bottom .3rem solid #eee
    .result-box
      width 100%
      line-height .6rem
      .result-left
        float left
        width 75%
      .result-right
        float right
        width 25%
        line-height 1.2rem
        text-align center
        .span
          color #ff9852
          font-size .35rem
          font-weight 400
        i
          position absolute
          font-size:.25rem
          color:#bbb
    h3
      line-height .8rem
      font-size .35rem
  .border-bottom::before
    background-color #eee
</style>

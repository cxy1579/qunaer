<template>
  <div class="detail">
    <detail-banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      :galleryImgs="galleryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-cards :cardInfo="cardInfo"></detail-cards>
    <detail-recommend :recommendInfo="recommendInfo">
      <h3 class="border-bottom">去哪儿推荐</h3>
    </detail-recommend>
    <detail-calendar :calendarInfo="calendarInfo"></detail-calendar>
    <detail-comment :commentInfo="commentInfo"></detail-comment>
  </div>
</template>

<script>
  import { getDetail } from '@/api'
  import DetailBanner from './DetailBanner'
  import DetailHeader from './DetailHeader'
  import DetailCards from './DetailCards'
  import DetailRecommend from './DetailRecommend'
  import DetailCalendar from './DetailCalendar'
  import DetailComment from './DetailComment'

  export default {
    name: "Detail",
    data() {
      return {
        bannerImg: '',
        sightName: '',
        galleryImgs: [],
        cardInfo: {},
        calendarInfo: [],
        recommendInfo: [],
        commentInfo: [],
      }
    },
    components: {
      DetailBanner,
      DetailHeader,
      DetailCards,
      DetailCalendar,
      DetailRecommend,
      DetailComment,
    },
    async activated() {
      let {bannerImg, sightName, gallaryImgs, cardInfo, calendarInfo, recommendInfo, commentInfo} = await getDetail(this.$route.params.id)
      this.bannerImg = bannerImg
      this.sightName = sightName
      this.galleryImgs = gallaryImgs
      this.cardInfo = cardInfo
      this.calendarInfo = calendarInfo
      this.recommendInfo = recommendInfo
      this.commentInfo = commentInfo
    }
  }
</script>

<style lang="stylus" scoped>

</style>

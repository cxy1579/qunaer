<template>
  <div class="week">
    <week-header></week-header>
    <week-list :weekInfo="weekInfo"></week-list>
  </div>
</template>

<script>
  import { getWeek } from '@/api'
  import WeekHeader from './WeekHeader'
  import WeekList from './WeekList'

  export default {
    name: "Week",
    data() {
      return {
        weekInfo: [],
      }
    },
    components: {
      WeekHeader,
      WeekList,
    },
    activated() {
      this.getData()
    },
    methods: {
      async getData() {
        let { weekInfo } = await getWeek(this.$route.params.id)
        this.weekInfo = weekInfo
      }
    }
  }
</script>

<style scoped>

</style>

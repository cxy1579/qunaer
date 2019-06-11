<template>
  <div class="city-search">
    <input type="text" class="search-input" v-model="cityName" placeholder="请输入城市名或拼音">
    <div class="search-content" v-show="isShow" ref="father">
      <ul>
        <li
          v-for="city in searchCities"
          class="search-item"
          :key="city.id"
          @click="backHome(city.name)"
        >
          {{ city.name }}
        </li>
        <li v-show="noFind" class="search-item">未匹配到城市名</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "CitySearch",
    props: {
      cities: Object,
    },
    data() {
      return {
        cityName: '',
      }
    },
    computed: {
      isShow() {
        return this.cityName.trim()
      },
      searchCities() {
        let arr = []
        for (let key in this.cities) {
          this.cities[key].forEach(value => {
            // console.log(value)
            if (value.name.includes(this.cityName) || value.spell.includes(this.cityName)) {
              arr.push(value)
            }
          })
        }
        return arr
      },
      noFind() {
        return !this.searchCities.length
      }
    },
    methods: {
      backHome(city) {
        this.$router.push('/')
        this.$store.commit('changeCity', city)
        localStorage.setItem('city',city)
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.father,{
        click: true
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .city-search
    position relative
    height .5rem
    padding .1rem
    background-color #00bcd4
    .search-input
      width: 100%
      height: 100%
      border-radius .1rem
      text-align: center
    .search-input::-webkit-input-placeholder
      color #ccc
    .search-content
      position fixed
      z-index 20
      overflow hidden
      top 1.56rem
      right 0
      left 0
      bottom 0
      background-color: #ccc
      .search-item
        line-height:.8rem
        padding-left:.2rem
        background-color:#fff
</style>

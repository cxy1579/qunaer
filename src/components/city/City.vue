<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './CityHeader'
  import CitySearch from './CitySearch'
  import CityList from './CityList'
  import { getCity } from '@/api'
  import CityAlphabet from './CityAlphabet'

  export default {
    name: "City",
    data() {
      return {
        cities: {},
        hotCities: [],
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet,
    },
    activated() {
      this.getData()
    },
    methods: {
      async getData() {
        let {cities,hotCities} = await getCity()
        this.cities = cities
        this.hotCities = hotCities
      }
    }
  }
</script>

<style scoped>

</style>

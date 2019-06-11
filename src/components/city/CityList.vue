<template>
    <div class="city-list" ref="father">
      <div>
        <div>
          <h3 class="list-title">当前城市</h3>
          <div class="city">
            <span>{{ $store.state.currentCity }}</span>
          </div>
        </div>
        <div>
          <h3 class="list-title">热门城市</h3>
          <div class="city">
          <span
            v-for="hotCity in hotCities"
            @click="backHome(hotCity.name)"
            :key="hotCity.id"
          >
            {{ hotCity.name }}
          </span>
          </div>
        </div>
        <div v-for="(items,index) in cities" :key="index">
          <h3 class="list-title" :ref="index">{{ index }}</h3>
          <ul>
            <li
              class="city-item border-bottom"
              v-for="item in items"
              @click="backHome(item.name)"
              :key="item.id"
            >{{ item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
      name: "CityList",
      props: {
        cities: Object,
        hotCities: Array,
      },
      computed: {
        cityLetter() {
          console.log('computed触发了')

          // 只有仓库里面 letter 的值改变了才会重新计算
          // 仓库里面其他值改变不会重新计算
          // 除具体依赖改变会触发相应的computed外，此组件重新加载时也会触发computed
          return this.$store.state.letter
        }
      },
      watch: {
        cityLetter(letter) {
          // console.log('watch监听到了')
          this.scroll.scrollToElement(this.$refs[letter][0])
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
  .city-list
    position:fixed
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .list-title
      line-height: 0.54rem
      background: #eee
      padding-left: 0.2rem
      color: #666
      font-size: 0.26rem
    .city
      padding-left:.15rem
      span
        display:inline-block
        width:28%
        padding:.15rem .2rem
        margin:.1rem
        border:.01rem solid #ccc
        text-align:center
        box-sizing:border-box
        border-radius:.05rem
    .city-item
      line-height:.8rem
      padding-left:.2rem
    .border-bottom:before
      border-color:#aaa
</style>

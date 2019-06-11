<template>
    <div class="alphabet">
      <ul class="ul">
        <li
          v-for="(value,index) in cities"
          :key="index"
          @click="changeLetter(index)"
        >
          {{ index }}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "CityAlphabet",
      props: {
        cities: Object,
      },
      methods: {
        changeLetter(letter) {
          this.$store.commit('changeLetter', letter)
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .alphabet
    position fixed
    display flex
    flex-direction column
    justify-content center
    z-index 10
    top 0
    bottom 0
    right 0
    color cornflowerblue
    .ul
      display flex
      flex-direction:column
      line-height .5rem
      text-align center
      font-weight 600
</style>

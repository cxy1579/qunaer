<template>
    <div>
      <transition name="heaven">
        <slot name="fade"></slot>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "FadeAnimation"
    }
</script>

<style lang="stylus" scoped>
  .heaven-enter,.heaven-leave-to
    opacity 0
  .heaven-enter-active,.heaven-leave-active
    transition opacity .5s
</style>

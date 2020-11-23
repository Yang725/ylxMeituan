<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  async mounted () {
    //this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  components: {
    FooterGuide
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#app
  width 100%
  height 100%
  background #f5f5f5
</style>

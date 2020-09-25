<template>
  <v-app id="inspire">
    <layout-head v-if="isMember"/>
      <router-view/>
    <layout-left v-if="isMember"/>
  </v-app>
</template>

<script>
import layoutHead from './components/layout/layoutHead.vue'
import layoutLeft from './components/layout/layoutLeft.vue'

export default {
  name: 'App',
  components: {
    'layout-head': layoutHead,
    'layout-left': layoutLeft
  },
  data: () => ({
  }),
  computed: {
    isMember () { // vuex state에 회원정보가 있는경우(로그인된상태) 상단, 좌측 레이아웃 출력
      return this.$store.state.userInfo
    }
  },
};
</script>

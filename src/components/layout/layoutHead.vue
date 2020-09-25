<template>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      레이아웃 상단
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="signOut()">로그아웃</v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'layout-head',
    data: () => ({
    }),
    computed: {
    },
    methods: {
      signOut() {        
          this.$store.commit("signOut")
          this.$router.push({ name: 'Login' })      
      },
    },
    created: function () {
    },
  }
</script>

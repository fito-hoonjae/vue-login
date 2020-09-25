<template>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          레아아웃 메인
          {{ userInfo }}
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
  export default {
    data: () => ({
    }),
    computed: {
      userInfo() {
        return this.$store.state.userInfo;
      }
    },
    methods: {
    },
    created: function () {
        console.log(this.$store.state)
    },
  }
</script>
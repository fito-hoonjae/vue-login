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
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>로그인</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onSubmit(email, password)">LOGIN</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>


<script>
export default {
  name: 'signin',
  data: () => ({
    email: 'hoonjae.lee@fitogether.com', // 내 계정 상수로 박아둠
    password: 'WXRQIJUOHZ875*@'
  }),
  methods: {
    onSubmit(email, password) {
      
      // 로그인 요청
      this.$store.dispatch("signIn", { email, password })
        .then((response) => {
          //console.log(response);
          if(response == 200){
            alert('로그인 성공.')
            this.redirect()
          }
          if(response == 401)
            alert('로그인 정보가 일치하지 않습니다.')
        })
        
    },
    redirect() { // 성공시 home으로 이동       
        this.$router.push({ name: 'Home' })        
    },
  },
  created: function () {
      // 페이지 로딩시 이미 로그인된 상태이면 home으로 바로이동
      if(localStorage.getItem("token")) {
        this.$router.push({
          name: 'Home'
        })
      }
      console.log(this.$store.state)
  },
}
</script>
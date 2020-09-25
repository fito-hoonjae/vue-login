import Vue from 'vue'
import Router from 'vue-router'
import store from "../store";
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)


const checkAuthorized = () => (from, to, next) => {
  if(localStorage.getItem("token")) {
    if(store.state.token == null) {
      // 새로고침에 대응하여 vuex state 갱신
      store.commit("refreshState", localStorage.getItem("token"))
    }
    next()
  } else {
    next('/')
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      // 로그인 기능 구현을 위한 테스트 작업이므로 /login 등 별도의 로그인 경로를 설정하지 않고
      // root를 로그인페이지로 가정
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: checkAuthorized() // 로그인한 사용자만 이용가능
    }
  ]
})
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import jwt_decode from "jwt-decode"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userInfo: null
  },
  getters: {},
  mutations: {
    signIn(state, token) {
      // vuex state에 토큰/유저정보 저장
      state.token = token
      state.userInfo = jwt_decode(token)
      // 로컬스토리지에 토큰저장 (로컬스토리지에는 토큰만 저장)
      localStorage.setItem('token', JSON.stringify(token))
    },
    signOut(state) {
      // 로그아웃시 vuex state와 로컬스토리지의 정보를 초기화 한다
      state.token = null,
      state.userInfo = null,
      localStorage.removeItem('token')
    },
    refreshState(state, token) {
      // vuex state에 토큰/유저정보 갱신
      state.token = token
      state.userInfo = jwt_decode(token)
    },
  },
  actions: {
    signIn({ commit }, { email, password }) {
      console.log('axios 요청')
      return axios.post('https://api-dev.ohcoach.com/auth/signin', {
          "email": email,
          "password": password
        })
      .then(res => { 
          console.log('axios 응답')

          if(res.status == 200) {
            commit("signIn", res.data.Authorization)
            return 200
          }
        })
        .catch(error => {
          if(error.response.status == 401)
            return 401
        })
    },
  },
})
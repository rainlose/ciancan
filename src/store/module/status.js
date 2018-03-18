const state = {
  isLogin: false
}

const getters = {
  isLogin: state => state.isLogin
}

const mutations = {
  userStatus(state, user) {
    if (user) {
      
      state.isLogin = true
    } else {
      
      state.isLogin = false
    }
  }
}

const actions = {
  setUser({
    commit
  }, user) {
    commit("userStatus", user)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

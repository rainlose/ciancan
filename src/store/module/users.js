const state = {
  userName: null
}

const getters = {
  userName: state => state.userName
}

const mutations = {
  // 更改用户的状态信息
  userStatus(state, user) {
    if (user) {
      state.userName = user
      // state.isLogin = true
    } else {
      state.userName = null
      // state.isLogin = false
    }
  }
}

const actions = {
  // 应用mutations
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

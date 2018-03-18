const state = {
  menuItems: {},
}
const getters = {
  // 获取属性状态
  getMenuItems: state => state.menuItems,
}
const mutations = {
  // 改变属性状态
  setMenuItems(state, data) {
    state.menuItems = data
  },
  pushMenuItems(state, data) {
    state.menuItems.push(data)
  },
  removeMenuItems(state, data) {
    state.menuItems.forEach((item, index) => {
      if (item == data) {
        state.menuItems.splice(index, 1)
      }
    })
  },

}
const actions = {

}
export default {
  state,
  getters,
  mutations,
  actions
}

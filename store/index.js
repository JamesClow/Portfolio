export const state = () => ({
  touch_screen: false,
})

export const mutations = {
  setTouchScreen(state, val){
    state.touch_screen = val;
  }
}

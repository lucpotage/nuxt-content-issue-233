export const state = () => ({
  color: 'red'
})

export const getters = {
  color: (state) => {
    return state.color
  }
}
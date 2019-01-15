import jsonp from 'jsonp'

export const state = () => ({
  horoscopes: [],
  loaded: false
})

export const actions = {
  async getHoroscopes({ commit }, date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const url = `${process.env.API_URL}/${year}/${month}/${day}`

    commit('setLoaded', false)

    const response = await this.$axios
      .get(url)
      .then(response => {
        const data = response.data
        return data['horoscope'][Object.keys(data['horoscope'])[0]]
      })
      .catch(() => {
        return []
      })
    commit('setHoroscopes', response)
    commit('setLoaded', true)
  }
}

export const mutations = {
  setHoroscopes(state, data) {
    state.horoscopes = data
  },
  setLoaded(state, data) {
    state.loaded = data
  }
}

export const getters = {
  horoscopes(state) {
    return state.horoscopes
  },
  loaded(state) {
    return state.loaded
  }
}

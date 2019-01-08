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
    const url = `http://api.jugemkey.jp/api/horoscope/free/jsonp/${year}/${month}/${day}`

    commit('setLoaded', false)

    jsonp(url, null, (err, data) => {
      if (err) {
        commit('setHoroscopes', [])
      } else {
        commit(
          'setHoroscopes',
          data['horoscope'][Object.keys(data['horoscope'])[0]]
        )
      }
      commit('setLoaded', true)
    })
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

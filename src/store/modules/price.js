import axios from 'axios'
// import data from '../static/price.json'
const priceView = {
  state: {
    getPriceResponse: []
  },
  mutations: {
    GET_PRICE: (state) => {
      const url = 'src/store/static/price.json' // GET api url here.
      axios.get(url)
        .then(response => {
          state.getPriceResponse.push(response.data.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
      // state.getPriceResponse.push(data.data)
    }
  },
  actions: {
    getPriceView({ commit, state }) {
      return new Promise((resolve) => {
        commit('GET_PRICE')
        resolve([...state.getPriceResponse])
      })
    }
  }
}

export default priceView

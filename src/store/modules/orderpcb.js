import axios from 'axios'
// import data from '../static/orderpcb.json'
const orderPcbView = {
  state: {
    getOrderPcbResponse: [],
    saveOrderPcbResponse: []
  },
  mutations: {
    GET_ORDER_PCB: (state) => {
      const url = 'src/store/static/orderpcb.json' // GET api url here.
      axios.get(url)
        .then(response => {
          state.getOrderPcbResponse.push(response.data.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
      // state.getOrderPcbResponse.push(data.data)
    },
    SAVE_ORDER_PCB: (state, orderPcbBody) => {
      const url = 'http://localhost:3000/data'
      state.saveOrderPcbResponse = []
      axios.post(url, { // POST api url here.
        body: orderPcbBody
      })
        .then(response => {
          state.saveOrderPcbResponse.push({ Success: true, Message: '' })
        })
        .catch(e => {
          state.saveOrderPcbResponse.push({ Success: false, Message: e.message })
        })
    }
  },
  actions: {
    getOrderPcbView({ commit, state }) {
      return new Promise((resolve) => {
        commit('GET_ORDER_PCB')
        resolve([...state.getOrderPcbResponse])
      })
    },
    saveOrderPcb({ commit, state }, data) {
      return new Promise((resolve) => {
        commit('SAVE_ORDER_PCB', data)
        resolve([...state.saveOrderPcbResponse])
      })
    }
  }
}

export default orderPcbView

import * as types from './mutation-types'
import axios from 'axios'

export const OrderPcbAction = ({ commit }) => {
  axios({ method: 'GET', 'url': 'src/store/static/orderpcb.json' }).then(result => {
    commit(types.OrderPcb, result.data.data)
    return Promise.resolve()
  }, error => {
    console.error(error)
  })
}

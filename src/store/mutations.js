import {
  ADD_COUNT,
  ADD_PRODUCT
} from './mutation-types.js'

export default {
  [ADD_COUNT](state, payload) {
    payload.count+=1;
  },
  [ADD_PRODUCT](state, payload){
    payload.isSelected = false;
    state.cartList.push(payload);
  }
}
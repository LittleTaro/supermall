import {
  ADD_COUNT,
  ADD_PRODUCT
} from './mutation-types.js'

export default {
  addToCart(context, payload) {
    return new Promise((resolve) => {
      let oldProduct = context.state.cartList.find(item => {
     return item.iid === payload.iid
   });
   if (oldProduct) {
     context.commit(ADD_COUNT, oldProduct);
     resolve('该商品数量+1');
   } else {
     payload.count = 1;
     context.commit(ADD_PRODUCT, payload);
     resolve('商品+1');
   }
   })
  }
}
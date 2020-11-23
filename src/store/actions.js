import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutations-types'
import {reqAddress,reqFoodCategorys,reqShops, reqUserInfo,reqLogout,  reqShopRatings,reqShopGoods,reqShopInfo,reqSearchShop} from '../api'
export default {
  async getAddress({commit,state}){
      const geohash = state.latitude + ',' + state.longitude
      const result = await reqAddress(geohash)
      if(result.code===0){
        const address =result.data
        commit(RECEIVE_ADDRESS,{address})
      }
  },

  async getCategorys({commit}){
      const result = await reqFoodCategorys()
      if(result.code===0){
        const categorys =result.data
        commit(RECEIVE_CATEGORYS,{categorys})
      }
  },
  async getShops({commit,state}){
      const {latitude,longitude} = state
      const result = await reqShops(longitude,latitude)
      if(result.code===0){
        const shops =result.data
        commit(RECEIVE_SHOPS,{shops})
      }
  },
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if(result.code===0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo}) 
    }
  },
  async logout ({commit}){
    const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER_INFO) 
    }
  },
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      callback && callback()
    }
  },
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})  
      callback && callback()
    }
  },
  updateFoodCount({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },

  clearCart({commit}) {
    commit(CLEAR_CART)
  },

  async searchShops({commit, state}, keyword) {

    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  },
}
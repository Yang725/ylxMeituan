import ajax from './ajax'


export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

export const reqFoodTypes = () => ajax(`/index_category`)

export const reqShops = (latitude,longitude) => ajax(`/shops`,{latitude,longitude})

export const reqSearchShop = (geohash,keyword) => ajax(`/search_shops`,{geohash,keyword})

export const reqCaptcha = () => ajax(`/captcha`)

export const reqPwdLogin = (name,pwd,captcha) => ajax(`/login_pwd`,{name,pwd,captcha},'POST')

export const reqSendCode = (phone) => ajax(`/sendcode`,{phone})

export const reqSmsLogin = (phone,code) => ajax(`/login_sms`,{phone,code},'POST')

export const reqUserInfo = () => ajax(`/userinfo`)

export const reqLogout = () => ajax(`/logout`)

export const reqShopInfo = () => ajax(`/index_category`)

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')
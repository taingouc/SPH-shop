import request from './request'
import mockRequest from './mockRequest'
/**
 *
 * @returns 页面主体左侧边商品分类导航数据
 */
export const getCategoryList = () => {
  return request.get('/api/product/getBaseCategoryList')
}

/**
 *
 * @returns mock轮播图假数据
 */
export const getBannerList = () => {
  return mockRequest.get('/banner')
}

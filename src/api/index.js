import request from './request'
/**
 *
 * @returns 页面主体左侧边商品分类导航数据
 */
export const getCategoryList = () => {
  return request.get('/api/product/getBaseCategoryList')
}

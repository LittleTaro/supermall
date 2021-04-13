import {request} from 'network/request.js';

export function getCategory() {
  return request({
    url: '/category'
  })
}

// 获取子分类上部分的分类数据
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

// 获取子分类下部分的部分商品展示数据
export function getSubDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey, 
      type    //有pop new sell三类
    }
  })
}
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375, // (Number) 视窗的宽度，设计稿的视口宽度，一般是750
      viewportHeight: 667,  //视窗的高度
      unitPrecision: 5, //  (Number) 单位转换后保留的精度（很多时候无法整除）
      viewportUnit: 'vw', // (String) 希望使用的视口单位
      selectorBlackList: ['.ignore','tab-bar'], //(Array) 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
      minPixelValue: 1, // (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, // (Boolean) 媒体查询里的单位是否需要转换单位
      exclude:[/TabBar/] // (Array or Regexp) 忽略某些文件夹下的文件或特定文件
    },
  }
}
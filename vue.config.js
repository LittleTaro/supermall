const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      // 配置路径别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    },
   
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [ 
        path.resolve(__dirname, "./src/assets/css/base.less")
      ]
    }
  }
}

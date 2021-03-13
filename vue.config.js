const DevUtil = require('./app.dev/DevUtil');

const { isProd, cfgSvr } = new DevUtil();

const {
  getPath
} = require('./app.dev/util/getPath');

const GeneralOpt = {
  css: {
    // 是否强制内联CSS
    extract: true,
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/_vars.scss";'
      }
    }
  },
  productionSourceMap: !isProd,
  parallel: require('os').cpus().length > 1,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    host: cfgSvr.addr,
    port: cfgSvr.portDev
  }
};

module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('#', getPath('examples'))
      .set('@', getPath('src'));
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  ...GeneralOpt
};

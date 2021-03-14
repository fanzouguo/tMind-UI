module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 强制内联CSS
  css: {
    extract: true
    // loaderOptions: {
    //   css: {
    //     // 这里的选项会传递给 css-loader
    //     importLoaders: 1
    //   },
    //   sass: {
    //     // 这里的选项会传递给 postcss-loader
    //     importLoaders: 1
    //   }
    // }
  }
};

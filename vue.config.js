const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/vue-deploy/" : "/",
  pages: {
    'index': {
      // entry for the page
      entry: './src/pages/home/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'home.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Home',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'robots': {
      entry: './src/pages/robots/main.js',
      template: 'public/index.html',
      filename: 'robots.html',
      title: 'Robots',
      chunks: ['chunk-vendors', 'chunk-common', 'robots']
    },
  }
})

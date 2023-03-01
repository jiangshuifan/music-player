const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir: string) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  //不使用eslint
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
  },
})
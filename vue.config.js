module.exports = {
  devServer: {
    proxy: { /*  对项目里的地址api进行反向代理，指向其他网址 */
      '/api': {
        target: 'http://39.97.33.178',
        changeOrigin: true
      }
    }
  }
}

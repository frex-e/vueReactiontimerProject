module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueReactiontimerProject/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Reaction Timer'
        return args
      })
  }
}

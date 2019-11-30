module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5, //换算基数，一般和html的font-size一致
      propList: ['*']  //哪些css属性需要换算
    }
  }
}

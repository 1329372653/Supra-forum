const path = require('path'),

    //debug是判断当前是开发环境还是发布环境
    debug = process.env.NODE_ENV !== 'production'

module.exports = {

    //部署应用包时的基本URL，如果是生产环境，部署到 /cli-study/dist 路径；如果是开发环境，部署到根路径
    publicPath: process.env.NODE_ENV === 'production' ?
        './' :
        './',

    //输出文件路径
    outputDir: 'dist',

    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',

    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    filenameHashing: true,

    // 是否使用包含运行时编译器的Vue构建版本，设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: true,

    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: [],

    // 发布环境不需要sourceMap
    productionSourceMap: false,

    css: {

        // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
        modules: false,

        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
        extract: true,

        // 是否构建样式地图，false 将提高构建速度
        sourceMap: true,

        // css预设器配置项
        loaderOptions: {
            css: {

                //这里的选项会传递给 css-loader
            },
            postcss: {

                // 这里的选项会传递给 postcss-loader
            }
        },
    },

    //所有 webpack-dev-server 的选项都支持
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 3000,
        https: false,
        hotOnly: false,
        proxy: {
            //凡是请求以api开头的都会使用下面的代理服务器
            '/api/*': {
                target: 'http://localhost:9000/', // 目标服务器地址
                secure: false, // 目标服务器地址是否是安全协议
                changeOrigin: true, // 是否修改来源, 为true时会让目标服务器以为是webpack-dev-server发出的请求!服务端和服务端的请求是没有跨域的
                //pathRewrite: {'^/api': '/a'}     // 将/api开头的请求地址, /api 改为 /, 即 /api/xx 改为 /xx
            }
        }
    },

    // 第三方插件配置
    pluginOptions: {},

    //调整webpack配置的最简单的方式
    configureWebpack: config => {
        if (!debug) {

            // 为生产环境修改配置...
            config.devtool = '#cheap-module-source-map'
        } else {

            // 为开发环境修改配置...
            config.devtool = '#cheap-module-eval-source-map'
        }

        Object.assign(config, { // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    'vue$': 'vue/dist/vue.js'
                }
            }
        })
    },

    //webpack的链式编程
    chainWebpack: () => {
        if (debug) {

            // 本地开发配置
        } else {

            // 生产开发配置
        }
    },

    /*  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      //chunk参考：https://segmentfault.com/q/1010000016925412/a-1020000016946034
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },*/

    lintOnSave: false,
}
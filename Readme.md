# 环境配置
- 首先npm init初始化
- 安装webpack vue vue-loader(npm i webpack vue vue-loader)
- 发现出现警告，所以还需要npm i css-loader vue-template-compiler

# 遇到的问题
- npm run build时遇到
- - vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config
- - 原因是Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
- - 解决方案:在webpack.config.js中加入
- - const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    devtool: "sourcemap",
    entry: './js/entry.js', // 入口文件
    output: {
        filename: 'bundle.js' // 打包出来的wenjian
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module : {
    ...
}
}

# stylus
- 别忘了安装stylus-loader（同时还要安装stylus）

# 安装webpack-dev-server（用于开发环境）
- npm i webpack-dev-server
- webpack-dev-server可以自动刷新(自动重启)

# 安装cross-env
- npm i cross-env
- 是为了在不同的平台下配置dev/pro环境不用更改命令

# 安装html-webpack-plugin
- npm i html-webpack-plugin
- webpack下的html包

# 实现不刷新页面更新内容(ajax?)
- config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        //减少一些不需要的信息展示问题
        new webpack.NoEmitOnErrorsPlugin()
    ) 
- +hot:true

# 安装postcss-loader,autoprefixer,babel-loader babel-core babel-preset-env babel-plugin-transform-vue-jsx,babel-helper-vue-jsx-merge-props,babel-plugin-syntax-jsx
- npm install postcss-loader autoprefixer babel-loader babel-core

# jsx文件和vue文件的差别
- jsx的css文件要拆分出去单独写
- vue的css可以写在组件里
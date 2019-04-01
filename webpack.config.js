const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'
const config = {
    //代表开发的是一个前端项目
    target: 'web',
    //拼接文件名
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new HtmlPlugin(),
        //用以判断环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        })

    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg$)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ]
            }
        ]
    }

}

if (isDev) {
    //利于调试代码,用source-map的方式映射回能看的懂的代码
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: 8080,
        host: '0.0.0.0',
        overlay: {
            //让错误显示到屏幕上
            errors: true
        },
        //自动打开
        // open: true,
        //处理一些框架不理解的页面映射过来
        // historyFallback : {

        // }
        hot: true
    }

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        //减少一些不需要的信息展示问题
        new webpack.NoEmitOnErrorsPlugin()
    ) 
}

module.exports = config
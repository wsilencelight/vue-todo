const autoprefixer = require('autoprefixer')

module.exports = {
    plugins : [
        //postcss用来后处理css,用组建优化
        //autoprefixer用来自动处理不同浏览器的css属性前缀
        autoprefixer()
    ]
}
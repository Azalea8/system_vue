const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/test': {
                target: 'http://127.0.0.1:8000',//后端接口地址
                changeOrigin: true,//是否允许跨越
                pathRewrite: {
                    '^/test': '/api'//重写,
                }
            }
        }
    }
})

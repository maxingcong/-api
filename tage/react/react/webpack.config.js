// 引入资源  创建标准的Commonjs规范的模块  为JS的表现来制定规范
const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseUrl = './dayx/'

module.exports = {
    //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和加载器(loader)
    context: path.resolve(__dirname, './'),
    //起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。
    entry: {
        app: baseUrl+'app.js'
        // app: './dayx/app.jsx',
    },
    //选项控制 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个入口起点，但只指定一个输出配置
    output: {  // 将目标文件压缩合并 到指定文件
        path    : path.resolve(__dirname, './dist'),
        filename: '[name].js'                         // 如果你是对象入口，那么此时的name就是对象入口中的key
    },
    resolve: {  //访问指定文件时的别名
        alias: {
            "@": path.join(__dirname, baseUrl, 'src')
        }
    },
    //在合并文件之前 做处理 HTML 
    //根目录下index.html，希望可以将其出现在dist/index.html，并且自动引入js
    plugins: [  //能够将目标文件夹下的html 与 目标文件下的 js 文件合并 并引入
        new HtmlWebpackPlugin({ // 会将原来的index.html文件在dist文件处生成并且引入关联的文件
            template: './index.html'
        }),
        new CopyWebpackPlugin([
            {
                from  : path.resolve(__dirname, './static'),
                to    : 'static',
                ignore: ['.*']
            }
        ])
    ],

    // 如果代码中使用了js的高级语法，需要使用babel解析器进行解析，
    //修改配置文件  语法解析
    module: {
        rules: [
            {
                test  : /\.js|jsx$/,    // 以js结尾的语句
                loader: 'babel-loader'  // 以js结尾的语句，需要使用babel解析器进行解析
            }, {
                test  : /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'  // 从右向左传递
            }, {
                test   : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader : 'url-loader',
                options: {
                    limit: 100000,
                    name : path.posix.join('', 'img/[name].[hash:7].[ext]')
                }
            }, {
                test   : /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader : 'url-loader',
                options: {
                    limit: 1000000,
                    name : path.posix.join('', 'media/[name].[hash:7].[ext]')
                }
            }, {
                test   : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader : 'url-loader',
                options: {
                    limit: 10000,
                    name : path.posix.join('', 'fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    devServer: {  //服务器设置 不用打包 直接运行
        clientLogLevel: 'warning',     // 客户端服务器显示log为warning
        contentBase   : false,         //我们要不要使用 CopyWebpackPlugin
        host          : '127.0.0.1',   // 设施访问地址  0.0.0.0别人可以通过你的ip查看你的项目
        port          : '8088',
        compress      : true,          //是否允许压缩
        open          : false,         // 打开默认浏览器运行代码
        proxy         : { // 代理服务器
            '/gaode': {
                target      : 'https://m.amap.com',
                changeOrigin: true,
                pathRewrite : {
                    '^/gaode': ''
                }
            }
        }
    }
}

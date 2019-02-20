
# webpack初级入门


###  打包准备
```
#全局安装
sudo npm install webpack -g
npm init
#本地项目安装
npm install webpack --save-dev
npm install webpack-cli  --save-dev

#用于加载css和style样式
npm install css-loader style-loader --save -dev


```
### 开始打包
```
#webpack inputfile_names -o outpufile_name
#webpack 一个或者多个输入文件 -o 单个输出文件
webpack runoob1.js -o bundle.js
#如果不指定输出文件名，则会在当前目录自动创建一个dist目录把生成的main.js文件
# /dist/main.js
#webpack runoob1.js 不指定输出文件
#webpack runoob1.js

```
### 通过配置文件来打包
* 要创建一个名为webpack.config.js的文件
* 配置完相应的参数后，执行如下命令即可
```
#webpack 不加任何参数，会自动找当前目录下webpack.config.js文件
#webpack --help 显示webpack的帮助文档
webpack
#webpack --config webpack.config.js的位置，这里就在根目录下
webpack --config webpack.config.js
#显示打包进度
webpack --progress --colors
#--watch表示监听文件是否变化，有变化才重新打包
#开启监听模式后，没有变化的模块会在编译后缓存到内存中，而不会每次都被重新编译，所以监听模式的整体速度是很快的。
webpack --progress --colors --watch
```

### 开启一个服务来访问页面
```
#全局安装，用于命令执行
sudo npm install webpack-dev-server 
#用于项目开发依赖
npm install webpack-dev-server --save-dev
#开启服务，这会在8080端口开启一个服务，默认读取webpack.config.js文件配置
#可手动指定，webpack-dev-server --config 配置文件路径
#服务开启后，文件有变动会自动重新编译并刷新页面
#但这并不会自动生成打包文件，要生存打包文件仍需要执行打包命令
webpack-dev-server --progress --colors

```
浏览器打开 http://localhost:8080/ 即可看到页面

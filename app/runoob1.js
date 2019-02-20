
// document.write("It works.");
//webpack会自动解析依赖关系来打包

//使用相应的加载器来加载样式,注意这里的写法
require("!style-loader!css-loader!./style.css");
document.write(require("./runoob2.js"));


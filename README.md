# BackTop_module
返回顶部按钮 模块化的方式组织代码 可复用



#使用方法
```js
//在data-main主模块文件中可以这样调用
require(['jquery', 'backtop'], function($, backTop) {
    //使用面向对象的方式调用
    var backtop = new backTop.BackTop($('#backTop'), {
        mode: 'go',
        speed: 1500,
        pos: 100
    });
    // 使用jq的方法调用
    $('#backTop').backTop({
        mode: 'move',   //返回顶部移动模式，动画或直接到达
        speed: 800,     //动画模式下返回顶部的速度
        pos: 100        //当scrollTop大于pos时显示返回顶部按钮，否则不显示
    });
});
```js
主要学习requirejs使用和模块化写法


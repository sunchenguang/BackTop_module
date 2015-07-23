/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-07-23 10:30:04
 * @version $Id$
 */
require.config({
    //配置jquery的别名
    paths: {
        'jquery': 'jquery.min'
    }
});
require(['jquery', 'backtop'], function($, backTop) {
    //使用面向对象的方式调用
    // var backtop = new backTop.BackTop($('#backTop'), {
    //     mode: 'go',
    //     speed: 1500,
    //     pos: 100
    // });
    // 使用jq的方法调用
    $('#backTop').backTop({
        mode: 'move',   //返回顶部移动模式，动画或直接到达
        speed: 800,     //动画模式下返回顶部的速度
        pos: 100        //当scrollTop大于pos时显示返回顶部按钮，否则不显示
    });
});

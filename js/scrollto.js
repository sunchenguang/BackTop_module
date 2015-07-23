/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-07-23 11:07:08
 * @version $Id$
 */
//scrollto模块依赖jquery模块
define(['jquery'], function($) {
    //Scroll构造函数
    function Scroll(options) {
        this.options = $.extend({}, Scroll.DEFAULTS, options);
        this.$el = $('html, body');
    }
    Scroll.DEFAULTS = {
        dest: 0,
        speed: 500
    };
    Scroll.prototype.move = function() {
        var opt = this.options;
        if ($(window).scrollTop() !== opt.dest && !this.$el.is(':animated')) {
            this.$el.animate({
                scrollTop: opt.dest
            }, opt.speed);
        }
    };
    Scroll.prototype.go = function() {
        var dest = this.options.dest;
        if ($(window).scrollTop() !== dest) {
            this.$el.scrollTop(dest);
        }
    };
    //模块返回Scroll构造函数
    return {
        ScrollTo: Scroll
    };
});

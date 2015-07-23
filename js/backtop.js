/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-07-23 12:08:01
 * @version $Id$
 */
//backtop模块依赖jquery,和scrollto模块
define(['jquery', 'scrollto'], function($, scrollto) {
    //BackTop构造函数
    function BackTop(el, options) {
        this.$el = $(el);
        this.options = $.extend({}, BackTop.DEFAULTS, options);
        //使用scrollto模块创建Scroll实例
        this.scroll = new scrollto.ScrollTo({
            dest: 0,
            speed: this.options.speed
        });
        //理解检测位置，判断是否显示返回顶部按钮
        this._checkPosition();
        if (this.options.mode === 'move') {
            //$.proxy() 更改this._move函数的上下文为this即BackTop类对象
            this.$el.on('click', $.proxy(this._move, this));
        } else {
            this.$el.on('click', $.proxy(this._go, this));
        }
        $(window).on('scroll', $.proxy(this._checkPosition, this));
    }
    //把默认参数放到外面，以免在每个实例中创建一份
    BackTop.DEFAULTS = {
        mode: 'move',
        speed: 500,
        pos: $(window).height()
    };
    BackTop.prototype._move = function() {
        this.scroll.move();
    };
    BackTop.prototype._go = function() {
        this.scroll.go();
    };
    //根据srcollTop检测返回顶部按钮是否显示
    BackTop.prototype._checkPosition = function() {
        var $el = this.$el;
        if ($(window).scrollTop() > this.options.pos) {
            $el.fadeIn();
        } else {
            $el.fadeOut();
        }
    };
    //通过 $.fn.extend 提供jq实例方法
    $.fn.extend({
        backTop: function(options) {
            return this.each(function(index, el) {
                new BackTop(this, options);
            });
        }
    });
    //模块返回BackTop构造函数
    return {
        BackTop: BackTop
    };
});

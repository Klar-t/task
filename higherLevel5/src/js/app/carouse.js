/**
 * Created by Liqiaomiao on 2017/8/15.
 */
define(function () {

    Carouse2=(function () {

        function Carouse (obj) {
            this.ct=obj;
            this.dom();
            this.bind();
        }
        Carouse.prototype={
            dom:function () {
                var perent = this.ct;
                $imgct = this.$imgCt  =$(perent).find(".img-ct");
                var $clone0= $(perent).find(".img-ct>li:first").clone();
                var $clonelast= $(perent).find(".img-ct>li:last").clone();
                this.len = this.$imgCt.find("li").length;
                this.$bullets= $(perent).find(".bullet li");
                $imgct.prepend($clonelast);
                $imgct.append($clone0);
                this.whresize();
            },
            whresize:function () {
                var _this=this;
                var sH =  $(window).height();
                var sw = $(window).width();
                this.current=0;
                this.flag = true;
                this.ct.css({
                    "width":sw,
                    "height":sH
                });
                this.$imgCt.css({
                    width:(_this.len+2)*sw ,
                    left:-sw
                });
                this.ct.find("li").width(sw);
            },
            bind:function () {
                var _this=this;
                $(window).resize(function () {
                    _this.whresize();
                })
                this.ct.find(".btn-pre").click(function () {
                    _this.prev(1)
                });
                this.ct.find(".btn-next").click(function () {
                    _this.next(1)
                });
                this.$bullets.click(function () {
                    var n = $(this).index();
                    if(n>_this.current){
                        movelen=n-_this.current;
                    }else{
                        movelen=_this.current-n;
                        _this.prev(movelen)
                    }

                });
            },
            next:function (movelen) {
                var _this= this;
                var movew =  $(window).width();
                if(!this.flag){return}
                this.flag=false;
                this.$imgCt.animate({left:"-="+movew*movelen},function () {
                    _this.current+=movelen;
                    if(_this.current==_this.len){
                        _this.current=0;
                        _this.$imgCt.css({left:-movew});

                    }
                    _this.bullet();
                    _this.flag=true;
                });
            },
            prev:function (movelen) {
                if(!this.flag){return}
                var _this= this;
                var movew =  $(window).width();
                this.flag=false;
                this.$imgCt.animate({left:"+="+movew*movelen},function () {
                    _this.current-=movelen;

                    if( _this.current<0){
                        _this.current= _this.len-1;
                        _this.$imgCt.css({left:-movew*( _this.current+1)})
                    }
                    _this.bullet();
                    _this.flag=true;
                })
            },
            bullet:function () {
                this.$bullets.removeClass("active");
                this.$bullets.eq(this.current).addClass("active");
            }
        };
        return {
            init:function (obj) {
                $(obj).each(function (index,item) {
                    new Carouse($(item))
                })
            }

        }
    })();
    return Carouse2;
});


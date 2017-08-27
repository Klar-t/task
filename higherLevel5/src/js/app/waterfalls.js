/**
 * Created by Liqiaomiao on 2017/8/16.
 */
define(function () {

    var rowlen =parseInt($(".container").width()/$(".wedding-Gallery li").width());
    var row = [];
    for(var i=0;i<rowlen;i++){
        row[i]=0;
    }
    var len = 5;
    start = 0;
    $.ajax({
        url:"../../getInfo",
        data:{start:start,len:len}
    }).success(function (data) {
        renderdom(data);
    });
    $(".loadmore").click(function () {
        start+=len;
        $(".loadmore").html("loading");
        $.ajax({
            url:"../../getInfo",
            data:{start:start,len:len}
        }).success(function (data) {
            if(data.length>0){ renderdom(data); $(".loadmore").html("load more");}
            else{
                $(".loadmore").html("I'm so sorry,no more gallery")
            }

        }).error(function (data) {
            alert(data.statusText)
            $(".loadmore").html("load more");
        });
    });
    function renderdom(data) {
        $.each(data,function (i, item) {
            var $node = getdom(data[i]);
            $node.find("img").load(function () {
                $(".wedding-Gallery ul").append($node);
                waterfall($node);
            })
        })
    }
    function getdom(data) {
        var html = '<li>' +
            ' <div class="overlay2">' +
            '<svg class="icon-jiahao">' +
            ' <use xlink:href="#icon-jiahao"></use>' +
            '</svg>' +
            ' </div>' +
            ' <div class="case-studies-sumary">' +
            '<span>'+data.num+'</span>' +
            '<h2>'+data.title+'</h2>' +
            '</div>' +
            '<img src="'+data.src+'" alt="">' +
            '</li>';
        return $(html);
    }
    function waterfall() {
        var row = [];
        var rowlen =parseInt( $(".wedding-Gallery ul").width()/$(".wedding-Gallery li").width());
        for(var i =0;i<rowlen;i++){
            row[i]=0
        }
        $(".wedding-Gallery li").each(function (i,item) {
            var minitem = Math.min.apply(null,row);
            var minindex = row.indexOf(minitem);
            var w = $(this).outerWidth(true);
            var h = $(this).outerHeight(true);
            $(this).css({
                left:w*minindex,
                top:row[minindex]
            });
            row[minindex]+=h;
            var ulH = Math.max.apply(null,row);
            $(".wedding-Gallery ul").height(ulH)
        })


    }
    $(window).scroll(function () {
        var scrollH=$(window).scrollTop();
        var wH = $(window).height();
        if(scrollH>wH){
            $(".back").show()
        }else{
            $(".back").hide()
        }
    });
});
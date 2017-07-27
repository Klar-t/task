//假设域名是localhost, 端口是8080

//更多详细使用方法参考 http://www.expressjs.com.cn/guide/routing.html
/***
 * 加载更多
 *
 */
router.get('/loadmore',function (req,res) {
    var start = req.query.start;
    var len = req.query.len;
    var result=[];
    for(var i =0;i<len;i++){
        result[i] ="内容"+ (parseInt(start)+1+i);
    }
    setTimeout(function () {
        res.send(result)
    },1000)

})




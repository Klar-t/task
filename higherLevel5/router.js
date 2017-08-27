//假设域名是localhost, 端口是8080

//更多详细使用方法参考 http://www.expressjs.com.cn/guide/routing.html

/**
 * 当 http://localhost:8080/getInfo 的GET请求到来时被下面匹配到进行处理
 * 发送JSON格式的响应数据 {name: 'ruoyu'}
 */
router.get('/getInfo', function(req, res) {
    var data=[
        {src:"../../src/images/gallery-13.jpg",num:"16 photos",title:"Timer starts now"},
        {src:"../../src/images/gallery-1.jpg",num:"14 photos",title:"Two Glas of Juice"},
        {src:"../../src/images/gallery-10.jpg",num:"33 photos",title:"Company's Conference Room"},
        {src:"../../src/images/gallery-2.jpg",num:"22 photos",title:"Timer starts now!"},
        {src:"../../src/images/gallery-3.jpg",num:"16 photos",title:"Beautiful sunset"},
        {src:"../../src/images/gallery-6.jpg",num:"33 photos",title:"Company's Conference Room"},
        {src:"../../src/images/gallery-5.jpg",num:"33 photos",title:"Company's Conference Room"},
        {src:"../../src/images/gallery-7.jpg",num:"88 photos",title:"Useful baskets"},
        {src:"../../src/images/gallery-8.jpg",num:"66 photos",title:"Skater man in the road"},
        {src:"../../src/images/gallery-4.jpg",num:"08 photos",title:"case-studies-sumary"},
        {src:"../../src/images/gallery-9.jpg",num:"16 photos",title:"Useful baskets"},
        {src:"../../src/images/gallery-12.jpg",num:"66 photos",title:"Skater man in the road"},
        {src:"../../src/images/gallery-11.jpg",num:"88 photos",title:"Useful baskets"}
    ];
    var start = req.query.start;
    var len = req.query.len;
    var result;
    var total = parseInt(start)+parseInt(len);
    if (start<data.length){
        result = data.slice(start,total);
    }
  res.send(result);

});



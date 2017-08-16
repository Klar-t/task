function setRouter(app){ 
 var router = app; 

//假设域名是localhost, 端口是8080

//更多详细使用方法参考 http://www.expressjs.com.cn/guide/routing.html

/**
 * 当 http://localhost:8080/getInfo 的GET请求到来时被下面匹配到进行处理
 * 发送JSON格式的响应数据 {name: 'ruoyu'}
 */
router.get('/getInfo', function(req, res) {
    var data=[
        {src:"../images/gallery-13.jpg",num:"16 photos",title:"Timer starts now"},
        {src:"../images/gallery-1.jpg",num:"14 photos",title:"Two Glas of Juice"},
        {src:"../images/gallery-10.jpg",num:"33 photos",title:"Company's Conference Room"},
        {src:"../images/gallery-2.jpg",num:"22 photos",title:"Timer starts now!"},
        {src:"../images/gallery-3.jpg",num:"16 photos",title:"Beautiful sunset"},
        {src:"../images/gallery-6.jpg",num:"33 photos",title:"Company's Conference Room"},
        {src:"../images/gallery-5.jpg",num:"33 photos",title:"Company's Conference Room"},
        {src:"../images/gallery-7.jpg",num:"88 photos",title:"Useful baskets"},
        {src:"../images/gallery-8.jpg",num:"66 photos",title:"Skater man in the road"},
        {src:"../images/gallery-4.jpg",num:"08 photos",title:"case-studies-sumary"},
        {src:"../images/gallery-9.jpg",num:"16 photos",title:"Useful baskets"},
        {src:"../images/gallery-12.jpg",num:"66 photos",title:"Skater man in the road"},
        {src:"../images/gallery-11.jpg",num:"88 photos",title:"Useful baskets"}


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



/**
 * 当 http://localhost:8080/getFriends 的GET请求到来时被下面匹配到进行处理
 * 通过req.query获取请求的参数对象 
 * 通过 req.send发送响应
 */
router.get('/getFriends', function(req, res) {
	var username = req.query.username // 通过 req.query获取请求参数
	var friends
  
  //根据请求参数mock数据
  switch (username){
  	case 'ruoyu':
  		friends = ['小米', '小刚']
  		break
  	case 'hunger':
  		friends = ['小谷', '小花']
  		break;
  	default:
  		friends = ['没有朋友']
  }
  res.send(friends)
})


/**
 * 当 http://localhost:8080/comment 的GET请求到来时被下面匹配到进行处理
 * 通过req.body获取post请求的参数对象 
 * 通过 req.send发送响应
 */
router.post('/comment', function(req, res) {
  console.log(req.body.comment) // 可通过req.body获取 post 提交的参数
  res.send({status: 'ok'})
})

/**
 * 使用 router.use可处理所有类型的请求
*/
router.use('/hello', (req, res)=>{
  res.send('world')
})


/**
 * 设置 header 可以处理跨域请求
*/
router.use('/hi', (req, res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send('world')
})

}
 module.exports.setRouter = setRouter
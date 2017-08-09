/**
 * Created by Liqiaomiao on 2017/7/24.
 */


app.get('/getNews', function(req, res){
     cb = req.query.time;
    	 res.send(cb);
})

app.get('/send', function(req, res){
    res.send({time:cb});
})


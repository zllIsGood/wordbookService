var express = require('express');
var app = express();
 
// app.use('/public', express.static('public'));
app.use( express.static('E:/izhou/wordbookService/'));   //静态文件
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

// //将静态文件目录设置为：项目根目录+/public
// app.use(express.static(__dirname + '/public'));
// //或者
// app.use(express.static(path.join(__dirname, 'public')));
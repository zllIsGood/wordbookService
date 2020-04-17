// GET 方法
// 以下实例演示了在表单中通过 GET 方法提交两个参数，我们可以使用 server.js 文件内的 process_get 路由器来处理输入：

// index.htm 文件代码：
// <html>
// <body>
// <form action="http://127.0.0.1:8081/process_get" method="GET">
// First Name: <input type="text" name="first_name">  <br>
 
// Last Name: <input type="text" name="last_name">
// <input type="submit" value="Submit">
// </form>
// </body>
// </html>

// server.js 文件代码：
var express = require('express');
var app = express();
 
app.use('/public', express.static('public'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
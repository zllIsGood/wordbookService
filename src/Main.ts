import { App } from "./App"
import { UserModel } from "./model/UserModel"

// app.use( express.static('E:/izhou/wordbookService/'));   //静态文件
App.ins().init([UserModel,])

var server = App.ins().app.listen(8081, function () {

  //   var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://127.0.0.1:%s", port)
  console.log("应用实例，访问地址为 http://192.168.0.247:%s", port)

})
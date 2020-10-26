var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var express = require('express');
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(express) {
        var _this = _super.call(this) || this;
        _this.app = express();
        return _this;
    }
    App.ins = function () {
        return _super.ins.call(this, express);
    };
    App.prototype.setStaticFile = function () {
        this.app.use(express.static('E:/izhou/wordbookService/')); //静态文件
    };
    App.prototype.appGet = function (models) {
        for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
            var m = models_1[_i];
            m.init();
        }
    };
    return App;
}(BaseClass));
var express = require('express');
// var app = express();
// app.use( express.static('E:/izhou/wordbookService/'));   //静态文件
App.ins().setStaticFile();
// //  主页输出 "Hello World"
// app.get('/', function (req, res) {
//    console.log("主页 GET 请求");
//    res.send('Hello GET');
// })
// //  POST 请求
// app.post('/', function (req, res) {
//    console.log("主页 POST 请求");
//    res.send('Hello POST');
// })
// //  /del_user 页面响应
// app.get('/del_user', function (req, res) {
//    console.log("/del_user 响应 DELETE 请求");
//    res.send('删除页面');
// })
// //  /list_user 页面 GET 请求
// app.get('/list_user', function (req, res) {
//    console.log("/list_user GET 请求");
//    res.send('用户列表页面');
// })
// // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
// app.get('/ab*cd', function(req, res) {   
//    console.log("/ab*cd GET 请求");
//    res.send('正则匹配');
// })
var server = App.ins().app.listen(8081, function () {
    //   var host = server.address().address
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://127.0.0.1:%s", port);
});
/**
 * Created by yangsong on 14/12/18.
 * 基类
 */
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    /**
     * 获取一个单例
     * @returns {any}
     */
    BaseClass.ins = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var Class = this;
        if (!Class._instance) {
            Class._instance = new (Class.bind.apply(Class, [void 0].concat(args)))();
        }
        return Class._instance;
    };
    BaseClass.del = function () {
        var Class = this;
        if (Class._instance) {
            Class._instance = null;
        }
    };
    return BaseClass;
}());
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        return _super.call(this) || this;
    }
    UserModel.ins = function () {
        return _super.ins.call(this);
    };
    UserModel.prototype.init = function (app) {
        //  主页输出 "Hello World"
        app.get('/', function (req, res) {
            console.log("主页 GET 请求");
            res.send('Hello GET');
        });
        //  POST 请求
        app.post('/', function (req, res) {
            console.log("主页 POST 请求");
            res.send('Hello POST');
        });
        //  /del_user 页面响应
        app.get('/del_user', function (req, res) {
            console.log("/del_user 响应 DELETE 请求");
            res.send('删除页面');
        });
        //  /list_user 页面 GET 请求
        app.get('/list_user', function (req, res) {
            console.log("/list_user GET 请求");
            res.send('用户列表页面');
        });
        // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
        app.get('/ab*cd', function (req, res) {
            console.log("/ab*cd GET 请求");
            res.send('正则匹配');
        });
    };
    return UserModel;
}(BaseClass));
//# sourceMappingURL=main.js.map
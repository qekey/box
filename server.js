/**
 * server层
 * 页面数据记录以及数据展现的接口
 */

//调用了哪些模块和文件
var express = require('express')
var app = express();
var path = require('path');
var c = require('./config/config');
var log = eval("c.config." + c.config.config + ".log");
var async = require('async');

var ic360 = require('./model/ic360/main');

//初始化定义
app.configure(function() {
	app.set('views', __dirname + '/ic_public');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('waterbear'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.errorHandler());
});
app.use(express.static(path.join(__dirname, 'ic_public')));
//app.use(express.static(path.join(__dirname, 'manager')));
app.use(express.cookieParser('waterbearcookie'));
app.use(express.session({
	cookie: {
		maxAge: 2 * 60 * 1000
	},
	secret: "waterbearsecretkey"
}));

try {
	ic360(app);
} catch (e) {
	log.error(e);
}
app.listen(process.env.port || 18080);
console.log(process.env.port || 18080);
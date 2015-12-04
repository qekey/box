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
var box = require('./controler/box');
var markdown = require( "markdown" ).markdown;
var rf=require("fs");  
//初始化定义
app.configure(function() {
	app.set('views', __dirname + '/ejs_public');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('zuaa'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.errorHandler());
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser('box'));
app.use(express.session({
	cookie: {
		maxAge: 2 * 60 * 1000
	},
	secret: "zuaasecretkey"
}));


app.get('/:p1', function(request, response) {  
	m(request.params.p1,request.params.p1,response)
});
app.get('/:p2/:p1', function(request, response) {  
	m(request.params.p2+"/"+request.params.p1,request.params.p1,response)
});
app.get('/:p3/:p2/:p1', function(request, response) {  
	m(request.params.p3+"/"+request.params.p2+"/"+request.params.p1,request.params.p1,response)
});
app.get('/:p4/:p3/:p2/:p1', function(request, response) {  
	m(request.params.p4+"/"+request.params.p3+"/"+request.params.p2+"/"+request.params.p1,request.params.p1,response)
});
app.get('/:p5/:p4/:p3/:p2/:p1', function(request, response) {  
	m(request.params.p5+"/"+request.params.p4+"/"+request.params.p3+"/"+request.params.p2+"/"+request.params.p1,request.params.p1,response)
});
function m(path,title,response){
	log.debug('hi markdown, i am here  %s.',__dirname); 
	var data=rf.readFileSync(__dirname+"/mrakdown/"+path+".md","utf-8");  
	console.log(data);  
	var t=getHtmlTemplate().toString();
	console.log(t)
	data=markdown.toHTML( data ) 
	t=t.toString();
	t=t.replace('mkTitle', title)
	t=t.replace('mkContent', data)
	response.send(t);
}


function getHtmlTemplate(){ 
	return rf.readFileSync(__dirname+"/mrakdown/template.html","utf-8");
}


app.listen(process.env.port || 18080);
console.log(process.env.port || 18080);
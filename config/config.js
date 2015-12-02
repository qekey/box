var Log = require('log');
var express = require('express')
var path = require('path');
var util = require('util')

/**
 *为了减少 express 和path的 初始化  （var **** = require(××××)）;添加这个setpath方法:
 */
exports.setpath = function(app, name) {
	app.use(express.static(path.join(__dirname, name)));
}
exports.t = t;
exports.url = {
	index: "/welcome",
	login: "/login",
	"welcome": "/welcome",
	"userlogin": "/user/login",
	"reset-password": "", //TODO
	"MyAccount": "", //TODO
	"userloginout": "/user/loginout"
}
exports.inc = {
	head: function() { 
		file2sdtring()
	},
	foot: "",
	sidebar: ""
}
exports.msg = {
	sitename: "水熊统计",
	title: "weaterBear",
	author: "水熊",
	url: {
		index: "/welcome",
		login: "/login"
	}
}

exports.config = {
	config: "develop",
	develop: {
		mysql: {
			username: "zuaa",
			password: "aaaaaaaa",
			db_host: "rdsypbaeq55wzj2hugt9.mysql.rds.aliyuncs.com",
			db_port: 3306,
			db_name: "search"
		},
		pg: "postgres://zuaa:aaaaaaaa@127.0.0.1/pm" ,
		redis: "180.76.130.52",
		log: new Log('debug')
	}
}

function t(path, filename, data, response) {
	response.writeHead(200, {
		"Content-Type": "text/html"
	})
	try {
		mu.root = __dirname + path
		var stream = mu.compileAndRender(filename, data);
		util.pump(stream, response);
	} catch (e) {
		response.send("something is error");
	}

}
/**
 * 如果这里是同步执行的才算是完美的 TODO
 * 或者每次启动服务，这里就将所有的模板内容读取到内存中。
 * @param {Object} path
 * @param {Object} filename
 * @param {Object} data
 * @param {Object} cb
 */
function file2sdtring(path, filename, data,cb) {
	mu.root = __dirname + path
	mu.compileAndRender(filename, data)
		.on('data', function(data) {
			return (data.toString());
		});
}




///////////
Date.prototype.format =function(format)
{
var o = {
"M+" : this.getMonth()+1, //month
"d+" : this.getDate(), //day
"h+" : this.getHours(), //hour
"m+" : this.getMinutes(), //minute
"s+" : this.getSeconds(), //second
"q+" : Math.floor((this.getMonth()+3)/3), //quarter
"S" : this.getMilliseconds() //millisecond
}
if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
(this.getFullYear()+"").substr(4- RegExp.$1.length));
for(var k in o)if(new RegExp("("+ k +")").test(format))
format = format.replace(RegExp.$1,
RegExp.$1.length==1? o[k] :
("00"+ o[k]).substr((""+ o[k]).length));
return format;
}
Date.prototype.yesterday=function(yesterday){
	var d=new Date();
	var y=d.getYear()+1900;
	var m=d.getMonth();
	var dd=d.getDate(); 
	return new Date(y,m-1,dd);
}
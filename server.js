
//调用了哪些模块和文件
var express = require('express');
var app = express();
var path = require('path');
var c = require('./config/config');
var log = eval("c.config." + c.config.config + ".log");
var box = require('./controler/box');
 

//初始化定义
app.configure(function () { 
    app.set('views', __dirname + '/ejs_public');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('waterbear'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.errorHandler());
      
});
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'manager')));
app.use(express.cookieParser('box'));
app.use(express.session({
    cookie: {
        maxAge: 2 * 60 * 1000
    },
    secret: "waterbearsecretkey"
}));


try {
    box(app);
} catch (e) {
    log.error(e);
}
 

app.listen(process.env.port || 18080);
console.log(process.env.port || 18080);
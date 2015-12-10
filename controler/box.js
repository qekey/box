var c = require('../config/config');
var log = eval("c.config." + c.config.config + ".log"); 
var mfs = require('../data/mfs');
module.exports = function(app) {
	 
		app.get('/', function(request, response) {  
			log.debug('hi /, i am here  %s.',app);
			response.render('niu88.ejs', {"mfses":mfs.list});
		});

		app.get('/updateLog', function(request, response) {  
			log.debug('hi updateLog, i am here  %s.',app);
			response.render('index.ejs', {"mfses":mfs.list});
		});
		app.get('/mainAction', function(request, response) {  
			log.debug('hi mainAction, i am here  %s.',app);
			response.render('index.ejs', {"mfses":mfs.list});
		});
		app.get('/caidana', function(request, response) {  
			log.debug('hi caidana, i am here  %s.',app);
			response.render('index.ejs', {"mfses":mfs.list});
		}); 
}
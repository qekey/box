var c = require('../config/config');
var log = eval("c.config." + c.config.config + ".log"); 
var mfs = require('../data/mfs');
module.exports = function(app) {
	try {
		app.get('/', function(request, response) {  
			log.debug('hi debug, i am here  %s.',app);
			response.render('index.ejs', {"mfses":mfs.list});
		});
	} catch (e) {
		console.log(e)
	} 
}
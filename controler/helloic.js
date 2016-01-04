var c = require('../config/config');
var log = eval("c.config." + c.config.config + ".log");
var octopart = require("octopart");
octopart.apikey = '8270d619';
module.exports = function(app) {
	app.get('/', function(request, response) {
		log.debug('hi /, i am here  %s.', app);
		response.render('helloic/index.ejs', {});
	});
	app.get('/star', function(request, response) {
		log.debug('hi /star, i am star    %s.', app);
		response.render('helloic/index.ejs', {});
	});
	app.get('/search', function(request, response) {
		log.debug('hi /search:', request.query.k);
		var queries = [{
			reference: '1',
			mpn: request.query.k
		},  ];
		//octopart.parts.match
		octopart.parts.search(request.query.k, {
			exact_only: true,
			 // show: ['uid', 'mpn', 'manufacturer']
		}).success(function(body) {
			console.log("Result",  body);
			// for (var i = 0; i < body.results.length; i++) {
			// 	console.log("Result", i, body.results[i].items);
			// }
			response.render('helloic/search.ejs', {
				"body": body,
				"k":request.query.k
			});
		}).failure(function(err) {
			console.log("Ooops....", err);
		});

	});
};
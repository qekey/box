
var octopart = require("octopart");

octopart.apikey = '8270d619';

var queries = [
    {reference: '1', mpn: 'SN74S74N'},
    {reference: '2', mpn: 'CRCW060310K0FKEA'},
];

octopart.parts.match(queries, {
    exact_only: true,
    show: ['uid','mpn','manufacturer']
}).success(function(body) {
    for(var i=0;i<body.results.length;i++) {
        console.log("Result", i, body.results[i].items);
    }
}).failure(function(err) {
    console.log("Ooops....", err);
});
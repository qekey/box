
var rf=require("fs");  
var markdown = require( "markdown" ).markdown;
//console.log( markdown.toHTML( "Hello *World*!" ) );

var data=rf.readFileSync("c:/temp/markdown.md","utf-8");  
console.log(data); 
console.log(markdown.toHTML( data ))
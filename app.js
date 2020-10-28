
var express = require("express");
var app = express();
const path = require('path');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// app.set('views', path.join(__dirname, '/projects'));
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.render("home.html");	
})


app.get("/covidworld",function(req,res){
	res.render("covidworld.html");
})


app.get("/covidstate",function(req,res){
	res.render("covidstate.html");
})


app.get("/colorgame",function(req,res){
	res.render("colorgame.html");
})


app.get("/analogclock",function(req,res){
	res.render("analogclock.html");
})


app.get("/digitalclock",function(req,res){
	res.render("digitalclock.html");
})


app.get("/weather",function(req,res){
	res.render("weather.html");
})

app.listen(process.env.PORT || 80, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
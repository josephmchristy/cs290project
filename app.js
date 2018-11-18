var express = require("express");

var app = express();
var handlebars = require("express-handlebars").create({defaultLayout: 
"main"});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set('port', 3000);

app.get("/", function(req,res){
  res.render("home");
});

app.get("/research", function(req,res){
  res.render("research");
});

app.get("/members", function(req,res){
	res.render("members");
});

app.get("/contact", function(req,res){
  res.render("contact");
});

app.post("/contact", function(req,res){
  var context = {};
  console.log("Thank you for your comment!");
  context.name = req.body.name;
  context.comment = req.body.comment;
  res.render("comment", context);
});

app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express started on localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
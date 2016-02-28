/*
URL: http://52.27.188.34:3030/table
Please note that the table can be reset using a button on the above page.
It can also be reset by visiting http://52.27.188.34:3030/reset-table
*/

var request = require('request');
var express = require('express');
var mysql = require('mysql');
var pool = mysql.createPool({
	host 	:	'localhost',
	user 	:	'student',
	password:	'default',
	database:	'student'
});
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var session= require('express-session');
var bodyParser = require('body-parser');
module.exports.pool = pool;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3030);

//Reset table via button on the page.
app.post('/reset-shelter-table',function(req,res,next){
  var context = {};
  pool.query("DROP TABLE IF EXISTS xxxx", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE `shelter` ("+
    "`idShelter` int NOT NULL AUTO_INCREMENT,"+
    "`shelterName` varchar(45) NOT NULL,"+
    "`addressLine1` varchar(45) DEFAULT NULL,"+
    "`addressLine2` varchar(45) DEFAULT NULL,"+
    "`city` varchar(45) DEFAULT NULL,"+
    "`state` varchar(45) DEFAULT NULL,"+
	"`postalCode` varchar(45) DEFAULT NULL,"+
	"`phone` varchar(45) DEFAULT NULL,"+
	"PRIMARY KEY (`idShelter`),"+
	") ENGINE = InnoDB;";
    pool.query(createString, function(err){
      context.results = "Table reset";
    })
  });
});

app.post('/reset-user-table',function(req,res,next){
  var context = {};
  pool.query("DROP TABLE IF EXISTS xxxx", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE `user` ("+
    "`idUser` int NOT NULL AUTO_INCREMENT,"+
    "`userLastName` varchar(45) NOT NULL,"+
    "`userFirstName` varchar(45) DEFAULT NULL,"+
    "`userEmail` varchar(255) DEFAULT NULL,"+
    "`userPassword` varchar(255) NOT NULL,"+
    "`shelterID` int NOT NULL,"+
	"PRIMARY KEY (`idUser`),"+
	"FOREIGN KEY (`shelterID`) REFERENCES `shelter` (`idShelter`)"+
	"ON DELETE SET NULL ON UPDATE CASCADE"+
	") ENGINE = InnoDB;";
    pool.query(createString, function(err){
      context.results = "Table reset";
    })
  });
});

app.post('/reset-modules-table',function(req,res,next){
  var context = {};
  pool.query("DROP TABLE IF EXISTS xxxx", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE `modules` ("+
    "`idModule` int NOT NULL AUTO_INCREMENT,"+
    "`moduleName` varchar(255) NOT NULL,"+
    "`LinkToModulePage` varchar(255),"+
    "`ModuleDescription` varchar(255),"+
    "`ModuleVideo` varchar(255),"+
	"`AddedDate` date,"
    "PRIMARY KEY (`idModule`),"+
	") ENGINE = InnoDB;";
    pool.query(createString, function(err){
      context.results = "Table reset";
    })
  });
});

pool.query("INSERT INTO modules (`moduleName`)"+
	"VALUES (value1)",
	["How to be nice"],
	function(err){
      console.log("Could not add to module");
});

var trainingModules = require('./controllers/trainingModules.js');
app.use('/training-modules', trainingModules);

app.get('/', function(req, res, next){
	var context = {
        homeActive: true
    };
	res.render('home',context);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

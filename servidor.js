var express = require("express");
var app = express();
var path = require("path");

//view engine setup
app.set('views', 'gh-pages');
app.set('view engine', 'ejs');

app.use(express.static('gh-pages'));

app.get('/', function (req, res) {
    res.render('index');
    res.end();
});

var server = app.listen((process.env.PORT || 8080), function(){
        var host = server.address().address;
        var port = server.address().port;
        
        console.log('Listening to http://%s:%s', host, port);
    
})
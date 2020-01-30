var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.set('view engine', 'ejs');
app.set('views', '.');

app.disable('etag');

app.use(cookieParser());

app.use(express.urlencoded({
    extended: true
}));

app.use("/", (req, res) => {
    var cookieValue;
    if (!req.cookies.cookie) {
        cookieValue = new Date().toString();
        res.cookie('cookie', cookieValue, { maxAge: 3000});
    } else {
        cookieValue = req.cookies.cookie;
    }
    res.render("index", { cookieValue: cookieValue } );
});

http.createServer(app).listen(3000);
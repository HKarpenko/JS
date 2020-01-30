var http = require('http');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', '.');

app.get('/', (req, res) => {
    var radio = {
        name: 'radio',
        options: [
            { value : 1, text : 'element 1' },
            { value : 2, text : 'element 2' },
            { value : 3, text : 'element 3' }
        ]
    };
    res.render('log', { radio });
});
http.createServer(app).listen(3000); 
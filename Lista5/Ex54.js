var http = require('http');
var express = require('express');
var app = express();

let state = {
    name : "name",
    surname : "surname",
    subject : "subject",
    results : []
}

app.set('view engine', 'ejs');
app.set('views', '.');

app.use(express.urlencoded({extended:true}));

app.get( '/', (req, res) => { 
    res.render('index', {name:'', surname:'', subject:'', res:''});
});

app.post('/', (req, res) => {
    var name = req.body.name;
    var surname = req.body.surname;
    var subject = req.body.subject;
    var results = req.body.res;
    if(name=='' || surname==''||subject=='')
        res.render('index', {name:'', surname:'', subject:'', res:''});
    else{
        state.name = name;
        state.surname = surname;
        state.subject = subject;
        state.results=[];
        for(i=0;i<10;i++){
            if(results[i]=='')
                state.results.push(0);
            else
                state.results.push(Number(results[i]));
        }
        res.send(state);
    }
});
app.get('/print', (req, res) => { 
    res.send(state);
});


http.createServer(app).listen(3000);
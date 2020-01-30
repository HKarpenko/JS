var http = require('http');
var express = require('express');
var app = express();

let state = {
    name : "name",
    surname : "surname",
    subject : "subject",
    results : []
}
states = [];
var len=0;

app.set('view engine', 'ejs');
app.set('views', '.');

app.use(express.urlencoded({extended:true}));

app.get( '/', (req, res) => { 
    res.render('ind', {name:'', surname:'', subject:'', res:''});
});

app.post('/', (req, res) => {
    var name = req.body.name;
    var surname = req.body.surname;
    var subject = req.body.subject;
    var results = req.body.res;
    if(name=='' || surname==''||subject=='')
        res.render('ind', {name:'', surname:'', subject:'', res:''});
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
        states.push(state);
        len++;
        res.redirect('/print/<%=len-1%>');
    }
});

app.get('/print/:id', (req, res) => { 
    res.send(states[req.params.id]);
});


http.createServer(app).listen(3000);
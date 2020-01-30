var http = require('http');
var express = require('express');
var multer = require('multer');

var app = express();

app.set('view engine', 'ejs');
app.set('views', '.');

app.use(express.urlencoded({
    extended: true 
}));

var multerStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '.');
    },
    filename: function (req, file, callback) {
        callback(null, "Downloaded " + file.originalname);
    }
})

var multerUpload = multer({ storage: multerStorage });

app.get('/', function(req, res){
    var uploadStatus = req.app.locals.uploadStatus;
    res.render('upload.ejs',{
        title: 'File upload using multer',
        uploadStatus : uploadStatus
    })
});

app.post("/singleFile", multerUpload.single('singleFile'), function(req, res) {
    const file = req.file
    if (!file) {
        return res.end("Please choose file to upload!");
    }
    req.app.locals.uploadStatus = true;
    res.redirect('/');
});

http.createServer(app).listen(3000);
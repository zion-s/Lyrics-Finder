var request = require('request');
var express = require('express');
var app = express();
app.set("view engine", "ejs");


app.get('/', function(req,res){
    res.render("search");
});

app.get('/result', function(req,res){
    let artist = req.query.artistName;
    let song = req.query.songName;
    let url = 'https://api.lyrics.ovh/v1/'+artist+'/'+song;
    request(url, function (error, response, body) {
     if(!error && response.statusCode==200)
     {
        let data = JSON.parse(body);
        //res.send(result.lyrics);
        res.render("result", {data: data});
     }
 });
});


app.listen(4000, '127.0.0.1', ()=>{
    console.log("Lyrics Finder is running!")
});
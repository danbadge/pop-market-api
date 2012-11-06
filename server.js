var express = require('express'),
    app = express(),
    db = require('./db.js'),
    artist = require('./models/artist.js');
    //share = require('./models/share.js');
    
//app.use(express.bodyParser());

app.get('/', function (req, res) {
    res.send('HELLO', 200);
});

app.get('/artist/:id', function(req, res) {
    var result = db.load(req.params.id);
    result ? res.send(result)
           : res.send(404);
});

app.get('/artists', function(req, res) {
    var result = db.loadAll();
    result ? res.send(result)
           : res.send(404);
});

app.listen(process.env.port || 3000);

// test data
db.save(new artist(
    { title: 'Jake Bugg' }, 
    '1'
));
var express = require('express'),
    app = express(),
    db = require('./db.js'),
    artist = require('./models/artist.js');
    
app.use(express.bodyParser());

app.get('/artists/:id', function (req, res) {
    console.log(req.path);
    db.findById(req.params.id, function (artist) {
        artist ?  res.json(artist) : res.send(404);
    });
});

/* should this be a put */
app.post('/artists/add', function (req, res) {
    console.log(req.path);
    if (!req.body) res.send('Please provide post body', 500);

    var newArtist = new artist(req.body);
    db.insert(newArtist, function (artist) {
        artist ? res.json(artist) : res.send(500);
    });
});

app.del('/artists/:id', function (req, res) {
    console.log(req.path);
    db.remove(req.params.id);
    res.send(200);
});

app.get('/artists', function (req, res) {
    console.log(req.path);
    db.listAll(function (items) {
        items ? res.json(items) : res.send('No items could be retrieved', 404);
    });
});

app.post('/artists/:id/shares/buy', function (req, res) {
    console.log(req.path);
    db.findById(req.params.id, function (artist) {
        if (artist) {
            artist.share.available -= req.body.amount;
            db.update(artist);
            res.json(artist);
        } else {
            res.send(404);
        } 
    });
});

app.listen(process.env.port || 3000);
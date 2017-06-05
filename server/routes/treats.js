var express = require("express");
var router = express.Router();
var pg = require("pg");

var config = {
    database: "chi", // name of your database
    host: "localhost", //where is your database?
    port: 5432, // port for the database
    max: 10, // how many connections at one time
    idleTimeoutMillis: 30000 //30 seconds to connect
};

var pool = new pg.Pool(config);
// GET /treats
router.get('/', function(req, res) {
    pool.connect(function(err, client, done) {
        if (err) {
            console.log('Error connecting to the DB', err);
            res.sendStatus(500);
            done();
            return;
        }
        /** ---- YOUR CODE BELOW ---- **/
        // Add pg and pSQL code here to get treats from the treatDB
        else {
            client.query('SELECT * FROM treats', function(queryError, result) {
                done();
                if (queryError) {
                    console.log('Error making query!');
                    res.send(500);
                } else {
                    res.send(result.rows);
                    // console.log(result.rows);
                }
            });
        }
    });
});

/** ---- YOUR CODE BELOW ---- **/

// POST /treats
router.post('/', function(req, res) {
    console.log(req.body);
    var name = req.body.name;
    var description = req.body.description;
    var pic = req.body.pic;

    pool.connect(function(err, client, done) {
        if (err) {
            console.log("Error connecting to database!");
            res.send(500);
            done();
            return;
        } else {
            client.query('INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3)', [name, description, pic],
                function(queryError, result) {
                    done();
                    if (queryError) {
                        console.log('Error making query!');
                        res.send(500);
                    } else {
                        res.send(200);
                    }
                });
        }
    });
});


// PUT /treats/<id>
router.put('/:id', function(req, res) {
    var description = req.body.description;
    var id = req.params.id;
    console.log(id + description);

    pool.connect(function(err, client, done) {
        if (err) {
            console.log("Error connecting to database!");
            res.send(500);
            done();
            return;
        } else {
            client.query('UPDATE treats SET description = $1 WHERE id = $2', [description, id],
                function(queryError, result) {
                    done();
                    if (queryError) {
                        console.log('Error making query!');
                        res.send(500);
                    } else {
                        res.send(200);
                    }
                });
        }
    });
});
// DELETE /treats/<id>
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);

    pool.connect(function(errorConnectingToDatabase, db, done) {
        if (errorConnectingToDatabase) {
            console.log("Error connecting to database!");
            res.send(500);
        } else {
            db.query('DELETE FROM "treats" WHERE "id" = $1', [id],
                function(queryError, result) {
                    done();
                    if (queryError) {
                        console.log('Error making query!');
                        res.send(500);
                    } else {
                        res.send(200);
                    }
                });
        }
    });
});
/** ---- DO NOT MODIFY BELOW ---- **/
module.exports = router;

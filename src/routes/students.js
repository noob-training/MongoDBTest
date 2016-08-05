var router = require('express').Router();
var dbhelper = require('../utilities/dbhelper');
//var db = dbhelper.db;

//http://localhost:3000/students
router.route('/')
    .get(function (req, res) {
        var db = dbhelper.db;
        var collection = db.collection('studentCollection');

        collection.find().toArray(function (err, data) {
            if (err) {
                console.error(JSON.stringify(err));
                res.render('students');
            } else {
                console.log("Data = " + JSON.stringify(data));
                res.render('students', { students: data });
            }
        });


    });
//http://localhost:3000/students/add
router.route('/add')
    .get(function (req, res) {
        res.render('addstudent');
    })
    .post(function (req, res) {
        var params = {
            name: req.body.name,
            course: req.body.course,
            duration: req.body.duration
        };

        console.log(req.body);

        var db = dbhelper.db;
        var collection = db.collection('studentCollection');
        collection.insertOne(params, function (err, result) {
            if (err) {
                console.error(JSON.stringify(err));
                res.redirect('/students/add');
            } else {
                console.log(JSON.stringify(result));
                res.redirect('/students');
            }
        });
    });

router.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;//gets parameter id from url(GET method)
        var db = dbhelper.db; //gets db from dbhelper
        var collection = db.collection('studentCollection');//gets the colelction from database
        
        var objId = new dbhelper.ObjectID(id); //convert string id to ObjectID

        //finds one record where _id matches our objectID
        collection.findOne({ _id: objId }, function (err, data) {
            res.render('student', data); //pass the student data to student.hbs
        });

    });

module.exports = router;

// app.get('/students', function (req, res) {
//     res.render('student');
// });
// app.get('/students/add', function (req, res) {
//     res.render('student');
// });
// app.get('/students/delete', function (req, res) {
//     res.render('student');
// });
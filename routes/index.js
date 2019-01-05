var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET projects page */
router.get('/about', function(req, res) {
	res.render('about', { title: 'About' });
});

/* GET projects page */
router.get('/services', function(req, res) {
	res.render('services', { title: 'Services' });
});

/* GET Contact page */
router.get('/contact', function(req, res) {
	res.render('contact', { title: 'Contact' });
});

/* GET Hello World page
router.get('/helloworld', function(req, res) {
	res.render('helloworld', { title: 'Hello, World!' });
});
*/

/* GET Userlist page.
router.get('/userlist', function(req,res) {
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		res.render('userlist', {
			"userlist" : docs,
			title: "User List"
		});
	});
});
*/

/* GET New User page.
router.get('/newuser', function(req, res) {
	res.render('newuser', { title: 'Add New User' });
});
*/

/*
// POST to Add User Service
router.post('/adduser', function(req, res) {

	// Set our inter DB variable
	var db = req.db;

	// Get our form values. These rely on the "name" attributes
	var userName = req.body.username;
	var userEmail = req.body.useremail;

	// Set our collection
	var collection = db.get('usercollection');

	// submit to the DB
	collection.insert({
		"username" : userName,
		"email" : userEmail
	}, function (err, doc) {
		if (err) {
			// If it failed return error
			res.send("There was a problem adding the information to the database.");
		}
		else {
			// And forward to the success page
			res.redirect("userlist");
		}
	});
});
*/
module.exports = router;

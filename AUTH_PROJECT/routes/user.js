const express = require("express");

const router = express.Router()


//List the route

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register',  (req, res) => res.render('register'));


//export the module
module.exports = router
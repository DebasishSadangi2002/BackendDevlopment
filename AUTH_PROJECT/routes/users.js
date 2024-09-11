const express = require("express");

const router = express.Router()


//List the route
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register',  (req, res) => res.render('register'));

//Handle Register
router.post('/register', (req, res) => {
    // Check if req.body is undefined
    const{ name, email, passwrod, password2} = req.body
    res.send("afkusgyf")
    
});





//export the module
module.exports = router
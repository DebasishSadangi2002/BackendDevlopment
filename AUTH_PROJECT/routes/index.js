const express = require("express");

const router = express.Router()


//List the route

router.get('/', (req, res) =>{
    res.render('welcome')
})


//export the module
module.exports = router
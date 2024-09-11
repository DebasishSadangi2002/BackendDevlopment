const express = require("express");

const router = express.Router()


//List the route

router.get('/', (req, res) =>{
    res.send('THIS is index page')
})


//export the module
module.exports = router
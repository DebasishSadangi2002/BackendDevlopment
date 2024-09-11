const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose')


//DB Config
const db = require('./src/databases')

db()

//Listing all Routes
// app.get('/', index);
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Body Parser

// Middleware to parse form data
app.use(express.urlencoded({ extended: true })); // For form-encoded data
app.use(express.json());



const PORT = process.env.PORT || 3000



app.listen(PORT, console.log(`Server started on the PORT ${PORT}`)
)
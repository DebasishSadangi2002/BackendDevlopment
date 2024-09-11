const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');




//Listing all Routes
// app.get('/', index);
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/user'))

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');





const PORT = process.env.PORT || 3000



app.listen(PORT, console.log(`Server started on the PORT ${PORT}`)
)
const express = require('express')
const app = express()
const index = require('./routes/index')
const u = require('./routes/user')



//Listing all Routes
// app.get('/', index);
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/user'))







const PORT = process.env.PORT || 3000



app.listen(PORT, console.log(`Server started on the PORT ${PORT}`)
)
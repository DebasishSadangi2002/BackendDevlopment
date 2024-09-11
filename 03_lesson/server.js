const express = require('express')
const app = express();
const path = require('path')
const PORT = 3000



app.get('/',(req, res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})



app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

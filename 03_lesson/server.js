const express = require('express')
const app = express();
const path = require('path')
const PORT = 3000



app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/new-page', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get('/*', (req, res) =>{
    console.log("Appemted to the unknown page");
    
    res.redirect('/new-page')
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

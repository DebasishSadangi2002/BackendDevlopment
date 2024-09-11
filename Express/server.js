const express =  require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname) + '/index.html')
})

app.get('/about',(req, res) =>{
    res.sendFile(path.resolve(__dirname) + '/about.html')
})
// to download a file
app.get('/download', (req,res) =>{
    res.download(path.resolve(__dirname) + '/about.html')
})





app.listen(PORT, ()=>{
    console.log("App started");
    
})
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(`public`))
app.use(express.json())

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(5000, () => console.log(`server running on 5000`))
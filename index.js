// importing packages
const express = require('express')
const fs = require('fs')

// define essenital varibles
let jsonData = JSON.parse(fs.readFileSync('data.json'));
const app = express();
const port = 3000;

// server methods
app.get('/orders', (req, res) => {
    res.send(jsonData)
})

app.listen(port, () => {
    console.log(`Your server is running on  http://localhost:${port}/`)
})
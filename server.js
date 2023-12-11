const express = require('express')
const app = express()
const portNumber = 5001

app.get('/', (req, res) => {
    res.status(200).send("<h1>THIS is running in docker</h1>")
})

app.listen(portNumber, () => {
    console.log("Listening on docker port " + portNumber + "...");
})
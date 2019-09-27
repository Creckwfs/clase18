const express = require('express');
const app = express()
const router = express.Router()

app.use(express.static('public'))

app.listen(9000, () => {
    console.log("el servidor esta escuhando por el puerto 9000..")
})
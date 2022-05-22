const express = require("express")

const config = require('../config')
const user = require('./components/user/network')

const app = express()

app.use("/api/user", user)

app.listen(config.api.port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${config.api.port}`)
})
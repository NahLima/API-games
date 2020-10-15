const express = require("express")
const app = express()
const router = require("./route/gameRoute")

app.use(express.json())
app.use("/", router)

module.exports = app
const express = require("express")
const cors = require("cors")

const routes = require('./routes')

const app = express()
const PORT = 5001

app.use(cors())
app.use(routes)

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(PORT)
console.log("Server running on port " + PORT)
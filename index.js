require("dotenv").config()

const express = require("express")
const cors = require("cors")

const messagesRoutes = require("./routes/messages.routes.js")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/messages', messagesRoutes)


const port = process.env.PORT || 6000

app.listen(port, () => {
  console.log('app listening on port: ',port);
})
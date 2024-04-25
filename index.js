const express = require("express")
const dotenv = require("dotenv")
const app = express()
const connectDb = require("./config/database.js")
const userRoute = require("./routes/userRoutes.js")
const bookRoute = require("./routes/bookRoutes.js")
dotenv.config()

connectDb()
app.use(express.json())

const port = process.env.port || 3000
app.use(userRoute)
app.use(bookRoute)


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
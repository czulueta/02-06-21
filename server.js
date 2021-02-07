const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:/27017/tshirtsDB",
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => "connected to the database")

app.use("/tshirts", require("./routes/tshirtRouter.js"))
app.use("/music", require("./routes/musicRouter.js"))
app.use("/shop", require("./routes/shopRouter.js"))

app.use((err, req, res, next) => {
    if(err)
    res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("successfully running on port 9000")
})
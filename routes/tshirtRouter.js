const express = require("express")
const tshirtRouter = express.Router()
const Tshirt = require("../models/tshirt.js")

// get tshirts
tshirtRouter.get("/", (req, res, next) => {
    Tshirt.find((err, tshirts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(tshirts)
    })
})
// post tshirt
tshirtRouter.post("/", (req, res, next) => {
    const newTshirt = new Tshirt(req.body)
    newTshirt.save((err, savedTshirt) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTshirt)
    })
})
module.exports = tshirtRouter
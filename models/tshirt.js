const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tshirtSchema = new Schema({
    tshirt: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("Tshirt", tshirtSchema)
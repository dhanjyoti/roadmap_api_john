const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
    title:String,
    status:String,
    votes:Number,
    date:String,
    message:String,
    author:String
})

module.exports = mongoose.model("card", cardSchema);
const mongoose = require("mongoose");


const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    date_naiss:{
        type: Date,
        required: true,
    },
    commentaire:{
        type: String
    },
    niveau:{
        type: Number,
        enum:[1,2,3],
        required: true
    }
})


module.exports = mongoose.model('person', personSchema);
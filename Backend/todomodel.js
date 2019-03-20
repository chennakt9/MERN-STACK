const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TodoSchema = new Schema({
    description:String,
    responsible:String,
    priority:String,
    completed:{
        type:String,
        default:'Not Completed'
    }
});

module.exports = mongoose.model('Todo',TodoSchema);
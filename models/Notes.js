const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema(
    {
        Title:{type: String},
        Description:{type:String},
    },
    {
        timeseries:true
    }
);

module.exports = mongoose.model('notes', notesSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username:{type: String},
        userphone:{type:String},
        password:{type:String}
    },
    {
        timeseries:true
    }
);

module.exports = mongoose.model('user', userSchema);

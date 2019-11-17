var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['United', 'Southwest', 'American']},
    flightNo: Number,
    departs: Date,
});

module.exports = mongoose.model('Flight', flightSchema);
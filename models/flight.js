var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['United', 'Southwest', 'American']},
    flightNo: {
        type: Number,
        min: 10,
        max: 9999}, 
    departs: {
        type: Date,
        default: function() {
            let today = new Date();
            return new Date(today.setFullYear(today.getFullYear() + 1));
        }}
});

module.exports = mongoose.model('Flight', flightSchema);
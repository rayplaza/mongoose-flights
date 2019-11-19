var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
   airport: {
       type: String,
       enum: ['AUS', 'DAL', 'LAX', 'SD']
   },
   arrival: Date, 
}, {
    timestamps: true
});


var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['United', 'Southwest', 'American']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    }, 
    departs: {
        type: Date,
        default: function() {
            let today = new Date();
            return new Date(today.setFullYear(today.getFullYear() + 1));
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SD']
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
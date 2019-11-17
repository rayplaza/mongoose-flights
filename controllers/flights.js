var Flight = require('../models/flight');


module.exports = {
    new: newFlight,
    create,
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights/new');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}


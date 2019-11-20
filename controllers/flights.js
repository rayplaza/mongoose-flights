var Flight = require('../models/flight');
var Ticket = require('../models/ticket')


module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err,tickets) {
            res.render('flights/show', { title: 'Detail List', flight, tickets});
        });
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights)
      res.render('flights/index', {flights});
    });
  }

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}


// Import in our db models
const db = require('../models');

module.exports = function(app) {

    // API Requests for /api/tables
    // Below code controls what happens when a request is made to /api/tables
  
    // GET Request
    // Responds with all the currently booked tables
    app.get('/api/product', function(req, res) {
      db.Table.findAll({}).then(function(rows) {
        res.json(rows)
      }).catch(function(error) {
        res.json({ error: error });
      });
    });
  
}
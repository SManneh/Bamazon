// Import in our db models
const db = require('../models');

module.exports = function(app) {

    // API Requests for /api/product
    // Below code controls what happens when a request is made to /api/products
  
    // GET Request
    // Responds with all the products
    app.get('/api/product', function(req, res) {
      db.Product.findAll({}).then(function(rows) {
          console.log(rows)
        res.json(rows)
      }).catch(function(error) {
        res.json({ error: error });
      });
    });
  
}
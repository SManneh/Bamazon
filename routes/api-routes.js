// Import in our db models
const db = require('../models');

module.exports = function(app) {

    // API Requests for /api/product
    // Below code controls what happens when a request is made to /api/products
  
    // GET Request
    // Responds with all the products
    app.get('/api/product', function(req, res) {
      db.Product.findAll({}).then(function(rows) {
         
        res.json(rows)
      }).catch(function(error) {
        res.json({ error: error });
      });
    });

    app.post('/api/product', function(req, res) {
        const product = req.body;
        db.Product.findAll({where: { id: product.id}})
        .then(function(data){
            console.log(data[0].dataValues);
            let item = data[0].dataValues;
            console.log(product.quantity);
            console.log(data.stock_quantity);
            if(parseInt(product.quantity) <= parseInt(item.stock_quantity)){
                let newQuantity = item.stock_quantity - product.quantity;
                db.Product.update({stock_quantity: newQuantity},{where: {id : product.id}})
                .then(function(data){
                    console.log(data, "data from update ");
                    res.send("Order Success");
                    $('#order-status').text("Order Successful")
                })
               
            }else {
                res.send("Out of Stock");
            }
            
        })

        
    });
  
}
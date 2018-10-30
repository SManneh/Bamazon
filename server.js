// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');

const app = express();

// Defines a PORT for the server to listen for requests
const PORT = 8080;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// -----------------

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Import Database Models
// =============================================================
const db = require('./models');
// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  console.log('Database is synced!');

  db.Product.create({
    product_name:"Brownie",
    department_name:"Lipstick",
    price:10,
    stock_quantity:10

  }).then(function(response){
    
  });


  db.Product.create({
    product_name:"Naked",
    department_name:"Lipstick",
    price:10,
    stock_quantity:10

  }).then(function(response){
    
  });

  db.Product.create({
    product_name:"Bare",
    department_name:"Lipstick",
    price:10,
    stock_quantity:10

  }).then(function(response){
   
  });

  db.Product.create({
    product_name:"Nubie",
    department_name:"Lipstick",
    price:10,
    stock_quantity:10

  }).then(function(response){
    
  });

  db.Product.create({
    product_name:"choco",
    department_name:"Lipstick",
    price:10,
    stock_quantity:10

  }).then(function(response){
    
  });

  db.Product.create({
    product_name:"Drama Queen",
    department_name:"Lashes",
    price:10,
    stock_quantity:10

  }).then(function(response){
   
  });

  db.Product.create({
    product_name:"Falsies",
    department_name:"Lashes",
    price:10,
    stock_quantity:10

  }).then(function(response){
    
  });

  db.Product.create({
    product_name:"Flirty",
    department_name:"Lashes",
    price:10,
    stock_quantity:10

  }).then(function(response){
   
  });

  db.Product.create({
    product_name:"HER-Story",
    department_name:"Lashes",
    price:10,
    stock_quantity:10

  }).then(function(response){
   
  });

  db.Product.create({
    product_name:"Diva",
    department_name:"Lashes",
    price:10,
    stock_quantity:10

  }).then(function(response){
   
  });


  // Starts our server on the predefined PORT
  // Only starts if the db successfully syncs
  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });

});
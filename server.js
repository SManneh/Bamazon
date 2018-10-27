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
    product_name:"Sainabou",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });


  db.Product.create({
    product_name:"Ruth",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });

  db.Product.create({
    product_name:"Ruth",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });

  db.Product.create({
    product_name:"Ruth",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });

  db.Product.create({
    product_name:"Ruth",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });

  db.Product.create({
    product_name:"Ruth",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });

  db.Product.create({
    product_name:"Ruth",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });

  db.Product.create({
    product_name:"Ruth",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });

  db.Product.create({
    product_name:"Ruth",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });

  db.Product.create({
    product_name:"Ruth",
    department_name:"Bartender",
    price:"1000",
    stock_quantity:1

  }).then(function(response){
    console.log(response);
  });


  // Starts our server on the predefined PORT
  // Only starts if the db successfully syncs
  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });

});
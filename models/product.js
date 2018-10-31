module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define('Product', {
      image: {
        type: DataTypes.STRING
      },
      product_name: {
        type: DataTypes.STRING
      },
      department_name: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.INTEGER
      },
      stock_quantity: {
          type: DataTypes.INTEGER
      }
    });
  
    return Product;
  }
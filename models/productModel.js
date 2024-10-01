// models/productModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../bin/DBconnection");


const config = require('./index');


const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Product model synchronized with the database.');
  })
  .catch(err => {
    console.error('Unable to sync with the database:', err);
  });

module.exports = Product;

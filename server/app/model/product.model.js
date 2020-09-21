module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('product', {
    name: {
      type: Sequelize.STRING
    },
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    }
  });
  Product.sync().then(() => {
    console.log('table created');
  });
  return Product;
};

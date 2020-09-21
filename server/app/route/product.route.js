module.exports = function (app) {
  const products = require('../controller/product.controller.js');
  // Create a new Book
  app.post('/api/products/create', products.create);

  // Retrieve all product
  app.get('/api/products', products.findAll);

  // Retrieve a single Book by Id
  app.get('/api/products/:productsId', products.findById);

  // Update a Book with Id
  app.put('/api/products/:productsId', products.update);

  // Delete a Book with Id
  app.delete('/api/products/:productsId', products.delete);
};

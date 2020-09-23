module.exports = function (app) {
  const products = require('../controller/product.controller.js');

  app.post('/api/catalogs/:catalogId/product', products.create);

  app.get('/api/catalogs/:catalogId/product', products.findAll);

  app.get('/api/products/:productId', products.findById);

  app.put('/api/products/:productId', products.update);

  app.delete('/api/products/:productId', products.delete);
};

module.exports = function (app) {
  const catalogs = require('../controller/catalog.controller.js');

  app.post('/api/catalogs/create', catalogs.create);

  app.get('/api/catalogs', catalogs.findAll);

  app.get('/api/catalogs/:catalogId', catalogs.findById);

  app.put('/api/catalogs/:catalogId', catalogs.update);

  app.delete('/api/catalogs/:catalogId', catalogs.delete);
};

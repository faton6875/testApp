const db = require('../config/db.config.js');
const Products = db.products;

exports.create = (req, res) => {
  Products.create({
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    catalogId: req.params.catalogId
  })
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

exports.findAll = (req, res) => {
  Products.findAll({ where: { catalogId: req.params.catalogId } })
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

exports.findById = (req, res) => {
  Products.findById(req.params.productId)
    .then((product) => {
      res.send(book);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

exports.update = (req, res) => {
  var book = req.body;
  const id = req.params.productId;
  Products.update(
    {
      name: req.body.name,
      brand: req.body.brand,
      model: req.body.model
    },
    {
      where: {
        id: req.params.productId
      }
    }
  )
    .then(() => {
      res.status(200).send(book);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.productId;
  Products.destroy({
    where: { id: id }
  })
    .then(() => {
      res.status(200).send('Book has been deleted!');
    })
    .catch((err) => {
      res.status(500).send('Fail to delete!');
    });
};

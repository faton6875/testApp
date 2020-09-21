const db = require('../config/db.config.js');
const Products = db.products;

// Post a Book
exports.create = (req, res) => {
  // Save Book to MySQL database
  Products.create({
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model
  })
    .then((book) => {
      // Send created book to client
      res.send(book);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

// Fetch all Products
exports.findAll = (req, res) => {
  Products.findAll()
    .then((Products) => {
      // Send all Products to Client
      res.send(Products);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

// Find a Customer by Id
exports.findById = (req, res) => {
  Products.findById(req.params.bookId)
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

// Update a Book
exports.update = (req, res) => {
  var book = req.body;
  const id = req.params.bookId;
  Products.update(
    {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      published: req.body.published
    },
    {
      where: {
        id: req.params.bookId
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

// Delete a Book by Id
exports.delete = (req, res) => {
  const id = req.params.bookId;
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

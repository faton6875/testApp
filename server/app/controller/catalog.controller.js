const db = require('../config/db.config.js');
const Catalogs = db.catalogs;

exports.create = (req, res) => {
  Catalogs.create({
    name: req.body.name,
    description: req.body.description
  })
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

exports.findAll = (req, res) => {
  Catalogs.findAll()
    .then((Catalogs) => {
      res.send(Catalogs);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

exports.findById = (req, res) => {
  Catalogs.findById(req.params.catalogId)
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

exports.update = (req, res) => {
  let catalog = req.body;
  const id = req.params.catalogId;
  console.log(req.params);
  Catalogs.update(
    {
      name: req.body.name,
      description: req.body.description
    },
    {
      where: {
        id: req.params.catalogId
      }
    }
  )
    .then(() => {
      res.status(200).send(catalog);
    })
    .catch((err) => {
      res.status(500).send('Error -> ' + err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.catalogId;
  Catalogs.destroy({
    where: { id: id }
  })
    .then(() => {
      res.status(200).send('Book has been deleted!');
    })
    .catch((err) => {
      res.status(500).send('Fail to delete!');
    });
};

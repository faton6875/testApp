module.exports = (sequelize, Sequelize) => {
  const Catalog = sequelize.define('catalog', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });
  Catalog.sync().then(() => {
    console.log('table created');
  });
  return Catalog;
};

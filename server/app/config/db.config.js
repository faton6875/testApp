const env = require('./env.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
sequelize
  .authenticate()
  .then(() => console.log('connected'))
  .catch((err) => console.log(err + 'error'));

db.products = require('../model/product.model.js')(sequelize, Sequelize);
db.catalogs = require('../model/catalog.model.js')(sequelize, Sequelize);

module.exports = db;

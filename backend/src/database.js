const config = require("./config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: 0,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Crear tablas si no existen
//db.user = require("./model/User")(sequelize, Sequelize);
//db.encuesta = require("./model/Encuesta")(sequelize, Sequelize);

//relaciones
// db.user.hasMany(db.encuesta, {as: "encuesta"})
// db.encuesta.belongsTo(db.user,{
//   foreignKey: "user_id",
//   as: "user"
// })


module.exports = db;

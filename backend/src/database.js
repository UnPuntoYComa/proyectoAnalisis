const config = require("./config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: 0,
  define:{
      freezeTableName: true, // nombre del 
      timestamps: false,
      underscored: true
  },
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
db.user = require("./model/User")(sequelize, Sequelize);
db.encuesta = require("./model/Encuesta")(sequelize, Sequelize);
db.pregunta = require("./model/Preguntas")(sequelize, Sequelize);

//relaciones
//usuario a encuesta
db.user.hasMany(db.encuesta,{as: "encuesta", foreignKey:"id_usuario"});  
 db.encuesta.belongsTo(db.user,{ as:"usuario",foreignKey : 'id_usuario'});
//encuesta a pregunta
db.encuesta.hasMany(db.pregunta,{as: "pregunta", foreignKey:"id_encuesta"});  
 db.pregunta.belongsTo(db.encuesta,{ as:"encuesta",foreignKey : 'id_encuesta'});

module.exports = db;
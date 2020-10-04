module.exports = (sequelize, Sequelize) => {
  const Encuesta = sequelize.define("encuesta", {
    id_encuesta: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },nombre_encuesta:{
      type:Sequelize.STRING,
    },fecha:{
      type: Sequelize.DATE,
    },descripcion:{
      type: Sequelize.STRING,
    },estado_encuesta:{
      type: Sequelize.INTEGER,
    },id_usuario:{
      type: Sequelize.INTEGER,
    },
  });
  return Encuesta;
};


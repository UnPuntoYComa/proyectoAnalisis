module.exports = (sequelize, Sequelize) => {
    const Encuesta = sequelize.define("opcion_respuesta", {
        id_opcion: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },texto: {
        type: Sequelize.STRING,
      },id_pregunta:{
        type:Sequelize.STRING,
      }
    });
    return Encuesta;
  };
  
  
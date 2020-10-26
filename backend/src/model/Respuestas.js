module.exports = (sequelize, Sequelize) => {
    const Encuesta = sequelize.define("respuesta_usuario", {
        id_respuesta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },usuario_id: {
        type: Sequelize.INTEGER,
      },res_texto:{
        type:Sequelize.STRING,
      },id_pregunta:{
        type: Sequelize.INTEGER,
      },
    });
    return Encuesta;
  };
  
  
module.exports = (sequelize, Sequelize) => {
    const Encuesta = sequelize.define("respuesta_usuario", {
        id_respuesta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },usuario_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },res_texto:{
        type:Sequelize.STRING,
      },res_fecha:{
        type: Sequelize.DATE,
      },id_pregunta:{
        type: Sequelize.INTEGER,
      },
    });
    return Encuesta;
  };
  
  
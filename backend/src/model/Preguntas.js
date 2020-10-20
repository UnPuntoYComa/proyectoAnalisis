module.exports = (sequelize, Sequelize) => {
    const Preguntas = sequelize.define("preguntas", {
      id_pregunta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },modo_respuesta:{
        type:Sequelize.STRING,
      },texto_pregunta:{
        type: Sequelize.STRING,
      },obligatorio:{
        type: Sequelize.STRING,
      },orden:{
        type: Sequelize.INTEGER,
      },id_encuesta:{
        type: Sequelize.INTEGER,
      },
    });
    return Preguntas;
  };
  
  
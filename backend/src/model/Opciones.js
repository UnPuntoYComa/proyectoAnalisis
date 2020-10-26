module.exports = (sequelize, Sequelize) => {
    const Opciones = sequelize.define("opcion_respuesta", {
        id_opcion: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },texto: {
        type: Sequelize.STRING,
      },id_pregunta:{
        type:Sequelize.INTEGER,
      }
    });
    return Opciones;
  };
  
  
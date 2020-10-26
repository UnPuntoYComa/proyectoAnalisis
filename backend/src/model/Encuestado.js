module.exports = (sequelize, Sequelize) => {
    const Encuestado = sequelize.define("encuestado", {
        id_encuestado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },res_fecha: {
        type: Sequelize.DATEONLY,
      },
    });
    return Encuestado;
  };
  
  
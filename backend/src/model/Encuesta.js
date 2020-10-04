module.exports = (sequelize, Sequelize) => {
  const Encuesta = sequelize.define("Encuesta", {
    name: {
      type: Sequelize.STRING,
    },
    id_encuesta: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
  });
  return Encuesta;
};

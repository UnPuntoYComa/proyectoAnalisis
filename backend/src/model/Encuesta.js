module.exports = (sequelize, Sequelize) => {
  const Encuesta = sequelize.define("encuesta", {
    name: {
      type: Sequelize.STRING,
    },
  });
  return Encuesta;
};


module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("usuario", {
    id_usuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    nombre: {
      type: Sequelize.STRING,
    },correo: {
      type: Sequelize.STRING,

    },contraseña: {
      type: Sequelize.STRING,
    },rol: {
      type: Sequelize.STRING
    }
  });

  return User;
};


module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("usuario", {
    // id_user: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
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
    },
  });

  return User;
};


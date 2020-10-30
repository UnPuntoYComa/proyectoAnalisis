module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    // id_user: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};


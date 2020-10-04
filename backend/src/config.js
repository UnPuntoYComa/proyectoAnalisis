module.exports = {
    HOST: "bd-1.ciepiciqxvgj.us-east-2.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "proyectoarqui",
    DB: "analisisProyecto",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }; 
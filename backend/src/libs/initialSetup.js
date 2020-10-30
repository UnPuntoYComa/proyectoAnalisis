const db = require("../database");

const User = db.user

export const initial = () => {
  User.create({
    username: "Administrador",
    email: "admin@gmail.com",
    password: "admin"
  })
  User.create({
    username: "Julio Rodriguez",
    email: "julio@gmail.com",
    password: "julio"
  })
  User.create({
    username: "Jonathan",
    email: "jony@gmail.com",
    password: "jony"
  })
}
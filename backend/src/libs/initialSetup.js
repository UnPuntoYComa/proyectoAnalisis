const db = require("../database");

const User = db.user

export const initial = () => {
  User.create({
    user_id: 1,
    username: "Administrador",
    email: "admin@gmail.com",
    password: "admin"
  })
}



// const Role = db.role;

// export const initial = () => {
//   Role.create({
//     id: 1,
//     name: "user",
//   });

//   Role.create({
//     id: 2,
//     name: "moderator",
//   });

//   Role.create({
//     id: 3,
//     name: "admin",
//   });
// };

const db = require("../database");

// export const checkDuplicateEmail = async (req, res, next) => {
//   const email = await db.user.findOne({
//     where: { correo: req.body.correo },
//   });
//   if (email) {
//     console.log("correo ya existe");
//     return res.status(400).json({ message: "El correo ya existe" });
//   }
//   next();
// };

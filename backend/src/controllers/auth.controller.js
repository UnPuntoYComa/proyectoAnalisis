import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const db = require("../database");
const config = require("./config");
//registro de usuarios
export const signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const newUser = await db.user.create({
      name,
      email,
      password: bcrypt.hashSync(password, 8),
    });

    const token = jwt.sign({ id: newUser.id_usuario }, config.SECRET, {
      expiresIn: 86400,
    });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Faltan datos por ingresar" });
  }
};

//inicio de sesion
export const signin = async (req, res) => {
  try {
    const userFound = await db.user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userFound) {
      console.log("usuario no encontrado");
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const matchPassword = await bcrypt.compare(
      req.body.password,
      userFound.password
    );
    if (!matchPassword) {
      console.log("contraseña invalida");
      return res
        .status(401)
        .json({ token: null, message: "Contraseña invalida" });
    }

    const token = jwt.sign({ id: userFound.id_usuario }, config.SECRET, {
      expiresIn: 86400,
    });

    res.json({ token, userFound });
  } catch (error) {
    console.log(error);
  }
};

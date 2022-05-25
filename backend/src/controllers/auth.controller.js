import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config";
import db from '../database'

//registro de usuarios
export const signup = async (req, res) => {
  try {
    const { nombre, correo, contraseña, rol } = req.body;
    const newUser = await db.user.create({
      nombre,
      correo,
      contraseña: await bcrypt.hash(contraseña, 5),
      rol,
    });

    const token = jwt.sign({ id: newUser.id_usuario }, config.SECRET, {
      expiresIn: 86400,
    });
    res.status(200).json({ token, newUser });
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
        correo: req.body.correo,
      },
    });

    if (!userFound) {
      console.log("usuario no encontrado");
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const matchPassword = await bcrypt.compare(
      req.body.contraseña,
      userFound.contraseña
    );
    if (!matchPassword) {
      console.log("contraseña invalida");
      return res
        .status(401)
        .json({ token: null, message: "Contraseña invalida" });
    }
  

    const token = jwt.sign({ id: userFound.id_usuario, rol: userFound.rol,nombre: userFound.nombre }, config.SECRET, {
      expiresIn: 86400,
    });

    res.json({ token, userFound });
  } catch (error) {
    console.log(error);
  }
};

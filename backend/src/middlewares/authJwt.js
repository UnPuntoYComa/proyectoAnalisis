import jwt from "jsonwebtoken";
import config from "../config";
import db from "../database";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No hay ningun token" });

    const decoded = jwt.verify(token, config.SECRET);
    req.id_usuario = decoded.id_usuario;

    const user = await db.user.findOne({
      where: {
        id_usuario: req.id_usuario,
      },
    });
    if (!user)
      return res.status(404).json({ message: "usuario no encontrado" });
    req.user = user;
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

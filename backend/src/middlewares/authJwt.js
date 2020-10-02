import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  console.log("verificar si hay token valido");
  next();
};

export const isAdmin = async (req, res, next) => {
  console.log("verificar si es admin");
  next();
};

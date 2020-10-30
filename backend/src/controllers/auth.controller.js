import jwt from 'jsonwebtoken';

//registro de usuarios
export const signup = async (req, res) => {
    res.json({message: "registrando usuario"})
}

//inicio de sesion
export const signin = async (req, res) => {
    res.json({message: "iniciando sesion"})
}

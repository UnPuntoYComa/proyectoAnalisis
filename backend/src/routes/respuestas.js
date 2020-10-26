import { Router } from "express";
const db = require('../database');
const router = Router();

router.post('/',async (req,res)=>{
    let fechaUsuario = new Date().toISOString().slice(0,10);
    const encuestado = await db.encuestado.create({res_fecha:fechaUsuario});
    const encuestadoId = encuestado.dataValues.id_encuestado;
    req.body.respuestas.forEach(async(dato,index)=>{
        dato.value.forEach(async valor=>{
            if(valor!==null){
            const respuesta = await db.respuestas.create({usuario_id:encuestadoId,res_texto:valor,id_pregunta:dato.idPregunta});
            }
        });
        });
        console.log(req.body.respuestas);
    res.json("creado exitosamente");
})

module.exports=router;
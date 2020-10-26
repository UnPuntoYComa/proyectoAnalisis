import { Router } from "express";
const db = require('../database');
const router = Router();
router.get('/',async (req,res)=>{
    const preguntas = await db.pregunta.findAll();
    res.json(preguntas);
})
router.post('/',async (req,res)=>{
    req.body.datos.forEach(async(dato,index)=>{
    const pregunta = await db.pregunta.create({modo_respuesta:dato.type,texto_pregunta:dato.body,orden:index,id_encuesta:req.body.id_encuesta});
        console.log(pregunta.dataValues.id_pregunta);
        let idPregunta=pregunta.dataValues.id_pregunta;
        dato.options.forEach(async opcion=>{
            if(opcion.body!==null){
                const pregunta = await db.opciones.create({texto:opcion.body,id_pregunta:idPregunta});
            }
        });
        });
    res.json("creado exitosamente");
})
router.post('/opcion',async (req,res)=>{
    const encuesta = await db.opciones.create(req.body);
    res.json(encuesta);
})
module.exports=router;
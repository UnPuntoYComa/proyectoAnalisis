import { Router } from "express";
const db = require('../database');
const router = Router();
router.get('/',async (req,res)=>{
    const encuesta = await db.encuesta.findAll({
        include: [ { model: db.pregunta,include:[db.opciones] } ],
    });
    res.json(encuesta);
})
router.get('/:id',async (req,res)=>{
    const encuesta = await db.encuesta.findAll({
        include: [ { model: db.pregunta,include:[db.opciones] } ],
        where :{    
            id_encuesta: req.params.id
        }
    });
    res.json(encuesta);
})
router.post('/',async (req,res)=>{
    var fechaActual = new Date().toISOString().slice(0,10);
    const encuesta = await db.encuesta.create({nombre_encuesta:req.body.nombre,fecha:fechaActual,descripcion:req.body.descripcion,estado_encuesta:req.body.estado,id_usuario:req.body.user});
    console.log(encuesta);
    res.json(encuesta);
})

module.exports=router;
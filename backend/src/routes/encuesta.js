import { Router } from "express";
const db = require('../database');
const router = Router();
router.get('/',async (req,res)=>{
    const encuestas = await db.encuesta.findAll();
    res.json(encuestas);
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
    const encuesta = await db.encuesta.create(req.body);
    res.json(encuesta);
})

module.exports=router;
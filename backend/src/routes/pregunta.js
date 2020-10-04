import { Router } from "express";
const db = require('../database');
const router = Router();
router.get('/',async (req,res)=>{
    const preguntas = await db.pregunta.findAll();
    res.json(preguntas);
})
router.post('/',async (req,res)=>{
    const pregunta = await db.pregunta.create(req.body);
    res.json(pregunta);
})
module.exports=router;
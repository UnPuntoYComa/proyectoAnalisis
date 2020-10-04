import { Router } from "express";
const db = require('../database');
const router = Router();

router.get('/',async (req,res)=>{
    const usuarios = await db.user.findAll();
    res.json(usuarios);
})
router.get('/:id',async (req,res)=>{
    const usuarios = await db.user.findAll({
        where :{
            id_usuario: req.params.id
        }
    });
    res.json(usuarios);
})
router.get('/encuesta/:id',async (req,res)=>{
    const usuarios = await db.user.findAll({
        include: [ { model: db.encuesta, as: 'encuesta' } ]
    });
    res.json(usuarios);
})
router.post('/',async (req,res)=>{
    const usuario = await db.user.create(req.body);
    res.json(usuario);
})
module.exports=router;
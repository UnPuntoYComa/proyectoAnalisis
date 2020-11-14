import { Router } from "express";
const db = require('../database');
import { verifyToken } from "../middlewares/authJwt";

const router = Router();
router.get('/',async (req,res)=>{
    const encuesta = await db.encuesta.findAll({
        include: [ { model: db.pregunta,include:[db.opciones] } ],
    });
    res.json(encuesta);
})

router.post('/',async (req,res)=>{
    var fechaActual = new Date().toISOString().slice(0,10);
    const encuesta = await db.encuesta.create({nombre_encuesta:req.body.nombre,fecha:fechaActual,descripcion:req.body.descripcion,estado_encuesta:req.body.estado,id_usuario:req.body.user});
    console.log(encuesta);
    res.json(encuesta);
})
router.delete('/eliminar/:id',async (req,res)=>{
    console.log(req.params);
    let encuesta = await db.encuesta.findOne({where: {id_encuesta: req.params.id}}).catch(e => {
        console.log(e.message)
     })
     if (!encuesta){
       console.log("err");
     }else{
     await encuesta.destroy();
     res.json("eliminado");
     console.log("borrado exitosamente.");
     }
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
module.exports=router;
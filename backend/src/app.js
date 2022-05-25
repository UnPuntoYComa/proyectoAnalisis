import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

//import rutas
import authRoutes from "./routes/auth.routes";
import usuario from "./routes/usuario";
//BD
//import {initial} from './libs/initialSetup'
const db = require("./database");
// db.sequelize.sync().then(() => { //sync({force: true}) para eliminar la tabla y syncronizar de nuevo
//   console.log('Sync Db');
//   //initial(); //crea los usuarios iniciales
// },(error)=> {
//   console.log(error);
// });

//initial setup
const app = express();
require("dotenv").config();

//Cors
app.use(cors());
//Configuracion body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Morgan
app.use(morgan("dev"));
app.use(express.json());

//Rutas
app.get("/", (req, res) => {
  res.json({
    message: "Proyecto Analisis 2",
  });
});
app.use("/api/auth", authRoutes);
app.use('/api/usuario',usuario);

export default app;

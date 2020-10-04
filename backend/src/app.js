import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

//import rutas
import authRoutes from "./routes/auth.routes";

//BD
import {initial} from './libs/initialSetup'
const db = require("./database");
db.sequelize.sync({force: true}).then(() => { //sync({force: true})
  console.log('Drop and Resync Db');
  initial();
});



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

export default app;

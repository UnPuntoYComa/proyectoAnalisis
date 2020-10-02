import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

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



export default app
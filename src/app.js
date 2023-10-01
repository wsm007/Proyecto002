import express from "express";
import morgan from "morgan";
import cors from "cors";
import routerApi from "./routes.js";
import { logErrors, errorHandler } from "./middlewares/error.handler.js";

// Inicializar express
const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:8000', // Permite el acceso a la API desde un origen en particular
  credentials: true
}));

app.use(morgan('dev')); //Permite visualizar los detalles de las solicitudes HTTP: método, URL, código de estado, tiempo de respuesta, tamaño de la respuesta, etc.
app.use(express.json());

// Rutas
routerApi(app);        
app.use(logErrors);
app.use(errorHandler);


// Exportar app
export default app;


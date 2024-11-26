import ENVIROMENT from "./config/enviroment.config.js";
import express from "express"
import statusRouter from "./router/status.router.js";
import authRouter from "./router/auth.router.js";
import configDb from "./db/config.js";

const app = express();
const PORT = ENVIROMENT.PORT || 3000

app.use(express.json())

app.use ('/api/status', statusRouter) 
app.use ('/api/auth', authRouter)

app.listen(PORT, () => {
    console.log(`el servidor se esta ejecutando en http://localhost:${PORT}`);
})
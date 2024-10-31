// Configuraciones de mi servidor, es decir mi API (server no es igual a API)
import express, { response } from "express"
import userRouter from "./routes/user.route.js"

const app = express()
const PORT = 3000

//MIDLEWARE es una aplicacion(funcion) que se ejecuta entremedio de una consulta
//MIDDLEWARE para poder reciir JSON en el body
app.use(express.json())
//MIDLEWARE para poder recibir informacion tipo URL-encoded
app.use(express.urlencoded({extended: true}))

app.get('/ping', (request, response) => {
    response.send('pong')
})

app.post('/enviar', (request, response) => {
    console.log(request.body)
    response.send('Recibido')
})

app.use('/api/users', userRouter)

//Registramos la ruta /api/users y delegamos las consultar recibidas a esta ruta al userRouter
app.listen(PORT, () => {
    console.log(`el servidor se esta ejecutando en http//localhost:${PORT}`)
})
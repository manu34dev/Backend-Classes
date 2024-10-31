import express, { response } from 'express'
import ResponseBuilder from '../helpers/ResponseBuilder.util.js'
import { getUserByName } from '../repositories/user.repository.js'

const userRouter = express.Router()

//nombre es un parametro de busqueda
userRouter.get('/:nombre', async (request, response) => {
    const nombre = request.params.nombre
    const usuario = await getUserByName(nombre)
    response.send(usuario)
})

userRouter.get('/', (request, response) => {
    let res = new ResponseBuilder()
    .setOK(true)
    .setStatus(200)
    .setCode(ResponseBuilder.CODE.GET_INFO_SUCCES)
    .setPayload({
        mensaje : 'datos del usuario'
    })
    .build()

    response.json(res)
})

userRouter.get('/cantidad' , (request, response) => {
    let res = new ResponseBuilder()
    .setOK(true)
    .setStatus(200)
    .setCode(ResponseBuilder.CODE.GET_INFO_SUCCES)
    .setPayload({
        cantidad : 9
    })
    .build()
    response.json(res)
})




/* 
Estructuras tipicas de respuesta:
{
    ok: boolean,
    status: statusHTTP,
    payload | data : objeto con informacion,
    code: number || string
    message: 'Datos de usuario obtenidos'
}
*/

/* let response = fetch()
if(response.ok){
    caso verdadero 
}
else{
    caso falso 
} */
export default userRouter
import express from 'express'
import filesystem from 'fs'
import productRouter from './routes/products.routes.js'


const app = express()
const PORT = 3000

//Middleware para habilitar que nuestra app reciba json en el body
app.use(express.json())

//Este endpoint es como una hola mundo en http
/* app.get('/ping', (req, res)=> {
    res.json({
        ok: true,
        status: 200,
        payload: {
            message: 'pong'
        }
    })
})  */

/* 
armar un endpoint con metodo POST /ping que reciba un objeto que tenga un message y mostrarlo en consola
Responder:
{
    ok: true,
    status: 200,
    payload: {
        message: 'Ping recibido'
    }
    }
*/

/* app.post('/ping', (req, res)=> {
    console.log(req.body.payload.message)
    res.json({
        ok: true,
        status: 200,
        payload: {
            message: 'Ping recibido'
        }
    })
}) */

/* 
CREAR PRODUCTOS

ROUTE: /api/products

Method GET
endpoint:/
(accion)obtenerProductos
obtener productos en el array de productos y devolverlo

Response:
{
ok: true,
status: 200,
payload: {
    products: {lista de productos}
}
}

Method GET
endpoint: /
obtenerProductoPorId
buscar en products.json buscar el producto por id igual al id recibido por parametro de busqueda y devolverlo
Response:
{
ok: true,
status: 200,
payload: {
    product: {producto}
}
}

Method POST
endpoint:/
crearProducto
va a recibir por body:
{
    title: 'nueva tv',
    price: 3000,
    category: 'technology',
    stock: 2
}
    deberan agregarlo a products.json y devolver la lista actualizada

Response:
{
ok: true,
status: 201,
payload: {
    products: {nueva lista con el producto agregado}
}
}

Method PUT
endpoint:/:product_id
actualizarProductoPorId
Response:
{
ok: true,
status: 201,
payload: {
    product: {producto modificado}
}
}

Method DELETE
endpoint:/:product_id
eliminarProducto
Response:
{
ok: true,
status: 200,
payload: {
    products: {
    message: 'producto eliminado'
    }
}
}

*/


app.get('/api/products', async (request, response)=> {
    let respuesta = {
        ok: true,
        status: 200,
        payload: {
            products: []
        }
    }
    const result = await filesystem.promises.readFile('./data/products.json' , 'utf-8')
    if(result){
        respuesta.payload.products.push(JSON.parse(result))
    }
    
    response.send(respuesta)
})

app.post('/api/products', async (request, response) => {
    /* const product ={
        title: 'titulo',
        price: 3000,
        category: 'tech',
        stock: 10
    } */
    
    let products
    const result = await filesystem.promises.readFile('./data/products.json' , 'utf-8')
    if(!result){
        products = []
    }
    else{
        //En caso de que haya productos
        products = JSON.parse(result)
    }
    
    let product = request.body
    
    products.push(product)
    await filesystem.promises.writeFile('./data/products.json', JSON.stringify(products), {encoding: 'utf-8'})

    response.send()
})

app.use ('/api/products', productRouter)

app.listen (PORT, () => {
    console.log(`el servidor se esta escuchando en http://localhost:${PORT}`)
} )
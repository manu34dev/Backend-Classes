import express from "express"
import filesystem from 'fs'

const productsRoutes = express.Router()

const readJson = async (fileName) => {
    const file = `./data/${fileName}.json`
    try{
        const json = await filesystem.promises.readFile(file, {encoding: 'utf-8'})
        return JSON.parse(json)
    }
    catch(error){
        throw console.error('Error al leer archivo JSON', error)
    }
}

// GET /:product_id => obtener un producto por id

productsRoutes.get ('/:product_id', async(req, res) => {
    try{
        const productList = await readJson('products')
        const {product_id} = req.params
        const productSearch = productList.find((product) => product.id === parseInt(product_id))
        if (!productSearch){
            return res.json({
                ok: false,
                status: 404,
                payload: {
                    message: 'product not found'
                }
            })
        }
        res.json({
            ok: true,
            status: 200,
            payload: {
                message: 'Product obatined',
                product: productSearch
            }
        })
    }
    catch(error){
        console.error('Error al obtener producto', error)
        res.json({
            ok: false,
            status: 500,
            payload: {
                message: 'Internal server error',
                detail: error.message
            }
        })
    }
})

//GET /:product => obtener todos los productos

productsRoutes.get('/', async (req, res)=> {
    try {
        let respuesta = {
            ok: true,
            status: 200,
            payload: {
                message: "Product obtained",
                products: []
            }
        }
        const result = await filesystem.promises.readFile('./data/products.json' , 'utf-8')
        if(result){
            respuesta.payload.products.push(JSON.parse(result))
        }
        
        res.send(respuesta)
    }

    catch (error){
        console.error('Error al obtener productos', error)
        res.json({
            ok: false,
            status: 500,
            payload: {
                message: 'Internal server error',
                detail: error.message
            }
        })
    }
    
})

//POST / => Crear un producto
productsRoutes.post('/', async (request, response) => {
    try {
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

        response.json({
            ok: true,
            status: 200,
            payload: {
                message: 'Product Created',
                product: product
            }
        })
    } catch (error){
        console.error('Error al crear producto', error)
        response.json({
            ok: false,
            status: 500,
            payload: {
                message: 'Internal server error',
                detail: error.message
            }
        })
    }
})

//PUT /:product_id => actualizar un producto

//DELETE /:product_id => elimina el producto

export default productsRoutes
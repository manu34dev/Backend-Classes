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
    } catch (error) {
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
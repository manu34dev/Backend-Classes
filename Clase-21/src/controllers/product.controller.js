import ProductRepository from "../repositories/product.repository.js"
import ResponseBuilder from "../utils/builders/responseBuilder.js"

//Crear el schema en mongo db
//desarrollar el controlador

//que recibo? nada

//que devuelvo si todo esta bien?  Lista de productos activos [Products]
export const getAllProductsController = async (req, res) => {
try{
        const products = await ProductRepository.getAllProducts()
        if(!products){
            const response = new ResponseBuilder()
            .setOk (false)
            .setStatus (404)
            .setMessage ("Products not found")
            .setPayload ({
                detail: "Products not found"
            })
            .build()
            return res.status(404).json(response)
        }

        const response = new ResponseBuilder()
        .setOk (true)
        .setStatus (200)
        .setMessage ("Productos obtenidos")
        .setPayload ({
            products: products
        })
        .build()
        return res.json(response)
    }
    catch(error){
        console.log(error)
    }
}

//Recibo el id del producto
//params: id (id del producto)
//Respondo con el producto
export const getProductByIdController = async (req, res) => {
        try{
            const {product_id} = req.params
            const product_found = await ProductRepository.getProductById(product_id)

            if (!product_found) {
                const response = new ResponseBuilder()
                .setOk (false)
                .setStatus (404)
                .setMessage ("Product not found")
                .setPayload ({
                    detail: `Product with id ${product_id} does not exist`
                })
                .build()
                return res.status(404).json(response)
            }

            const response = new ResponseBuilder()
            .setOk (true)
            .setStatus (200)
            .setMessage ("Product obtained")
            .setPayload ({
                product: product_found
            })
            .build()
            return res.json(response)
        }
        catch(error){
            console.error(error.messsage)
    }
}

export const createProductController = async (req, res) => {
        try{
            const {title, description, price, stock, category, image} = req.body
            const seller_id= req.user_id

            if (!title){
                const response = new ResponseBuilder()
                .setOk (false)
                .setStatus (400)
                .setMessage ("Bad request")
                .setPayload ({
                    detail: "Title is required"
                })
                .build()
                return res.status(400).json(response)
            }

            if (!description){
                const response = new ResponseBuilder()
                .setOk (false)
                .setStatus (400)
                .setMessage ("Bad request")
                .setPayload ({
                    detail: "Description is required"
                })
                .build()
                return res.status(400).json(response)
            }

            if (!price || price <= 0 || isNaN (price)) {
                const response = new ResponseBuilder()
                .setOk (false)
                .setStatus (400)
                .setMessage ("Bad request")
                .setPayload ({
                    detail: "Price must be a number greater than zero"
                })
                .build()
                return res.status(400).json(response)
            }

            if (!stock || stock <= 0 || isNaN (stock)) {
                const response = new ResponseBuilder()
                .setOk (false)
                .setStatus (400)
                .setMessage ("Bad request")
                .setPayload ({
                    detail: "Stock must be a number greater than zero"
                })
                .build()
                return res.status(400).json(response)
            }

            if (!category) {
                const response = new ResponseBuilder()
                .setOk (false)
                .setStatus (400)
                .setMessage ("Bad request")
                .setPayload ({    
                    detail: "Category is required"})
                .build()
                return res.status(400).json(response)
            }

            if(!seller_id) {
                const response = new ResponseBuilder()
                .setOk (false)
                .setStatus (400)
                .setMessage ("Bad request")
                .setPayload ({
                    detail: "Seller id is required"
                })
                .build()
                return res.status(400).json(response)
            }

            if(image && Buffer.byteLength(image, 'base64') > 2 * 1024 * 1024){
                console.error('Imagen muy grande')
                return res.sendStatus(400)
            }

            const newProduct = {
                title,
                price,
                stock,
                description: description,
                category,
                image_base_64: Buffer.from(image, 'base64'),
                seller_id
            }

            const newProductSaved = await ProductRepository.createProduct(newProduct)
        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setMessage('Product Created')
            .setPayload(
                {
                    data: {
                        title: newProductSaved.title,
                        price: newProductSaved.price,
                        stock: newProductSaved.stock,
                        descripcion: newProductSaved.descripcion,
                        category: newProductSaved.category,
                        id: newProductSaved._id
                    }
                }
            )
            .build()
        res.json(response)
    }

        catch(error){
            console.error(error.messsage)
        }
    }

export const updateProductController = (req, res) => {
        try{
            const {product_id} = req.params
            const {title, description, price, stock, category} = req.body

            if (!title|| !description || !price || !category || !stock) {
                const response = new ResponseBuilder()
                .setOk (false)
                .setStatus (400)
                .setMessage ("Bad request")
                .setPayload ({
                    detail: "Data Required"
                })
                .build()
                return res.status(400).json(response)
            }

            const product_updated = ProductRepository.updateProduct(product_id, title, description, price, stock, category)
            const response = new ResponseBuilder()
            .setOk (true)
            .setStatus (200)
            .setMessage ("Product updated")
            .setPayload ({
                product: product_updated
            })
            .build()
            return res.json(response)
        }

        catch(error){
            console.error(error.messsage)
        }
    }


export const deleteProductController = (req, res) => {
        try{
            const {product_id} = req.params
            const product_deleted = ProductRepository.deleteProduct(product_id)

            if (!product_deleted) {
                const response = new ResponseBuilder()
                .setOk (false)
                .setStatus (404)
                .setMessage ("Product not found")
                .setPayload ({
                    detail: `Product with id ${product_id} does not exist`
                })
                .build()
                return res.status(404).json(response)
            }

            const response = new ResponseBuilder()
            .setOk (true)
            .setStatus (200)
            .setMessage ("Product deleted")
            .setPayload ({
                product: product_deleted
            })
            .build()
            return res.json(response)
        }

        catch{
            console.error(error.messsage)
        }
}
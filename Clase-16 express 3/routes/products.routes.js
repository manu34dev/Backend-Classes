import express from 'express'

const productRouter = express.Router()

//En este endpoint :product_id es un parametro de busqueda
//El req.params sera {product_id: 'valor x'}
productRouter.get('/detail/:lang/:product_id', (req, res) =>{
    const {resumido} = req.query
    console.log(resumido)
        if(resumido === 'true'){
            return res.json({
                message: 'funciona'
            })
        }
    const {product_id, lang} = req.params 
    if(lang == 'es'){
        res.json({
            ok: true,
            status: 200,
            payload: {
                message: 'detalle del producto con id: ' + product_id
            }
    })
    }
    else {
        res.json({
            ok: true,
            status: 200,
            payload: {
                message: 'Details of product with id: ' + product_id
            }
    })
    }
    
})



export default productRouter

/* 
Traer detalles del producto con ID X
http://localhost:3000/api/products/detail/
*/
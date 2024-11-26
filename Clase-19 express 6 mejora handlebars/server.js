//Motores de plantilla o templates engine
//Tambien aprendemos a configurar archivos estaticos
//HANDLEBARS

import express from 'express'
import handlebars from 'express-handlebars'

const app = express()

const PORT = 5000

//Indicar a nuesto server que pueda enviar los archivos estaticos dentro de la carpeta /public
app.use(express.static('./public'))

//midleware que nos transforma las consultas en url-encoded a objetos
app.use(express.urlencoded({extended: true}))

//Indicamos que a los archivos con extension handlebars deberemos tratarlos usando la libreria handlebars
app.engine('handlebars', handlebars.engine())

//Cuando el servidor quiera renderizar respuestas, lo hara usando a handlebars
app.set('view engine', 'handlebars')
app.set('views', './views');

const productos = [
    {
        id: 1,
        nombre: 'Tv samsung',
        precio: 100,
        descripcion: 'La mejor tv',
        stock: 5
    },
    {
        id: 2,
        nombre: 'Tv LG',
        precio: 150,
        descripcion: 'La mejor tv',
        stock: 10
    },
    {
        id: 3,
        nombre: 'Tv Noblex',
        precio: 200,
        descripcion: 'La mejor tv',
        stock: 54
    }
]

app.get('/', (req, res) => {
    try{
        

        /* throw new Error('No hay productos ahora') */
        
        const response = {
            status: 200,
            message: "Productos obtenidos",
            ok: true,
            data: {
                titulo: 'Titulo X', 
                fecha_hoy: '3/10/2024', 
                valor_dolar: 1200,
                productos
            },
            layout: 'products' //El nombre del layout que queremos mostrar
        }
        res.render('home', response)
    }
    catch(error){
        const response = {
            status: 500,
            message: "Internal server error",
            ok: false,
            data: {
                detail: error.message
            }
        }
        res.render('home', response)
    }
   
})

app.get('/products/new', (req, res) => {
    res.render('productForm', {
        data: {
            errors: {
                nombre: null,
                precio: null,
                stock: null,
                descripcion: null
            },
            form_state:{
                product: {
                    nombre: '',
                    precio: '',
                    stock: '',
                    descripcion: ''
                }
            }
        }
    })
})

app.post('/products/new', (req, res) => {
    const {nombre, precio, stock, descripcion} = req.body
    const newProduct = {nombre, precio, stock, descripcion}
    console.log(req.body)
    console.log('Recibido!')
    console.log(newProduct)
    //Si el producto se creo, redireccionar a lista de productos o detalle de producto
    //si no se pudo crear mostrar el formulario con el error ocasionado
    const errores = {
            nombre: null,
            precio: null,
            stock: null,
            descripcion: null
    }
    if(!req.body.nombre.trim() || isNaN(req.body.nombre) ){
        errores.nombre = 'no se puede enviar valor numerico o vacio'
        }
    if(!req.body.precio.trim() || isNaN(req.body.precio.trim())){
        errores.precio = 'el precio debe ser mayor a 0 y debe ser un numero'
    }
    if(!req.body.stock.trim() || isNaN(req.body.stock.trim())){
        errores.stock = 'el stock debe ser mayor a 0 y debe ser un numero'
    }
    //transformo mi objeto de errores a array de valores
    /* Ej: Object.values({ nombre: 'hay error',precio: null,stock: null,descripcion: null}) => ['hay error', null, null, null]
    */
    let hayError = Object.values(errores).some(error => error !== null)
    if (hayError){
        return res.render(
            'productForm',
            {
                data:{
                    errors: errores,
                    form_state: {
                        product: newProduct
                    }
                }
            }
        )   
    }
    
    productos.push({...newProduct, id: productos.lenght + 1})
    res.redirect('/')
})

/* 
Method: GET 
Endpoint: /product/:product_id/update
Accion: Mostrar formulario de actualizacion
Descripcion:
Recibiran un id por parametro de busqueda, deberan buscar ese producto y renderizar un formulario para actualizar el producto, el formulario cargara los valores actuales del producto

Ejemplo de respuesta: 
res.render('update-product-form',{
    errores: {
        nombre: null,
        stock: null,
        precio: null,
        descripcion: null
    },
    form_state: {
        product: {
            id: 1,
            nombre: 'Tv samsung',
            precio: 100,
            descripcion: 'La mejor tv',
            stock: 5
        }
    }
})

Ejemplo de plantilla:

<form action="/product/{{this.form_state.product.id}}/update" method="POST">

    <input type='submit' value="Actualizar" />
</form>


Method: POST
Endpoint /product/:product_id/update
Accion: Actualizar Producto
Descripcion:
Deberemos tener una ruta para actualizar producto, cuando se nos envie el producto deberemos validar los campos:
stock, precio, nombre (como en la ruta de POST). Si hay error, deberemos mostrar el error y NO actualizar
Si no hay errores deberemos actualizar el producto con los nuevos valores (NO agregar Ni cambiar el id bajo ningun termino)
Cuando se actualize redireccionar a '/product/:product_id'

*/


app.get('/products/:product_id', (req, res) => {
    const {product_id} = req.params
    //Aqui pueden validar el product_id
    const producto_buscado = productos.find(producto => producto.id === Number(product_id ))
    const response = {
        ok: true,
        message: 'Producto obtenido',
        status: 200,
        data: {
            product: {
                ...producto_buscado,
                esCaro: producto_buscado.precio > 150
            }
        }
    }
    res.render('product-detail', response)
})

app.get('/products/:product_id', (req, res) => {
    const {product_id} = req.params
    //Aqui pueden validar el product_id
    const producto_buscado = productos.find(producto => producto.id === Number(product_id ))
    const response = {
        ok: true,
        message: 'Producto obtenido',
        status: 200,
        data: {
            product: {
                ...producto_buscado,
                esCaro: producto_buscado.precio > 100
            }
        }
    }
    res.render('product-detail', response)
})

app.get('/products/:product_id/update', (req, res) => {
    const {product_id} = req.params
    const producto_buscado = productos.find(producto => producto.id === Number(product_id))
    console.log(producto_buscado)
    res.render('product-form-update', {
        data: {
            errors: {
                nombre: null,
                stock: null,
                precio: null,
                descripcion: null
            },
            form_state:  {
                product: {
                    id: producto_buscado.id,
                    nombre: producto_buscado.nombre,
                    stock: producto_buscado.stock,
                    precio: producto_buscado.precio,
                    descripcion: producto_buscado.descripcion
                }
            }
        }
    })
})

app.post('/product/:product_id/update', (req, res) => {
    /* Logica de formulario de actualizacion */
})







app.listen(PORT, ()=> {
    console.log(
        `La aplicacion se esta ejecutando en http://localhost:${PORT}`
    )
})

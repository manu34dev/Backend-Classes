import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import { authenticatedHeaders, GET, unnauthenticatedHeaders} from '../../fetching/http.fetching'
import useProducts from "../../Hooks/useProducts";
import { getauthenticatedHeaders } from "../../fetching/http.fetching"


const Home = () => {
const user_info = JSON.parse(sessionStorage.getItem('user_info'))
const {products, isLoadingProducts} = useProducts()
console.log(products)

return (
<div>
<h1>Bienvenido {user_info.name}</h1>
<Link to={'/product/new'}>Crear producto</Link>
{
isLoadingProducts 
? <span>Cargando....</span>
: <ProductsList products={products}/>
}
</div>
)
}

const ProductsList = ({products}) => {

return (
products.map(product => {
return <Product 
key={product.id} 
{...product}
/>
})
)
}

const ConfirmDeleteProduct = (id) => {
const confirmResult = window.confirm("Confirma que desea eliminar el producto?")

if(confirmResult) {
DeleteProduct(id)
}
}

const DeleteProduct = (product_id) => {

    fetch(`http://localhost:3000/api/products/${product_id}`, {
        method: 'DELETE',
        headers: getauthenticatedHeaders()
    })
    .then((response) => { 
console.log({ response }) 
return response.json()
})
    .catch((error) => { console.error(error) })
}

const Product = ({title, price, stock, description, image, id}) => {

return (
<div>
<h2>{title}</h2>
<img 
                    src={image} 
                    alt={title} 
                    width={'200'} 
                />
<span>Precio: ${price}</span>
<br />
<Link to={'/product/' + id}>Ir a detalle</Link>
<br />
<Link to={'/product/' + id + '/edit'}>Editar producto</Link>
<br />
<button onClick={() => ConfirmDeleteProduct(id) }>Eliminar</button>
</div>
)
}
export default Home;
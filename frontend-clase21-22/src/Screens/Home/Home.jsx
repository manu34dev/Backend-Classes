import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";


const Home = () => {
    const user_info = JSON.parse(sessionStorage.getItem('user_info'))
        const {products, isLoadedProducts} = useProducts()
        console.log(products)

    return (
        <>
            <h1>Bienvenido {user_info.name}</h1>
            <Link to={'/product/new'}>Crear Producto</Link>
            {
                isLoadedProducts
                ?<h2>Cargando...</h2>
                :
                <ProductsList products = {products}/>
            }
        </>
    );
};

const ProductsList = ({products}) => {
    return(
        products.map((product) => {
            return<Product
            key={product.id}
            {...product}
            />
        })
    ) 
}

const Product = ({title, price, stock, description, image, id}) =>{
    return(
        <div>
            <h2>{title}</h2>
            <img src={image} width={200} />
            <span>Precio: ${price}</span>
            <Link to={'/product/' + id}>Ir al detalle</Link>
        </div>
    )
}
export default Home;
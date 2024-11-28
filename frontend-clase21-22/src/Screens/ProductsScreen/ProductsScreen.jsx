import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../../Hooks/productDetail'


const ProductScreen = () => {
    const {product_id} = useParams()
    console.log({product_id})

    //Llamar al hook useProductDetail
    const { product_detail_state, product_detail_loading, product_detail_error} = ProductDetails(product_id)

    //Ya con estos estados pueden renderizar la UI con errores, detalles o loading
    return (
    <div>
        <h2>Detalle del producto</h2>
        {
        product_detail_loading 
        ? <h2>Cargando...</h2>
        :(
            product_detail_error 
            ? <h2>{product_detail_error}</h2>
            : <ProductDetail {...product_detail_state}/>
        )
        }
    </div>
    )
}


const ProductDetail = ({title, price, stock, descripcion, image_base_64, id}) => {
  return (
    <div>
      <span> ID: {id}</span>
      <h2>{title}</h2>
      <img 
        src={image_base_64} 
        alt={title} 
        width={'200'} 
      />
      <span> Precio: ${price}</span>
      <span> Stock: {stock}</span>
      <span> Descripcion: {descripcion}</span>
    </div>
  )
}

export default ProductScreen
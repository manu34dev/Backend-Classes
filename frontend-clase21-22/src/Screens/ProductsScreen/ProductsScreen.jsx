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


const ProductDetail = ({title, price, stock, descripcion, image, _id}) => {
  
  const image_base_64 ="data:image/jpg;base64" + image.toString('base64')
  return (
    <div>
      <span> ID: {_id}</span>
      <h2>{title}</h2>
      <img 
        src= {image_base_64} 
        alt={title} 
        width={'100'} 
      />
      <span> Precio: ${price}</span>
      <br />
      <span> Stock: {stock}</span>
      <br />
      <span> Descripcion: {descripcion}</span>
    </div>
  )
}

export default ProductScreen
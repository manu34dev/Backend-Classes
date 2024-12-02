import {React , useEffect, useState} from "react";
import { extractFormData } from "../../Utils/extractFormData";
import useForm from "../../Hooks/useForm";
import { GET, getauthenticatedHeaders, PUT } from "../../fetching/http.fetching";


const UpdateProduct = (product_id) => {
    const [product_detail_state, setProductDetailState] = useState(null)
    const getProductDetail = async (product_id) =>{
        const product_detail_response = await GET(
            `http://localhost:3000/api/products/${product_id}`, 
            {
                headers: getauthenticatedHeaders()
            }
        )

        setProductDetailState(product_detail_response.payload.product)
}

useEffect(
    () =>{
        getProductDetail(product_id)
    },
    []
)
const { form_values_state, handleChangeInputValue }  =  useForm({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
}
)

    const handleSubmitUpdateProduct = async (e) => {
        try {
            e.preventDefault();
            const form_HTML = e.target;
            const form_values = new FormData(form_HTML);
            const form_fields = {
                title: "",
                description: "",    
                price: "",    
                stock: "",    
                category: "",    
            };

            const formValuesObject = extractFormData(form_fields, form_values);
            console.log(formValuesObject);
            //Agrego la image al objeto de los valores del form
            formValuesObject.image = image;

            const response = await PUT(
                "http://localhost:3000/api/products_id/edit",
                {
                    headers: getauthenticatedHeaders(),
                    body: JSON.stringify(formValuesObject),
                }
            );
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

return (
    <div>
        <h1>Editar Product</h1>
        <form onSubmit={handleSubmitUpdateProduct}>
            <div>
                <label htmlFor="title">Ingere el nuevo titulo</label>
                <input type="text" name="title" value={product_detail_state?.title} placeholder="Titulo" onChange={handleChangeInputValue} />
            </div>
            <div>
                <label htmlFor="description">Ingrese la nueva descripcion</label>
                <textarea name="description" id="description" placeholder="Descripcion" onChange={handleChangeInputValue}></textarea>
            </div>
            <div>
                <label htmlFor="price">Ingrese el nuevo precio</label>
                <input type="text" name="price" placeholder="100" onChange={handleChangeInputValue} />
            </div>
            <div>
                <label htmlFor="stock">Ingrese el nuevo stock</label>
                <input type="text" name="stock" placeholder="10" onChange={handleChangeInputValue} />
            </div>
            <div>
                <label htmlFor="category">Ingrese la nueva categoria</label>
                <input type="text" name="category"  placeholder="Electronica" onChange={handleChangeInputValue} />
            </div>
            <div>
                <label htmlFor="image">Ingrese la nueva imagen</label>
                <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button type="submit">Actualizar producto</button>
        </form>
    </div>
)
}

export default UpdateProduct
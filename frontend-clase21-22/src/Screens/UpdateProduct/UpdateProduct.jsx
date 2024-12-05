import { React, useState } from "react";
import { extractFormData } from "../../Utils/extractFormData";
import { getauthenticatedHeaders, PUT } from "../../fetching/http.fetching";
import { useParams } from 'react-router-dom'
import PreviousProductUpdate from '../../Hooks/preProductUpdate.jsx'


const UpdateProduct = () => {

    const {product_id} = useParams()
    console.log({product_id})

    const { product_detail_state, product_detail_loading, product_detail_error} = PreviousProductUpdate(product_id)

    console.log('product_detail_state: ', product_detail_state)

    const [title, setTitle] = useState(product_detail_state?.title)
    const [description, setDescription] = useState(product_detail_state?.description)

    function handleTextChange(e) {
        setTitle(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    const handleSubmitUpdateProduct = (e) => {
        try {
            e.preventDefault();
            const form_HTML = e.target;
            const form_values = new FormData(form_HTML);
            const form_fields = {
                "title": "",
                "description": "",    
                "price": "",    
                "stock": "",    
                "category": "",    
            };

            const formValuesObject = extractFormData(form_fields, form_values);
            console.log(formValuesObject);
            //Agrego la image al objeto de los valores del form
            formValuesObject.image = image; 

            const response = PUT(
                fetch("http://localhost:3000/api/:product_id/edit",
                {
                    headers: getauthenticatedHeaders(),
                    body: JSON.stringify(formValuesObject),
                }
            ));
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }


return (
    <div>
        <h1>Editar Product</h1>
        <form onSubmit={handleSubmitUpdateProduct} method="PUT">
            <div>
                <label htmlFor="title">Ingere el nuevo titulo</label>
                <input type="text" name="title" value={title} onChange={handleTextChange} placeholder="Titulo"  />
            </div>
            <div>
                <label htmlFor="description">Ingrese la nueva descripcion</label>
                <textarea name="description" id="description" value={description} onChange={handleDescriptionChange} placeholder="Descripcion" ></textarea>
            </div>
            <div>
                <label htmlFor="price">Ingrese el nuevo precio</label>
                <input type="text" name="price" placeholder="100"  />
            </div>
            <div>
                <label htmlFor="stock">Ingrese el nuevo stock</label>
                <input type="text" name="stock" placeholder="10"  />
            </div>
            <div>
                <label htmlFor="category">Ingrese la nueva categoria</label>
                <input type="text" name="category"  placeholder="Electronica"  />
            </div>
            {/* <div>Agregar Imagen Actual</div> */}
            <div>
 {/*                <label htmlFor="image">Ingrese la nueva imagen</label>
                <input type="file" name="image" /> */}
            </div>
            <button type="submit">Actualizar producto</button>
        </form>
    </div>
)
}

/* export default UpdateProduct */
